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

            ambientContainer.style.position = 'absolute';
            ambientContainer.style.top = '12px';
            ambientContainer.style.left = '9px';
            ambientContainer.style.width = '62px';
            ambientContainer.style.height = '62px';
            ambientContainer.style.zIndex = '-1';
            ambientContainer.style.borderRadius = '6px';
            ambientContainer.style.backgroundSize = 'cover';
            ambientContainer.style.backgroundPosition = 'center center';
            ambientContainer.style.filter = 'blur(10px) brightness(80%)';
            ambientContainer.style.transform = 'scale(0)';

            nowPlayingBar.appendChild(ambientContainer);
        }

        return ambientContainer;
    }

    setupDynamicAmbient();
}

waitForSpicetify();
