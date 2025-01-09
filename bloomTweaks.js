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
        noiseBlurBg: true,
        friendsActivityBar: false,
        floatingVolumeBar: false,
        customAppEnhancify: false,
        beautifulLyricsLegacyCinema: false,
        playlistTags: false,
        spicetifyStats: false,
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

        // Load friendsActivityBar.css (Updated name from 'friendsActivityBar.css')
        const friendsActivityBarLink = document.querySelector("link[href*='friendsActivityBar.css']"); // Corrected here
        if (prefs.friendsActivityBar && !friendsActivityBarLink) {
            await loadCSSFile("friendsActivityBar.css");
        } else if (!prefs.friendsActivityBar && friendsActivityBarLink) {
            friendsActivityBarLink.remove();
        }

        // Load floatingVolumeBar.css (Updated name from 'floatingVolumeBar.css')
        const floatingVolumeBarLink = document.querySelector("link[href*='floatingVolumeBar.css']"); // Corrected here
        if (prefs.floatingVolumeBar && !floatingVolumeBarLink) {
            await loadCSSFile("floatingVolumeBar.css");
        } else if (!prefs.floatingVolumeBar && floatingVolumeBarLink) {
            floatingVolumeBarLink.remove();
        }

        // Load customAppEnhancify.css (Updated name from 'customAppEnhancify.css')
        const customAppEnhancifyLink = document.querySelector("link[href*='customAppEnhancify.css']"); // Corrected here
        if (prefs.customAppEnhancify && !customAppEnhancifyLink) {
            await loadCSSFile("customAppEnhancify.css");
        } else if (!prefs.customAppEnhancify && customAppEnhancifyLink) {
            customAppEnhancifyLink.remove();
        }

        // Load beautifulLyricsLegacyCinema.css (Updated name from 'beautifulLyricsLegacyCinema.css')
        const beautifulLyricsLegacyCinemaLink = document.querySelector("link[href*='beautifulLyricsLegacyCinema.css']"); // Corrected here
        if (prefs.beautifulLyricsLegacyCinema && !beautifulLyricsLegacyCinemaLink) {
            await loadCSSFile("beautifulLyricsLegacyCinema.css");
        } else if (!prefs.beautifulLyricsLegacyCinema && beautifulLyricsLegacyCinemaLink) {
            beautifulLyricsLegacyCinemaLink.remove();
        }

        // Load playlistTags.css (Updated name from 'playlistTags.css')
        const playlistTagsLink = document.querySelector("link[href*='playlistTags.css']"); // Corrected here
        if (prefs.playlistTags && !playlistTagsLink) {
            await loadCSSFile("playlistTags.css");
        } else if (!prefs.playlistTags && playlistTagsLink) {
            playlistTagsLink.remove();
        }

        // Load spicetifyStats.css (Updated name from 'spicetifyStats.css')
        const spicetifyStatsLink = document.querySelector("link[href*='spicetifyStats.css']"); // Corrected here
        if (prefs.spicetifyStats && !spicetifyStatsLink) {
            await loadCSSFile("spicetifyStats.css");
        } else if (!prefs.spicetifyStats && spicetifyStatsLink) {
            spicetifyStatsLink.remove();
        }

        // Load noiseBlurBg.css (Updated name from 'noiseBlurBg.css')
        const noiseBlurBgLink = document.querySelector("link[href*='noiseBlurBg.css']"); // Corrected here
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

        const VisualizerContainer = createVisualizerContainer();
        if (VisualizerContainer) {
            VisualizerContainer.style.backgroundImage = `url(${albumCoverUrl})`;
        }
    }

    function setupDynamicAmbient() {
        Spicetify.Player.addEventListener("songchange", () => {
            updateAmbientEffect();
        });

        updateAmbientEffect();
    }

    function createVisualizerContainer() {
        let VisualizerContainer = document.querySelector('.visualizer-container');
        
        return VisualizerContainer;
    }

    setupDynamicAmbient();

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
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Custom Friends Activity Panel</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="friendsActivityBar" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.friendsActivityBar ? "checked" : ""}>
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
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Floating Volume Bar</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="floatingVolumeBar" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.floatingVolumeBar ? "checked" : ""}>
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
                        <h3 style="padding-top: 16px;">Extension Customizations</h3>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Beautiful Lyrics old cinema lyrics page</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="beautifulLyricsLegacyCinema" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.beautifulLyricsLegacyCinema ? "checked" : ""}>
                                    <span class="bloom-tweaks x-toggle-indicatorWrapper"><span class="bloom-tweaks x-toggle-indicator"></span></span>
                                </label>
                            </div>
                        </div>
                        <h3 style="padding-top: 16px;">Custom App Customizations</h3>
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
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Playlist Tags Bloom Update</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="playlistTags" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.playlistTags ? "checked" : ""}>
                                    <span class="bloom-tweaks x-toggle-indicatorWrapper"><span class="bloom-tweaks x-toggle-indicator"></span></span>
                                </label>
                            </div>
                        </div>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Spicetify Stats Bloom Update</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="spicetifyStats" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.spicetifyStats ? "checked" : ""}>
                                    <span class="bloom-tweaks x-toggle-indicatorWrapper"><span class="bloom-tweaks x-toggle-indicator"></span></span>
                                </label>
                            </div>
                        </div>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Enhancify Custom App Page</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="customAppEnhancify" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.customAppEnhancify ? "checked" : ""}>
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
                            friendsActivityBar: document.getElementById("friendsActivityBar")?.checked || false,
                            floatingVolumeBar: document.getElementById("floatingVolumeBar")?.checked || false,
                            customAppEnhancify: document.getElementById("customAppEnhancify")?.checked || false,
                            beautifulLyricsLegacyCinema: document.getElementById("beautifulLyricsLegacyCinema")?.checked || false,
                            playlistTags: document.getElementById("playlistTags")?.checked || false,
                            spicetifyStats: document.getElementById("spicetifyStats")?.checked || false,
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
