// Wait for Spicetify to load
function waitForSpicetify() {
    if (!Spicetify.Player) {
        setTimeout(waitForSpicetify, 100);
        return;
    }

    // Inject CSS file from jsDelivr
    async function loadCustomCSS() {
        const repoOwner = 'Amiru2007';
        const repoName = 'Bloom-Tweaks';
    
        try {
            // Fetch the latest commit hash from the GitHub API
            const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits/main`);
            const data = await response.json();
            const latestCommitHash = data.sha;
    
            // Load the CSS file using the latest commit hash
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `https://cdn.jsdelivr.net/gh/${repoOwner}/${repoName}@${latestCommitHash}/assets/css/bloomTweaksLegacy.css`;
            document.head.append(link);
        } catch (error) {
            console.error('Error fetching the latest commit hash:', error);
        }
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

    // Function to move the active indicator to the active nav link
    function moveActiveIndicator(activeItem) {
        const navContainer = document.getElementById('spicetify-sticky-list');
        if (!navContainer) return;  // Check if navContainer exists

        const rect = activeItem.getBoundingClientRect();
        const navContainerRect = navContainer.getBoundingClientRect();
        
        // Set the height and position of the active indicator
        const activeIndicator = document.querySelector('.active-indicator');
        if (activeIndicator) {
            activeIndicator.style.height = `${rect.height}px`;

            // Move the active indicator based on the active item's position
            const offsetY = activeItem.offsetTop - navContainerRect.top;

            const parentElement = document.getElementById('spicetify-sticky-list');
            const specificChildrenCount = parentElement.querySelectorAll('li').length - 1;

            // Define correction factors
            const baseCorrection = -171;
            const increaseConst = -55;

            // Calculate correction based on number of <li> elements
            let correction = baseCorrection + (increaseConst * Math.max(0, specificChildrenCount - 4));

            // Apply corrected Y position
            activeIndicator.style.transform = `translateY(${offsetY + correction}px)`;

            // Ensure the indicator is visible
            activeIndicator.style.display = 'block';
        }
    }

    // Initialize the active indicator
    function initializeActiveIndicator() {
        const navContainer = document.getElementById('spicetify-sticky-list');
        if (!navContainer) {
            console.warn('Nav container not found. Retrying...');
            setTimeout(initializeActiveIndicator, 100); // Retry initialization
            return;
        }

        const activeItem = document.querySelector('.main-yourLibraryX-navLinkActive.active');

        // Create and append the active indicator element if not already created
        let activeIndicator = document.querySelector('.active-indicator');
        if (!activeIndicator) {
            activeIndicator = document.createElement('div');
            activeIndicator.classList.add('active-indicator');
            navContainer.appendChild(activeIndicator);
        }

        // Move the active indicator to the currently active item
        if (activeItem) {
            moveActiveIndicator(activeItem);
        } else {
            activeIndicator.style.display = 'none';  // Hide the indicator if no item is active
        }
    }

    // Handle click events to update the active state and move the indicator
    function handleNavClick() {
        const navItems = document.querySelectorAll('.main-yourLibraryX-navItem');

        navItems.forEach(item => {
            item.addEventListener('click', function () {
                // Remove the active class from all nav links
                navItems.forEach(i => {
                    const link = i.querySelector('.main-yourLibraryX-navLinkActive');
                    if (link) link.classList.remove('active');
                });
                
                // Add the active class to the clicked link
                const link = this.querySelector('.main-yourLibraryX-navLinkActive');
                if (link) {
                    link.classList.add('active');
                    
                    // Move the active indicator
                    moveActiveIndicator(this);
                } else {
                    // Hide the indicator if no active link is found
                    const activeIndicator = document.querySelector('.active-indicator');
                    if (activeIndicator) {
                        activeIndicator.style.display = 'none';
                    }
                }
            });
        });
    }

    // Initial update of button states, artist button class, and active indicator
    updateButtonState();
    addArtistButtonClass();
    initializeActiveIndicator();
    handleNavClick();

    // Listen for changes in the DOM to update button states dynamically
    const observer = new MutationObserver(() => {
        updateButtonState();
        addArtistButtonClass();
        initializeActiveIndicator();  // Ensure the active indicator updates on page load
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
