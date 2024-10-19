function waitForSpicetify() {
    if (!Spicetify.Player) {
        setTimeout(waitForSpicetify, 100);
        return;
    }

    async function loadCustomCSS() {
        const repoOwner = 'Amiru2007';
        const repoName = 'Bloom-Tweaks';

        try {
            const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits/main`);
            const data = await response.json();
            const latestCommitHash = data.sha;

            const randomTimestamp = new Date().getTime();
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `https://cdn.jsdelivr.net/gh/${repoOwner}/${repoName}@${latestCommitHash}/assets/css/bloomTweaksLegacy.css?ts=${randomTimestamp}`;
            
            link.onload = () => {
                console.log('Custom CSS loaded successfully');
                initExtension();
            };

            document.head.append(link);
        } catch (error) {
            console.error('Error fetching the latest commit hash:', error);
        }
    }

    function updateButtonState() {
        const buttons = document.querySelectorAll('button[aria-label]');
        buttons.forEach(button => {
            const currentLabel = button.getAttribute('aria-label');
            if (currentLabel && currentLabel.toLowerCase().includes('play')) {
                button.classList.remove('pause');
                button.classList.add('play');
            } else if (currentLabel && currentLabel.toLowerCase().includes('pause')) {
                button.classList.remove('play');
                button.classList.add('pause');
            }
        });
    }

    function addArtistButtonClass() {
        const tagList = document.querySelector('.tag-list');
        if (!tagList) return;
    
        const buttons = tagList.querySelectorAll('button[role="checkbox"]');
        buttons.forEach(button => {
            const span = button.querySelector('span');
            if (span) {
                let label = '';
    
                if (span.textContent.includes('Artist')) {
                    button.classList.add('special-tag-button');
                    label = 'artist-tag';
                } 
                else if (span.textContent.includes('Genre')) {
                    button.classList.add('special-tag-button');
                    label = 'genre-tag';
                } 
                else if (span.textContent.includes('Collection')) {
                    button.classList.add('special-tag-button');
                    label = 'collection-tag';
                }
                else if (span.textContent.includes('Spotify')) {
                    button.classList.add('special-tag-button-spotify');
                    label = 'spotify-tag';
                }
    
                if (label) {
                    button.setAttribute('aria-label', label);
                }
            }
        });
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
        const albumCoverUrl = currentTrack.album.images[0]?.url; // Get the album cover URL
    
        if (!albumCoverUrl) {
            console.warn('Album cover URL not found.');
            return;
        }
    
        const ambientContainer = createAmbientContainer();  // Reuse or create the container
        if (ambientContainer) {
            // Set the album cover as the background image with a blur filter
            ambientContainer.style.backgroundImage = `url(${albumCoverUrl})`;
            ambientContainer.style.backgroundSize = 'cover'; // Ensure the image covers the container
            ambientContainer.style.backgroundPosition = 'center'; // Center the cover art
            ambientContainer.style.filter = 'blur(10px)'; // Apply the blur effect
        }
    }
    
    function setupDynamicAmbient() {
        Spicetify.Player.addEventListener("songchange", () => {
            updateAmbientEffect();
        });
    
        updateAmbientEffect(); // Trigger the effect initially when extension loads
    }
    
    function createAmbientContainer() {
        // Check if the ambient container already exists
        let ambientContainer = document.getElementById('ambient-container');
        
        if (!ambientContainer) {
            const nowPlayingBar = document.querySelector('.main-nowPlayingBar-nowPlayingBar');
            if (!nowPlayingBar) {
                console.warn('Now Playing Bar container not found.');
                return null;
            }
    
            // Create a new ambient container if it doesn't exist
            ambientContainer = document.createElement('div');
            ambientContainer.id = 'ambient-container';
            ambientContainer.style.position = 'absolute';
            ambientContainer.style.top = '11px';
            ambientContainer.style.left = '8px';
            ambientContainer.style.width = '64px';
            ambientContainer.style.height = '64px';
            ambientContainer.style.zIndex = '-1'; // Keep behind the cover art
            ambientContainer.style.borderRadius = 'var(--border-radius-3)';
    
            // Insert the container under the cover art section in the Now Playing Bar
            nowPlayingBar.appendChild(ambientContainer);
        }
    
        return ambientContainer;
    }    
    
    function initExtension() {
        updateButtonState();
        addArtistButtonClass();

        const observer = new MutationObserver(() => {
            setTimeout(() => {
                updateButtonState();
                addArtistButtonClass();
            }, 100);
        });

        observer.observe(document.body, { childList: true, subtree: true });

        document.body.addEventListener('click', event => {
            if (event.target.tagName === 'BUTTON' && event.target.getAttribute('aria-label')) {
                updateButtonState();
                addArtistButtonClass();
            }
        });
    }

    loadCustomCSS();
    setupDynamicAmbient();
}

waitForSpicetify();
