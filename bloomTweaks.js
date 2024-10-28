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
        fluentButtonsCSS: false, // New preference for fluent buttons CSS
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

    function addControlPanelButton() {
        const prefs = loadPreferences();

        const tryAddButton = setInterval(() => {
            const actionButtons = document.querySelector(".LedDBMWCxYhMD20KtPJo.main-actionButtons");

            if (actionButtons) {
                clearInterval(tryAddButton);

                const button = document.createElement("button");
                button.className = "Button-sc-1dqy6lx-0 Button-buttonTertiary-small-small-useBrowserDefaultFocusStyle-condensedAll encore-text-body-small-bold";
                button.setAttribute("aria-label", "Customizations");

                const icon = document.createElement("svg");
                icon.setAttribute("data-encore-id", "icon");
                icon.setAttribute("role", "img");
                icon.setAttribute("aria-hidden", "true");
                icon.setAttribute("viewBox", "0 0 16 16");
                icon.className = "Svg-sc-ytk21e-0 Svg-img-icon-small";
                icon.innerHTML = `<path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path>`;
                button.appendChild(icon);

                button.addEventListener("click", () => {
                    const content = document.createElement("div");
                    content.innerHTML = `
                        <h3>UI Customizations</h3>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Enable Custom CSS</label>
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
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Enable Button Styling</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="buttonStyling" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.buttonStyling ? "checked" : ""}>
                                    <span class="bloom-tweaks x-toggle-indicatorWrapper"><span class="bloom-tweaks x-toggle-indicator"></span></span>
                                </label>
                            </div>
                        </div>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Enable Tag Styling</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="tagStyling" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.tagStyling ? "checked" : ""}>
                                    <span class="bloom-tweaks x-toggle-indicatorWrapper"><span class="bloom-tweaks x-toggle-indicator"></span></span>
                                </label>
                            </div>
                        </div>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Enable Fluent Buttons CSS</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="fluentButtonsCSS" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.fluentButtonsCSS ? "checked" : ""}>
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
                            customCSS: document.getElementById("customCSS").checked,
                            buttonStyling: document.getElementById("buttonStyling").checked,
                            tagStyling: document.getElementById("tagStyling").checked,
                            fluentButtonsCSS: document.getElementById("fluentButtonsCSS").checked,
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
        loadCustomCSS();
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
}

waitForSpicetify();
