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
        windowsColorThemeCSS: false,
        customNPV: true,
        lightTheme: false,
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
    
        // Load windowsColorTheme.css (Updated name from 'windowsColorTheme.css')
        const existingwindowsColorThemeLink = document.querySelector("link[href*='windowsColorTheme.css']"); // Corrected here
        if (prefs.windowsColorThemeCSS && !existingwindowsColorThemeLink) {
            await loadCSSFile("windowsColorTheme.css");
        } else if (!prefs.windowsColorThemeCSS && existingwindowsColorThemeLink) {
            existingwindowsColorThemeLink.remove();
        }
    
        // Load customNPV.css (Updated name from 'customNPV.css')
        const customNPVLink = document.querySelector("link[href*='customNPV.css']"); // Corrected here
        if (prefs.customNPV && !customNPVLink) {
            await loadCSSFile("customNPV.css");
        } else if (!prefs.customNPV && customNPVLink) {
            customNPVLink.remove();
        }
    
        // Load lightTheme.css (Updated name from 'lightTheme.css')
        const lightThemeLink = document.querySelector("link[href*='lightTheme.css']"); // Corrected here
        if (prefs.lightTheme && !lightThemeLink) {
            await loadCSSFile("lightTheme.css");
        } else if (!prefs.lightTheme && lightThemeLink) {
            lightThemeLink.remove();
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
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Windows Accent Color</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="windowsColorThemeCSS" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.windowsColorThemeCSS ? "checked" : ""}>
                                    <span class="bloom-tweaks x-toggle-indicatorWrapper"><span class="bloom-tweaks x-toggle-indicator"></span></span>
                                </label>
                            </div>
                        </div>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Custom NPV</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="customNPV" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.customNPV ? "checked" : ""}>
                                    <span class="bloom-tweaks x-toggle-indicatorWrapper"><span class="bloom-tweaks x-toggle-indicator"></span></span>
                                </label>
                            </div>
                        </div>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Light Theme</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="lightTheme" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.lightTheme ? "checked" : ""}>
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
                        <h3 style="padding-top: 16px;">Custom Apps Customizations</h3>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Tag Styling (Playlist Tags Custom App)</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="tagStyling" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.tagStyling ? "checked" : ""}>
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
                            buttonStyling: document.getElementById("buttonStyling")?.checked || false,
                            tagStyling: document.getElementById("tagStyling")?.checked || false,
                            fluentButtonsCSS: document.getElementById("fluentButtonsCSS")?.checked || false,
                            windowsColorThemeCSS: document.getElementById("windowsColorThemeCSS")?.checked || false,
                            customNPV: document.getElementById("customNPV")?.checked || false,
                            lightTheme: document.getElementById("lightTheme")?.checked || false,
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
