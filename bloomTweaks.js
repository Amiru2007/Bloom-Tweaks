// Wait for Spicetify to load
function waitForSpicetify() {
    if (!Spicetify.Player) {
        setTimeout(waitForSpicetify, 100);
        return;
    }

    // Inject CSS file from jsDelivr
    function loadCustomCSS() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
    
        // Use current timestamp to force CSS update
        const timestamp = new Date().getTime(); 
        link.href = `https://cdn.jsdelivr.net/gh/Amiru2007/Bloom-Tweaks@main/assets/css/bloomTweaks.css?v=${timestamp}`;
        document.head.append(link);
    }

    // JavaScript function to handle play/pause button classes and other modifications
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

    // Function to add class based on span text within the tag-list container
    function addArtistButtonClass() {
        const tagList = document.querySelector('.tag-list');
        if (!tagList) return;

        const buttons = tagList.querySelectorAll('button[role="checkbox"]');
        buttons.forEach(button => {
            const span = button.querySelector('span');
            if (span && (span.textContent.includes('Artist') || 
                         span.textContent.includes('Genre') || 
                         span.textContent.includes('Collection'))) {
                button.classList.add('artist-button');
            }
        });
    }

    // Load the custom CSS file
    loadCustomCSS();

    // Initial update of button states and artist button class
    updateButtonState();
    addArtistButtonClass();

    // Listen for changes in the DOM to update button states dynamically
    const observer = new MutationObserver(() => {
        updateButtonState();
        addArtistButtonClass();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Listen for button clicks to update button states
    document.body.addEventListener('click', event => {
        if (event.target.tagName === 'BUTTON' && event.target.getAttribute('aria-label')) {
            updateButtonState();
            addArtistButtonClass();
        }
    });
}

// Execute the function
waitForSpicetify();
