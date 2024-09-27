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
            const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits/main`);
            const data = await response.json();
            const latestCommitHash = data.sha;

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `https://cdn.jsdelivr.net/gh/${repoOwner}/${repoName}@${latestCommitHash}/assets/css/bloomTweaksLegacy.css`;
            document.head.append(link);
        } catch (error) {
            console.error('Error fetching the latest commit hash:', error);
        }
    }

    // Function to check the percentage of explicit tracks and dynamically update the display
    function updateExplicitTrackPercentage() {
        const listItems = document.querySelectorAll('ul[role="treegrid"] li[role="row"]');
        const totalItems = listItems.length;
        let explicitCount = 0;

        listItems.forEach(item => {
            const explicitSpan = item.querySelector('span.main-tag-container');
            if (explicitSpan && explicitSpan.textContent.trim() === 'E') {
                explicitCount++;
            }
        });

        const explicitPercentage = totalItems > 0 ? Math.round((explicitCount / totalItems) * 100) : 0;

        const parentElement = document.querySelector('.LFdMliaHVgrpBcqNKHU3');
        if (parentElement) {
            // Recreate the percentage element every time the panel is opened
            let percentageElement = document.querySelector('.explicit-percentage');
            if (percentageElement) {
                percentageElement.remove(); // Remove the old element before recreating it
            }

            percentageElement = document.createElement('div');
            percentageElement.classList.add('explicit-percentage');
            parentElement.appendChild(percentageElement);

            percentageElement.innerHTML = `<p class="explicit-text"><span class="title">Explicit</span><span class="percentage-value">${explicitPercentage}%</span></p>`;
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
        if (!navContainer) return; // Exit if the nav container is not found

        const rect = activeItem.getBoundingClientRect();
        const navContainerRect = navContainer.getBoundingClientRect();

        const activeIndicator = document.querySelector('.active-indicator');
        if (activeIndicator) {
            activeIndicator.style.height = `${rect.height}px`;

            const offsetY = activeItem.offsetTop - navContainerRect.top;
            const parentElement = document.getElementById('spicetify-sticky-list');
            const specificChildrenCount = parentElement.querySelectorAll('li').length - 1;

            // Define correction factors
            const baseCorrection = -171;
            const increaseConst = -55;
            let correction = baseCorrection + (increaseConst * Math.max(0, specificChildrenCount - 4));

            activeIndicator.style.transform = `translateY(${offsetY + correction}px)`;
            activeIndicator.style.display = 'block'; // Ensure the indicator is visible
        }
    }

    // Initialize the active indicator
    function initializeActiveIndicator() {
        const navContainer = document.getElementById('spicetify-sticky-list');
        if (!navContainer) {
            setTimeout(initializeActiveIndicator, 100); // Retry initialization if navContainer is not found
            return;
        }

        let activeIndicator = document.querySelector('.active-indicator');

        if (!activeIndicator) {
            activeIndicator = document.createElement('div');
            activeIndicator.classList.add('active-indicator');
            navContainer.appendChild(activeIndicator);
        }

        // Move the active indicator to the currently active item
        const activeItem = document.querySelector('.main-yourLibraryX-navLinkActive.active');
        if (activeItem) {
            moveActiveIndicator(activeItem);
        } else {
            activeIndicator.style.display = 'none'; // Hide if no active item
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
                    moveActiveIndicator(this);
                } else {
                    const activeIndicator = document.querySelector('.active-indicator');
                    if (activeIndicator) {
                        activeIndicator.style.display = 'none'; // Hide if no active link
                    }
                }
            });
        });
    }

    // Debounce function to limit the number of function calls
    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Function to update the UI
    function updateUI() {
        updateButtonState();
        addArtistButtonClass();
        initializeActiveIndicator();
        updateExplicitTrackPercentage(); // Recalculate percentage when the UI updates
    }

    // Debounced version of the updateUI function
    const debouncedUpdateUI = debounce(updateUI, 200);

    // Function to observe when the queue panel becomes visible
    function observeQueueVisibility() {
        const queueContainer = document.getElementById('Desktop_PanelContainer_Id'); // Updated selector for the queue panel
        if (!queueContainer) {
            console.warn('Queue container not found. Retrying...');
            setTimeout(observeQueueVisibility, 100); // Retry if container not found
            return;
        }

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'style') {
                    const queueElement = document.querySelector('ul[role="treegrid"]');
                    if (queueElement && window.getComputedStyle(queueContainer).display !== 'none') {
                        // Queue is visible, trigger explicit percentage update
                        updateExplicitTrackPercentage();
                    }
                }
            });
        });

        observer.observe(queueContainer, { attributes: true });
    }

    // Recalculate and show explicit percentage when queue content changes
    function observeQueueContent() {
        const queueElement = document.querySelector('ul[role="treegrid"]');
        if (queueElement) {
            const observer = new MutationObserver(updateExplicitTrackPercentage);
            observer.observe(queueElement, { childList: true, subtree: true });
            // Initial explicit percentage calculation
            updateExplicitTrackPercentage();
        } else {
            setTimeout(observeQueueContent, 100); // Retry if queue element is not yet loaded
        }
    }

    // Wait for DOM to be fully loaded before starting the scripts
    document.addEventListener('DOMContentLoaded', () => {
        // Initial setup
        updateUI();
        handleNavClick();
        observeQueueVisibility();  // Watch for queue opening/closing
        observeQueueContent();     // Watch for changes in the queue content
    });

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
