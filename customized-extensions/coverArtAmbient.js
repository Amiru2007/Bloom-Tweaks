function waitForSpicetify() {
    if (!Spicetify.Player) {
        setTimeout(waitForSpicetify, 100);
        return;
    }

    async function updateAmbientEffect(retries = 10, delay = 100) {
        if (!Spicetify.Player || !Spicetify.Player.data || !Spicetify.Player.data.item) {
            console.warn('Spicetify Player or track data is not available. Retrying...');
            if (retries > 0) {
                setTimeout(() => {
                    updateAmbientEffect(retries - 1, delay);
                }, delay);
                return;
            } else {
                console.error('Max retries reached. Exiting updateAmbientEffect.');
                return;
            }
        }

        const currentTrack = Spicetify.Player.data.item;
        const albumCoverUrl = currentTrack.album.images[0]?.url;

        if (!albumCoverUrl) {
            console.warn('Album cover URL not found.');
            return;
        }

        const ambientContainer = await createAmbientContainer();
        if (ambientContainer) {
            console.log('Updating ambient container with new cover:', albumCoverUrl);
            ambientContainer.style.backgroundImage = `url(${albumCoverUrl})`;
        }
    }

    let isAnimating = false; // Flag to prevent overlapping animations
    let bassDetectionInterval = null; // Variable to hold the bass detection interval

    function triggerZoomEffect(element) {
        if (isAnimating) return; // Prevent triggering if already animating
        isAnimating = true; // Set the flag

        console.log('Starting zoom effect...');

        // Apply zoom-in
        element.style.transform = 'scale(1.2)'; // Scale up
        element.style.transition = 'transform 0.1s ease'; // Faster transition for zoom-in

        setTimeout(() => {
            console.log('Zoom-in completed. Starting zoom-out...');
            element.style.transform = 'scale(1)'; // Back to original scale
            element.style.transition = 'transform 0.1s ease'; // Transition for zoom-out
        }, 100); // Duration of zoom-in effect

        // Reset the animation flag after the zoom-out
        setTimeout(() => {
            isAnimating = false; // Reset the flag
        }, 200); // Total duration of zoom-in + zoom-out
    }

    function setupDynamicAmbient() {
        Spicetify.Player.addEventListener("songchange", () => {
            console.log('Song changed, updating ambient effect...');
            updateAmbientEffect();
            // Start bass detection if the track is playing
            if (Spicetify.Player.isPlaying) {
                startBassDetection();
            }
        });

        // Listen for play/pause events
        Spicetify.Player.addEventListener("play", startBassDetection);
        Spicetify.Player.addEventListener("pause", stopBassDetection);
    }

    function startBassDetection() {
        if (bassDetectionInterval) {
            console.log('Bass detection already in progress.');
            return; // Avoid starting a new interval if one is already running
        }

        bassDetectionInterval = setInterval(async () => {
            if (!Spicetify.Player || !Spicetify.Player.data) return;

            // Check if the track is still playing
            if (!Spicetify.Player.isPlaying) {
                console.log('Track is paused. Stopping bass detection.');
                clearInterval(bassDetectionInterval);
                bassDetectionInterval = null; // Clear the interval variable
                return;
            }

            const audioData = await fetchAudioData();

            if (audioData && bassDropDetected(audioData)) {
                const ambientContainer = document.getElementById('ambient-container');
                if (ambientContainer) {
                    console.log('Hard bass drop detected. Triggering zoom effect...');
                    triggerZoomEffect(ambientContainer); // Trigger zoom effect here
                }
            }
        }, 100); // Check every 100ms (adjust as needed)

        console.log('Started bass detection.');
    }

    function stopBassDetection() {
        if (bassDetectionInterval) {
            clearInterval(bassDetectionInterval);
            bassDetectionInterval = null; // Clear the interval variable
            console.log('Stopped bass detection.');
        }
    }

    async function fetchAudioData() {
        for (let attempts = 5; attempts > 0; attempts--) {
            try {
                const data = await Spicetify.getAudioData();
                console.log('Fetched audio data:', data);
                return data;
            } catch (error) {
                console.error('Error fetching audio data:', error);
                await new Promise(resolve => setTimeout(resolve, 200)); // Wait before retrying
            }
        }
        console.error('Failed to fetch audio data after multiple attempts.');
        return null;
    }

    function bassDropDetected(audioData) {
        if (!audioData || !audioData.beats) {
            console.error('Audio data or beats not available.');
            return false;
        }

        // Define criteria for a hard bass drop
        const thresholdConfidence = 0.7; // Higher threshold for bass detection
        const minimumDuration = 0.3; // Minimum duration of the beat to qualify as a hard bass

        // Check if any beat exceeds the threshold and meets the duration criteria
        const detected = audioData.beats.some(beat => {
            const isBassDrop = beat.confidence > thresholdConfidence && beat.duration >= minimumDuration;
            console.log(`Checking beat - Confidence: ${beat.confidence}, Duration: ${beat.duration}: ${isBassDrop ? 'Detected' : 'Not Detected'}`);
            return isBassDrop;
        });

        if (detected) {
            console.log('Hard bass drop detected!');
        } else {
            console.log('No hard bass drop detected.');
        }

        return detected;
    }

    async function createAmbientContainer(retries = 10, delay = 100) {
        let ambientContainer = document.getElementById('ambient-container');

        if (!ambientContainer) {
            let nowPlayingBar = document.querySelector('.main-nowPlayingBar-nowPlayingBar');
            let retryCount = 0;

            // Retry logic to wait for Now Playing Bar
            while (!nowPlayingBar && retries > 0) {
                console.warn(`Now Playing Bar container not found. Retrying... (${retryCount + 1})`);
                await new Promise((resolve) => setTimeout(resolve, delay));
                nowPlayingBar = document.querySelector('.main-nowPlayingBar-nowPlayingBar');
                retries--;
                retryCount++;
            }

            if (!nowPlayingBar) {
                console.error('Now Playing Bar container not found after retries. Exiting.');
                return null;
            }

            console.log(`Now Playing Bar container found after ${retryCount} retries.`);

            ambientContainer = document.createElement('div');
            ambientContainer.id = 'ambient-container';

            ambientContainer.style.position = 'absolute';
            ambientContainer.style.top = '12px';
            ambientContainer.style.left = '9px';
            ambientContainer.style.width = '62px';
            ambientContainer.style.height = '62px';
            ambientContainer.style.zIndex = '-1';
            ambientContainer.style.borderRadius = '6px';
            ambientContainer.style.backgroundSize = 'cover';
            ambientContainer.style.backgroundPosition = 'center center';
            ambientContainer.style.filter = 'blur(10px) brightness(90%)';
            ambientContainer.style.transform = 'scale(0)'; // Initial scale 0 for zoom-in effect

            nowPlayingBar.appendChild(ambientContainer);

            console.log('Ambient container created and appended to Now Playing Bar.');
        }

        return ambientContainer;
    }

    setupDynamicAmbient(); // Start the dynamic ambient effect
}

waitForSpicetify();
