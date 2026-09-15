function waitForSpicetify() {
    if (!Spicetify.Player || !Spicetify.PopupModal) {
        setTimeout(waitForSpicetify, 100);
        return;
    }

    const PREF_KEY = "spicetifyCustomizations";
    const defaultPrefs = {
        customCSS: true,
        buttonStyling: true,
        tagStyling: true,
        fluentButtonsCSS: true,
        noiseBlurBg: true,
    };

    function loadPreferences() {
        const savedPrefs = localStorage.getItem(PREF_KEY);
        return savedPrefs ? JSON.parse(savedPrefs) : defaultPrefs;
    }

    function savePreferences(prefs) {
        localStorage.setItem(PREF_KEY, JSON.stringify(prefs));
    }

    async function loadCustomCSS() {
        const prefs = loadPreferences();

        // Load bloomTweaksLegacy.css
        const existingLegacyLink = document.querySelector("link[href*='bloomTweaksLegacy.css']");
        if (prefs.customCSS && !existingLegacyLink) {
            await loadCSSFile("bloomTweaksLegacy.css");
        } else if (!prefs.customCSS && existingLegacyLink) {
            existingLegacyLink.remove();
        }

        // Load fluentButtons.css
        const existingFluentLink = document.querySelector("link[href*='fluentButtons.css']");
        if (prefs.fluentButtonsCSS && !existingFluentLink) {
            await loadCSSFile("fluentButtons.css");
        } else if (!prefs.fluentButtonsCSS && existingFluentLink) {
            existingFluentLink.remove();
        }

        // Load noiseBlurBg.css
        const noiseBlurBgLink = document.querySelector("link[href*='noiseBlurBg.css']");
        if (prefs.noiseBlurBg && !noiseBlurBgLink) {
            await loadCSSFile("noiseBlurBg.css");
        } else if (!prefs.noiseBlurBg && noiseBlurBgLink) {
            noiseBlurBgLink.remove();
        }
    }

    async function loadCSSFile(fileName) {
        const repoOwner = "Amiru2007";
        const repoName = "Bloom-Tweaks";

        try {
            const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits/main`);
            const data = await response.json();
            const latestCommitHash = data.sha;

            const randomTimestamp = new Date().getTime();
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = `https://cdn.jsdelivr.net/gh/${repoOwner}/${repoName}@${latestCommitHash}/assets/css/${fileName}?ts=${randomTimestamp}`;

            link.onload = () => console.log(`${fileName} loaded successfully`);
            document.head.append(link);
        } catch (error) {
            console.error(`Error loading ${fileName}:`, error);
        }
    }

    function updateButtonState() {
        const prefs = loadPreferences();
        const buttons = document.querySelectorAll("button[aria-label]");

        buttons.forEach((button) => {
            const currentLabel = button.getAttribute("aria-label");
            if (currentLabel && prefs.buttonStyling) {
                if (currentLabel.toLowerCase().includes("play")) {
                    button.classList.remove("pause");
                    button.classList.add("play");
                } else if (currentLabel.toLowerCase().includes("pause")) {
                    button.classList.remove("play");
                    button.classList.add("pause");
                }
            } else {
                button.classList.remove("play", "pause");
            }
        });
    }

    function addArtistButtonClass() {
        const prefs = loadPreferences();
        const tagList = document.querySelector(".tag-list");

        if (!prefs.tagStyling || !tagList) return;

        const buttons = tagList.querySelectorAll('button[role="checkbox"]');
        buttons.forEach((button) => {
            const span = button.querySelector("span");
            if (span) {
                let label = "";

                if (span.textContent.includes("Artist")) {
                    button.classList.add("special-tag-button");
                    label = "artist-tag";
                } else if (span.textContent.includes("Genre")) {
                    button.classList.add("special-tag-button");
                    label = "genre-tag";
                } else if (span.textContent.includes("Collection")) {
                    button.classList.add("special-tag-button");
                    label = "collection-tag";
                } else if (span.textContent.includes("Spotify")) {
                    button.classList.add("special-tag-button-spotify");
                    label = "spotify-tag";
                }

                if (label) {
                    button.setAttribute("aria-label", label);
                }
            }
        });
    }

    function setupStickyHeaderScrollEffect() {
        console.log("BloomTweaks: Initializing resilient scroll tracker.");

        window.addEventListener('scroll', (e) => {
            const viewport = e.target.closest ? e.target.closest('[data-overlayscrollbars-viewport]') : null;
            
            if (viewport) {
                const header = document.querySelector('.main-topBar-topbarContent');
                if (header) {
                    const scrollTop = viewport.scrollTop;
                    if (scrollTop > 50) {
                        header.classList.add('bloom-header-scrolled');
                    } else {
                        header.classList.remove('bloom-header-scrolled');
                    }
                }
            }
        }, true);
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

        const Root__main = createRoot__main();

        if (Root__main && Root__main.querySelector('.visualizer-container')) {
            Root__main.style.backgroundImage = `url(${albumCoverUrl})`;

            console.log('Hello');
        }
    }

    function setupDynamicAmbient() {
        Spicetify.Player.addEventListener("songchange", () => {
            updateAmbientEffect();
        });

        updateAmbientEffect();
    }

    function createRoot__main() {
        let Root__main = document.querySelector('.Root__main-view');

        return Root__main;
    }

    setupDynamicAmbient();

    function createInvertedSpiceAccent() {
        const root = document.documentElement;

        const accent = getComputedStyle(root)
            .getPropertyValue("--spice-accent")
            .trim();

        if (!accent) return;

        const temp = document.createElement("div");
        temp.style.color = accent;
        document.body.appendChild(temp);

        const rgb = getComputedStyle(temp).color;
        document.body.removeChild(temp);

        const [r, g, b] = rgb.match(/\d+/g).map(Number);
        const inverted = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;

        root.style.setProperty("--spice-accent-inverted", inverted);
    }

    function addControlPanelButton() {
        const prefs = loadPreferences();

        const tryAddButton = setInterval(() => {
            const actionButtons = document.querySelector(".main-actionButtons");

            if (actionButtons) {
                clearInterval(tryAddButton);

                const button = document.createElement("button");
                button.className = "bloom-tweaks Button-sc-1dqy6lx-0 Button-buttonTertiary-small-small-useBrowserDefaultFocusStyle-condensedAll encore-text-body-small-bold";
                button.setAttribute("aria-label", "Customizations");

                const icon = document.createElement("svg");
                icon.setAttribute("data-encore-id", "icon");
                icon.setAttribute("role", "img");
                icon.setAttribute("aria-hidden", "true");
                icon.setAttribute("viewBox", "0 0 16 16");
                icon.className = "Svg-sc-ytk21e-0 Svg-img-icon-small";
                icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
                button.appendChild(icon);

                button.addEventListener("click", () => {
                    const content = document.createElement("div");
                    content.innerHTML = `
                        <h3>UI Customizations</h3>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Custom CSS</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="customCSS" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.customCSS ? "checked" : ""}>
                                    <span class="bloom-tweaks x-toggle-indicatorWrapper"><span class="bloom-tweaks x-toggle-indicator"></span></span>
                                </label>
                            </div>
                        </div>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Fluent Buttons CSS</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="fluentButtonsCSS" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.fluentButtonsCSS ? "checked" : ""}>
                                    <span class="bloom-tweaks x-toggle-indicatorWrapper"><span class="bloom-tweaks x-toggle-indicator"></span></span>
                                </label>
                            </div>
                        </div>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Noise Blur Background</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="noiseBlurBg" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.noiseBlurBg ? "checked" : ""}>
                                    <span class="bloom-tweaks x-toggle-indicatorWrapper"><span class="bloom-tweaks x-toggle-indicator"></span></span>
                                </label>
                            </div>
                        </div>
                        <div class="bloom-tweaks save-btn-container">
                            <button id="saveSettingsButton" class="bloom-tweaks-popup-btn save-button">
                                Save
                            </button>
                        </div>
                    `;

                    Spicetify.PopupModal.display({
                        title: "Customizations",
                        content,
                        isLarge: true,
                        onConfirm: saveSettings,
                    });

                    document.getElementById("saveSettingsButton").addEventListener("click", saveSettings);

                    function saveSettings() {
                        const newPrefs = {
                            customCSS: document.getElementById("customCSS")?.checked || false,
                            buttonStyling: prefs.buttonStyling, // Preserved internally if utilized elsewhere
                            tagStyling: prefs.tagStyling,       // Preserved internally if utilized elsewhere
                            fluentButtonsCSS: document.getElementById("fluentButtonsCSS")?.checked || false,
                            noiseBlurBg: document.getElementById("noiseBlurBg")?.checked || false,
                        };

                        savePreferences(newPrefs);
                        location.reload();
                    }
                });

                actionButtons.appendChild(button);
            }
        }, 100);
    }

    function initExtension() {
        loadCustomCSS().then(() => {
            createInvertedSpiceAccent();
        });

        updateButtonState();
        addArtistButtonClass();
    }

    function initObserver() {
        const observer = new MutationObserver(() => {
            setTimeout(() => {
                updateButtonState();
                addArtistButtonClass();
            }, 100);
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    addControlPanelButton();
    initExtension();
    initObserver();
    setupStickyHeaderScrollEffect();
}

waitForSpicetify();