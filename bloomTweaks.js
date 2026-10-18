function waitForSpicetify() {
    if (!Spicetify.Player || !Spicetify.PopupModal) {
        setTimeout(waitForSpicetify, 100);
        return;
    }

    const PREF_KEY = "spicetifyCustomizations";
    const defaultPrefs = {
        customCSS: true,
        buttonStyling: true,
        fluentButtonsCSS: true,
        customNPV: true,
        noiseBlurBg: true,
        spicyLyricsFullscreenButton: true,
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

        const existingLegacyLink = document.querySelector(
            "link[href*='bloomTweaksLegacy.css']",
        );
        if (prefs.customCSS && !existingLegacyLink) {
            await loadCSSFile("bloomTweaksLegacy.css");
        } else if (!prefs.customCSS && existingLegacyLink) {
            existingLegacyLink.remove();
        }

        const existingFluentLink = document.querySelector(
            "link[href*='fluentButtons.css']",
        );
        if (prefs.fluentButtonsCSS && !existingFluentLink) {
            await loadCSSFile("fluentButtons.css");
        } else if (!prefs.fluentButtonsCSS && existingFluentLink) {
            existingFluentLink.remove();
        }

        const customNPVLink = document.querySelector(
            "link[href*='customNPV.css']",
        );
        if (prefs.customNPV && !customNPVLink) {
            await loadCSSFile("customNPV.css");
        } else if (!prefs.customNPV && customNPVLink) {
            customNPVLink.remove();
        }

        const noiseBlurBgLink = document.querySelector(
            "link[href*='noiseBlurBg.css']",
        );
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
            const response = await fetch(
                `https://api.github.com/repos/${repoOwner}/${repoName}/commits/main`,
            );
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

    function setupStickyHeaderScrollEffect() {
        console.log("BloomTweaks: Initializing resilient scroll tracker.");

        window.addEventListener(
            "scroll",
            (e) => {
                const viewport = e.target.closest
                    ? e.target.closest("[data-overlayscrollbars-viewport]")
                    : null;

                if (viewport) {
                    const header = document.querySelector(
                        ".main-topBar-topbarContent",
                    );
                    if (header) {
                        const scrollTop = viewport.scrollTop;
                        if (scrollTop > 50) {
                            header.classList.add("bloom-header-scrolled");
                        } else {
                            header.classList.remove("bloom-header-scrolled");
                        }
                    }
                }
            },
            true,
        );
    }

    async function updateAmbientEffect(retries = 10, delay = 100) {
        if (
            !Spicetify.Player ||
            !Spicetify.Player.data ||
            !Spicetify.Player.data.item
        ) {
            console.warn(
                "Spicetify Player or track data is not available. Retrying...",
            );
            if (retries > 0) {
                setTimeout(() => {
                    updateAmbientEffect(retries - 1, delay);
                }, delay);
                return;
            } else {
                console.error(
                    "Max retries reached. Exiting updateAmbientEffect.",
                );
                return;
            }
        }

        const currentTrack = Spicetify.Player.data.item;
        const albumCoverUrl = currentTrack.album.images[0]?.url;

        if (!albumCoverUrl) {
            console.warn("Album cover URL not found.");
            return;
        }

        const Root__main = createRoot__main();

        if (Root__main && Root__main.querySelector(".visualizer-container")) {
            Root__main.style.backgroundImage = `url(${albumCoverUrl})`;
        }
    }

    function setupDynamicAmbient() {
        Spicetify.Player.addEventListener("songchange", () => {
            updateAmbientEffect();
        });

        updateAmbientEffect();
    }

    function createRoot__main() {
        let Root__main = document.querySelector(".Root__main-view");
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

    // --- Custom SVGs for Fullscreen States ---
    const enterFullscreenSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6C5 5.44772 5.44772 5 6 5H8C8.55228 5 9 4.55228 9 4C9 3.44772 8.55228 3 8 3H6C4.34315 3 3 4.34315 3 6V8C3 8.55228 3.44772 9 4 9C4.55228 9 5 8.55228 5 8V6ZM5 18C5 18.5523 5.44772 19 6 19H8C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21H6C4.34315 21 3 19.6569 3 18V16C3 15.4477 3.44772 15 4 15C4.55228 15 5 15.4477 5 16V18ZM18 5C18.5523 5 19 5.44772 19 6V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V6C21 4.34315 19.6569 3 18 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H18ZM19 18C19 18.5523 18.5523 19 18 19H16C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21H18C19.6569 21 21 19.6569 21 18V16C21 15.4477 20.5523 15 20 15C19.4477 15 19 15.4477 19 16V18Z" fill="#ffffff"/></svg>`;
    
    const exitFullscreenSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4V6.5C7 6.77614 6.77614 7 6.5 7H4C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H6.5C7.88071 9 9 7.88071 9 6.5V4ZM9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20V17.5C7 17.2239 6.77614 17 6.5 17H4C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15H6.5C7.88071 15 9 16.1193 9 17.5V20ZM16 3C15.4477 3 15 3.44772 15 4V6.5C15 7.88071 16.1193 9 17.5 9H20C20.5523 9 21 8.55228 21 8C21 7.44772 20.5523 7 20 7H17.5C17.2239 7 17 6.77614 17 6.5V4C17 3.44772 16.5523 3 16 3ZM15 20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20V17.5C17 17.2239 17.2239 17 17.5 17H20C20.5523 17 21 16.5523 21 16C21 15.4477 20.5523 15 20 15H17.5C16.1193 15 15 16.1193 15 17.5V20Z" fill="#ffffff"/></svg>`;

    // --- Fullscreen Button Injection with Dynamic Icons & Tippy Tooltip ---
    let isInjecting = false;
    let tippyInstance = null;

    function addSpicyLyricsFullscreenButton() {
        if (isInjecting) return;

        const prefs = loadPreferences();
        if (!prefs.spicyLyricsFullscreenButton) return;

        const spicyPage = document.querySelector("#SpicyLyricsPage");
        if (!spicyPage) return;

        const isTargetPage = spicyPage.classList.contains("NowBarStatus__Closed");
        const viewControls = spicyPage.querySelector(".ViewControls");

        if (isTargetPage && viewControls) {
            if (!viewControls.querySelector("#btFullscreen")) {
                isInjecting = true;

                const button = document.createElement("button");
                button.id = "btFullscreen";
                button.className = "ViewControl";
                button.setAttribute("type", "button");

                const isCurrentlyFull = !!document.fullscreenElement;
                const labelText = isCurrentlyFull ? "Exit Fullscreen" : "Fullscreen";

                button.setAttribute("aria-label", labelText);
                button.innerHTML = isCurrentlyFull ? exitFullscreenSVG : enterFullscreenSVG;

                if (Spicetify.Tippy) {
                    tippyInstance = Spicetify.Tippy(button, {
                        ...Spicetify.TippyProps,
                        content: labelText,
                    });
                }

                button.addEventListener("click", (e) => {
                    e.stopPropagation();
                    if (!document.fullscreenElement) {
                        document.documentElement.requestFullscreen().catch((err) => console.log(err));
                        document.body.classList.add("btFullscreenEnabled");
                        updateButtonStateAppearance("Exit Fullscreen", exitFullscreenSVG);
                    } else {
                        if (document.exitFullscreen) {
                            document.exitFullscreen().catch((err) => console.log(err));
                        }
                        document.body.classList.remove("btFullscreenEnabled");
                        updateButtonStateAppearance("Fullscreen", enterFullscreenSVG);
                    }
                });

                viewControls.appendChild(button);

                setTimeout(() => {
                    isInjecting = false;
                }, 50);
            }
        } else {
            const customBtn = viewControls?.querySelector("#btFullscreen");
            if (customBtn) {
                isInjecting = true;
                if (tippyInstance) {
                    tippyInstance.destroy();
                    tippyInstance = null;
                }
                customBtn.remove();
                setTimeout(() => {
                    isInjecting = false;
                }, 50);
            }
        }
    }

    function updateButtonStateAppearance(text, svgContent) {
        const customBtn = document.getElementById("btFullscreen");
        if (customBtn) {
            customBtn.setAttribute("aria-label", text);
            customBtn.innerHTML = svgContent;
        }
        if (tippyInstance) {
            tippyInstance.setContent(text);
        }
    }

    document.addEventListener("fullscreenchange", () => {
        const isFull = !!document.fullscreenElement;

        if (isFull) {
            document.body.classList.add("btFullscreenEnabled");
            updateButtonStateAppearance("Exit Fullscreen", exitFullscreenSVG);
        } else {
            document.body.classList.remove("btFullscreenEnabled");
            updateButtonStateAppearance("Fullscreen", enterFullscreenSVG);
        }
    });

    function addControlPanelButton() {
        const prefs = loadPreferences();

        const tryAddButton = setInterval(() => {
            const actionButtons = document.querySelector(".main-actionButtons");

            if (actionButtons) {
                clearInterval(tryAddButton);

                const button = document.createElement("button");
                button.className =
                    "bloom-tweaks Button-sc-1dqy6lx-0 Button-buttonTertiary-small-small-useBrowserDefaultFocusStyle-condensedAll encore-text-body-small-bold";
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
                        <h3 style="padding-top: 16px;">Extension Customizations</h3>
                        <div class="bloom-tweaks x-settings-row">
                            <div class="bloom-tweaks x-settings-firstColumn">
                                <label class="bloom-tweaks encore-text encore-text-body-small encore-internal-color-text-subdued">Spicy Lyrics Fullscreen Button</label>
                            </div>
                            <div class="bloom-tweaks x-settings-secondColumn">
                                <label class="bloom-tweaks x-toggle-wrapper">
                                    <input id="spicyLyricsFullscreenButton" type="checkbox" class="bloom-tweaks x-toggle-input" ${prefs.spicyLyricsFullscreenButton ? "checked" : ""}>
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

                    document
                        .getElementById("saveSettingsButton")
                        .addEventListener("click", saveSettings);

                    function saveSettings() {
                        const newPrefs = {
                            customCSS:
                                document.getElementById("customCSS")?.checked ||
                                false,
                            buttonStyling: prefs.buttonStyling,
                            fluentButtonsCSS:
                                document.getElementById("fluentButtonsCSS")
                                    ?.checked || false,
                            customNPV:
                                document.getElementById("customNPV")?.checked ||
                                false,
                            noiseBlurBg:
                                document.getElementById("noiseBlurBg")
                                    ?.checked || false,
                            spicyLyricsFullscreenButton:
                                document.getElementById("spicyLyricsFullscreenButton")
                                    ?.checked || false,
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
        addSpicyLyricsFullscreenButton();
    }

    let observerTimer = null;
    function initObserver() {
        const observer = new MutationObserver(() => {
            if (observerTimer) return;
            observerTimer = setTimeout(() => {
                updateButtonState();
                addSpicyLyricsFullscreenButton();
                observerTimer = null;
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