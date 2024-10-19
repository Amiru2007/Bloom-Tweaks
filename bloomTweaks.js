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
    
        const ambientContainer = createAmbientContainer();
        if (ambientContainer) {
            ambientContainer.style.backgroundImage = `url(${albumCoverUrl})`;
    
            // Trigger zoom effect when song changes
            triggerZoomEffect(ambientContainer);
        }
    }
    
    function triggerZoomEffect(element) {
        // Reset the element's scale to 0
        element.style.transform = 'scale(0)';
        element.style.transition = 'transform 2s ease 0.2s'; // 2s transition time with 0.5s delay
    
        // Remove and re-add the element to the DOM to trigger the transition
        const parent = element.parentNode;
        parent.removeChild(element);
        parent.appendChild(element); // Re-add the element
    
        // Wait a bit before applying the zoom-in effect
        setTimeout(() => {
            element.style.transform = 'scale(1)'; // Zoom to original size
        }, 500); // Delay to wait for the transition to start
    }
    
    function setupDynamicAmbient() {
        Spicetify.Player.addEventListener("songchange", () => {
            updateAmbientEffect();
        });
    
        updateAmbientEffect();  // Call when the script first loads
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
    
            // Apply the desired styles
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
            ambientContainer.style.transform = 'scale(0)'; // Start with scale 0
    
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
