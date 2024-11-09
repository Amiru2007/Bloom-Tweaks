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
    
        // Attempt color extraction
        try {
            const colors = await Spicetify.colorExtractor(currentTrack.uri);
            console.log("Extracted colors:", colors);
    
            // Select a visible, lighter color if available, otherwise convert a darker one to lighter
            let accentColor = colors?.LIGHT_VIBRANT || colors?.VIBRANT || colors?.LIGHT_MUTED || colors?.MUTED;
    
            if (!accentColor) {
                // Fallback to dark color if lighter ones aren't available
                accentColor = colors?.DARK_VIBRANT || "#1DB954";  // Default Spotify green
                accentColor = lightenColor(accentColor, 40);  // Make darker colors lighter
            }
    
            console.log("Using color for accent:", accentColor);
            applyAccentColor(accentColor);
        } catch (error) {
            console.error("Error extracting color with Spicetify color extractor:", error);
            applyAccentColor("#1DB954");  // Apply default if error occurs
        }
    
        // Apply cover art as ambient background
        const ambientContainer = createAmbientContainer();
        if (ambientContainer) {
            ambientContainer.style.backgroundImage = `url(${albumCoverUrl})`;
    
            // Trigger the zoom effect when the ambient image updates
            triggerZoomEffect(ambientContainer);
        }
    }

    // This accent color applying function is disable on purpose as i like the static accent color

    // function applyAccentColor(color) {
    //     const existingStyle = document.getElementById("dynamicAccentColor");
    //     if (existingStyle) {
    //         existingStyle.remove();
    //     }

    //     if (color) {
    //         // Create a new style block and inject the color as CSS if color is available
    //         const style = document.createElement("style");
    //         style.id = "dynamicAccentColor";
    //         style.textContent = `
    //                 :root {
    //                     --spice-accent: ${color} !important;
    //                     --spice-button: ${color} !important;
    //                     --spice-button-active: ${color} !important;
    //                 }

    //                 .Svg-img-icon-small-textBrightAccent {
    //                     fill: ${color} !important;
    //                 }
    //             `;
    //         document.head.appendChild(style);
    //         console.log("Accent color applied:", color);
    //     } else {
    //         console.warn("Fallback: No accent color applied.");
    //     }
    // }

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
            ambientContainer.style.top = '13px';
            ambientContainer.style.left = '10px';
            ambientContainer.style.width = '60px';
            ambientContainer.style.height = '60px';
            ambientContainer.style.zIndex = '-1';
            ambientContainer.style.borderRadius = 'var(--border-radius-3)';
            ambientContainer.style.backgroundSize = 'cover';
            ambientContainer.style.backgroundPosition = 'center center';
            ambientContainer.style.transform = 'scale(0)';
            ambientContainer.style.filter = 'blur(10px) saturate(1.2)';

            nowPlayingBar.appendChild(ambientContainer);
        }

        return ambientContainer;
    }

    setupDynamicAmbient();
}

waitForSpicetify();
