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

        const ambientContainer = createAmbientContainer();
        if (ambientContainer) {
            ambientContainer.style.backgroundImage = `url(${albumCoverUrl})`;

            // Trigger the zoom effect when the ambient image updates
            triggerZoomEffect(ambientContainer);
        }
    }

    function triggerZoomEffect(element) {
        element.style.transform = 'scale(0)';
        element.style.transition = 'transform 2s ease 0.2s';

        const parent = element.parentNode;
        parent.removeChild(element);
        parent.appendChild(element);

        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 500);
    }

    function setupDynamicAmbient() {
        Spicetify.Player.addEventListener("songchange", () => {
            updateAmbientEffect();
        });

        updateAmbientEffect();
    }

    function createAmbientContainer() {
        let ambientContainer = document.getElementById('ambient-container');
        
        if (!ambientContainer) {
            const nowPlayingBar = document.querySelector('.main-nowPlayingBar-nowPlayingBar');

            if (!nowPlayingBar) {
                console.warn('Now Playing Bar container not found.');
                return null;
            }

            ambientContainer = document.createElement('div');
            ambientContainer.id = 'ambient-container';

            // Set styles for the ambient container
            ambientContainer.style.position = 'absolute';
            ambientContainer.style.top = '0';
            ambientContainer.style.left = '0';
            ambientContainer.style.width = '86px';
            ambientContainer.style.height = '86px';
            ambientContainer.style.zIndex = '-1';
            ambientContainer.style.borderRadius = 'var(--border-radius-3)';
            ambientContainer.style.backgroundSize = 'cover';
            ambientContainer.style.backgroundPosition = 'center center';
            ambientContainer.style.transform = 'scale(0)';

            // Now create the inner overlay div for blur and dark overlay effect
            const blurOverlay = document.createElement('div');
            blurOverlay.id = 'blur-overlay';

            // Set styles for the blur and dark overlay
            blurOverlay.style.position = 'absolute';
            blurOverlay.style.top = '0';
            blurOverlay.style.left = '0';
            blurOverlay.style.width = '100%';
            blurOverlay.style.height = '100%';
            blurOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Dark transparent overlay
            blurOverlay.style.backdropFilter = 'blur(10px)'; // Add the blur effect
            blurOverlay.style.borderRadius = 'var(--border-radius-3)'; // Match border radius
            blurOverlay.style.zIndex = '1'; // Ensure it stays on top of the background image

            // Append the overlay to the ambient container
            ambientContainer.appendChild(blurOverlay);

            // Finally, append the ambient container to the nowPlayingBar
            nowPlayingBar.appendChild(ambientContainer);
        }

        return ambientContainer;
    }

    setupDynamicAmbient();
}

waitForSpicetify();
