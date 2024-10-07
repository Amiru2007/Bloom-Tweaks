function waitForSpicetify() {
    if (!Spicetify.Player) {
        setTimeout(waitForSpicetify, 100);
        return;
    }

    // Load Custom CSS with a cache-busting timestamp
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
            link.href = `https://cdn.jsdelivr.net/gh/${repoOwner}/${repoName}@${latestCommitHash}/assets/css/bloomTweaks.css?ts=${randomTimestamp}`;
            
            // Only append CSS after ensuring it has loaded successfully
            link.onload = () => {
                console.log('Custom CSS loaded successfully');
                initExtension();  // Initialize the extension only after CSS is loaded
            };

            document.head.append(link);
        } catch (error) {
            console.error('Error fetching the latest commit hash:', error);
        }
    }

    // Function to update the button state for play/pause icons
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

    // Function to add custom class to artist buttons
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
    
                // Set the aria-label attribute dynamically
                if (label) {
                    button.setAttribute('aria-label', label);
                }
            }
        });
    }

    // Function to move the external button to the desired parent and apply classes
    // function moveExternalExtensionButtons() {
    //     const button = document.querySelector('button[aria-label="playlist-stats"]');
    //     const newParent = document.querySelector('.main-actionButtons');

    //     if (button && newParent) {
    //         // Prevent re-adding the button if it's already moved
    //         if (!newParent.contains(button)) {
    //             // Move the button to the new parent
    //             newParent.appendChild(button);

    //             // Add new classes to the button to match the other children in the new parent
    //             button.classList.add(
    //                 'Button-sc-1dqy6lx-0',
    //                 'Button-small-small-buttonTertiary-condensedAll-useBrowserDefaultFocusStyle',
    //                 'encore-text-body-small-bold',
    //                 'main-topBar-buddyFeed'
    //             );
                
    //             console.log('Button successfully moved and classes added.');
    //         }
    //     } else {
    //         console.error('Button or new parent not found.');
    //     }
    // }

    // Initialize extension functionality (wait for DOM to be loaded)
    function initExtension() {
        // Run once on load
        updateButtonState();
        addArtistButtonClass();
        // moveExternalExtensionButtons();

        // MutationObserver to watch for dynamic changes
        const observer = new MutationObserver(() => {
            // Debounce DOM manipulations
            setTimeout(() => {
                updateButtonState();
                addArtistButtonClass();
                // moveExternalExtensionButtons();
            }, 100);  // Delay by 100ms to avoid rapid reflows
        });

        // Observe the entire document's body for changes
        observer.observe(document.body, { childList: true, subtree: true });

        // Add event listener to track button clicks and update UI accordingly
        document.body.addEventListener('click', event => {
            if (event.target.tagName === 'BUTTON' && event.target.getAttribute('aria-label')) {
                updateButtonState();
                addArtistButtonClass();
            }
        });
    }

    // Load the CSS first, then initialize the extension
    loadCustomCSS();
}

// Execute the function to wait for Spicetify and initialize the extension
waitForSpicetify();
