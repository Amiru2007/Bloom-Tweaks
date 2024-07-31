// Wait for Spicetify to load
function waitForSpicetify() {
    if (!Spicetify.Player) {
        setTimeout(waitForSpicetify, 100);
        return;
    }

    // Inject CSS styles
    const style = document.createElement('style');
    style.textContent = `
        .playlist-playlist-playlist .IconWrapper__Wrapper-sc-1hf1hjl-0 .Svg-sc-ytk21e-0 {
            width: 50px;
            height: 50px;
        }

        .IconWrapper__Wrapper-sc-1hf1hjl-0 .Svg-sc-ytk21e-0 {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            background-color: var(--spice-text) !important;
        }

        .IconWrapper__Wrapper-sc-1hf1hjl-0 .Svg-sc-ytk21e-0 path {
            fill: transparent;
        }

        .Wrapper-large-only-medium {
            position: static !important;
        }

        .ButtonInner-large-iconOnly {
            background-color: transparent !important;
        }

        .Button-buttonPrimary-useBrowserDefaultFocusStyle-data-is-icon-only:hover .ButtonInner-sc-14ud5tc-0 {
            background-color: transparent !important;
        }

        .Button-buttonPrimary-useBrowserDefaultFocusStyle-data-is-icon-only:active .ButtonInner-sc-14ud5tc-0 {
            background-color: transparent !important;
        }

        .play-button,
        .ButtonInner-medium-iconOnly {
            background-color: transparent !important;
        }

        .ChipInnerComponent-sm-isUsingKeyboard,
        .login-button {
            background-color: var(--spice-dark-border) !important;
            border-radius: 99px !important;
            border-style: none !important;
            color: var(--spice-text) !important;
            cursor: pointer !important;
            font-size: 14px !important;
            height: auto !important;
            padding: 8px 16px !important;
            text-align: center !important;
        }

        .main-buddyFeed-buddyFeedRoot, .main-buddyFeed-buddyFeed, aside[aria-label="Friend Activity"] {
            width: 100% !important;
            z-index: 0;
        }

        .dAPXjNmPLJI6x_sXJwAp .cRB7yMdTUrWxDud8Uqvi {
            background-color: rgba(var(--spice-rgb-card), 0.7) !important;
        }

        .RTHphmJ9fFJyJWFe9Kwt {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            background: var(--spice-text);
            height: 16px !important;
            width: 16px !important;
        }

        .RTHphmJ9fFJyJWFe9Kwt path {
            opacity: 0;
        }

        .login-button {
            margin: 5px !important;
        }

        /* .ellipsis-one-line {
            color: #d9d9d9 !important;
        } */

        .play-icon path {
            visibility: hidden;
        }

        aside[aria-label="Queue"] .Button-sc-1dqy6lx-0 svg {
            width: 20px;
            height: 20px;
        }

        .kh6wYYPvgRPBhA2wj3AS .qp7Sys7hJSZHLzw4K_yF {
            background-color: rgba(var(--spice-rgb-card), 0.7) !important;
        }

        aside[aria-label="Queue"] .Button-sc-1dqy6lx-0[aria-label*="Play"] svg,
        .cRB7yMdTUrWxDud8Uqvi[aria-label*="Play"] .RTHphmJ9fFJyJWFe9Kwt,
        .play-button,
        .Button-buttonPrimary-useBrowserDefaultFocusStyle-data-is-icon-only[aria-label*="Play"] .IconWrapper__Wrapper-sc-1hf1hjl-0 .Svg-sc-ytk21e-0 {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            transition: transform 0.3s ease;
            background: var(--spice-text);
        }

        aside[aria-label="Queue"] .Button-sc-1dqy6lx-0[aria-label*="Pause"] svg,
        .cRB7yMdTUrWxDud8Uqvi[aria-label*="Pause"] .RTHphmJ9fFJyJWFe9Kwt,
        .Button-buttonPrimary-useBrowserDefaultFocusStyle-data-is-icon-only[aria-label*="Pause"] .IconWrapper__Wrapper-sc-1hf1hjl-0 .Svg-sc-ytk21e-0 {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_pause_16_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_pause_16_filled.svg);
            transition: transform 0.3s ease;
            background: var(--spice-text);
        }

        .view-homeShortcutsGrid-PlayButtonContainer .Svg-sc-ytk21e-0 {
            margin-right: 10px;    
        }

        .shuffle-enabled {
            filter: brightness(0) saturate(100%) invert(79%) sepia(29%) saturate(800%) hue-rotate(87deg) brightness(87%) contrast(81%) !important;
        }

        .Wrapper-large-only-medium .Svg-sc-ytk21e-0 {
            width: 50px !important;
            height: 50px !important;
        }

        .main-trackList-rowImagePlayButton {
            transition: transform 0.3s ease;
        }

        .main-trackList-rowImagePlayButton[aria-label*="Play"] .main-trackList-rowPlayPauseIcon {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            background-color: var(--spice-text) !important;
            transition: transform 0.3s ease;
        }

        .main-trackList-rowImagePlayButton[aria-label*="Pause"] .main-trackList-rowPlayPauseIcon {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_pause_16_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_pause_16_filled.svg);
            background-color: var(--spice-text) !important;
            transition: transform 0.3s ease;
        }

        .ButtonInner-large-iconOnly {
            transition: 0.3s ease !important;
        }

        .marketplace-header {
            margin-top: -2px;
        }

        .Root__main-view::before {
            box-shadow: 0 -15px 0 var(--spice-sidebar), 0 15px 0 var(--spice-sidebar) !important;
        }

        .x-downloadButton-DownloadButton {
            display: none;
        }

        .lPDqjZWZMsdD4yc00T2X .main-trackList-rowPlayPauseIcon {
            mask-image: url(https://raw.githubusercontent.com/Amiru2007/icons-i-nedd-in-my-project-personal/main/facebook-f-brands-solid.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/Amiru2007/icons-i-nedd-in-my-project-personal/main/facebook-f-brands-solid.svg);
            background-color: var(--spice-text) !important;
            width: 20px;
            height: 20px;
            transition: transform 0.3s ease;
        }

        .playlist-playlist-playlist .main-editImageButton-image:focus,
        .playlist-playlist-playlist .main-editImageButton-image:hover {
            opacity: 1;
            border-radius: var(--border-radius-1) !important;
        }

        .main-trackList-rowImageWithPlay .main-trackList-rowImagePlayPauseButton {
            border-radius: 4px !important;
        }

        .view-homeShortcutsGrid-shortcut:hover .view-homeShortcutsGrid-equaliser {
            opacity: 0;
        }

        .mjZrvVI3CxfHJXu7y0Lg .main-trackList-rowImageButton:focus, .mjZrvVI3CxfHJXu7y0Lg .main-trackList-rowImageButton:hover {
            opacity: 1;
        }

        .main-trackList-rowImageButton::before {
            display: none;
        }

        .desktop-grid-wrapper .main-trackList-rowImageWithPlay:hover .main-trackList-rowPlayPauseWrapper {
            opacity: 1 !important;
        }

        .main-rootlist-item:hover {
            opacity: 0.9;
        }

        .main-playButton-ButtonInner-sc-1b8ah6o-0 {
            background-color: transparent !important;
            color: var(--spice-accent);
        }

        .IconWrapper__Wrapper-sc-1hf1hjl-0 {
            position: absolute;
            margin-top: 4px;
        }

        .main-rootlist-itemLink {
            padding-left: 24px !important;
        }

        .UoHg4euRpSnCqEZJFlRR {
            padding: 4px 0 !important;
        }

        .main-rootlist-rootlistItemLink {
            height: 32px !important;
        }

        .main-rootlist-itemLink:hover {
            background-color: var(--spice-sidebar-highlight) !important;
            border-radius: var(--border-radius-2) !important;
            padding-left: 20px !important;
        }

        .react-contextmenu-wrapper:first-child {
            padding-top: 4px !important;
        }

        .main-rootlist-item {
            border-bottom-left-radius: 4px !important;
            border-top-left-radius: 4px !important;
            margin-bottom: 0 !important;
            margin-top: 0 !important;
            padding: 0 0 0 4px !important;
        }

        .navBar-footer {
            display: none !important;
        }

        .navBar-link {
            color: var(--spice-text) !important;
            font-size: 14px !important;
            height: 40px !important;
            line-height: 40px !important;
        }

        /* .button:first-child {
            margin-right: 8px !important;
        } */

        .cover-art img {
            border-radius: 4px !important;
            box-shadow: 0 0 12px rgb(0 0 0 / 70%) !important;
        }

        .main-rootlist-rootlistItemLink:hover {
            background-color: var(--spice-sidebar-highlight) !important;
        }
            

        .main-rootlist-rootlistItemLink .main-rootlist-itemLinkText {
            border-radius: 4px !important;
            font-weight: 400 !important;
        }

        .main-trackList-rowImageWithPlay:hover .main-trackList-rowPlayPauseWrapper {
            opacity: 1 !important;
        }

        .main-trackList-rowImageWithPlay:hover .main-trackList-rowImagePlayButton[aria-label*="Play"] {
            display: block !important;
        }

        .main-trackList-rowImageWithPlay:hover .main-trackList-rowImagePlayButton[aria-label*="Pause"] {
            display: none !important;
        }



        /* ---------------------------------- Friends Activity --------------------------------- */



        .umsKuFPqgF42Qhs2m0Ud svg {
            mask-image: url(https://raw.githubusercontent.com/Amiru2007/Bloom-Tweaks/main/assets/Icons/facebook-logo-fill.svg) !important;
            -webkit-mask-image: url(https://raw.githubusercontent.com/Amiru2007/Bloom-Tweaks/main/assets/Icons/facebook-logo-fill.svg) !important;
            background-color: var(--spice-text) !important;
            width: 20px !important;
            height: 20px !important;
            transition: transform 0.3s ease;
        }

        .umsKuFPqgF42Qhs2m0Ud .IconWrapper__Wrapper-sc-1hf1hjl-0 {
            margin-top: 0 !important;
        }



        /* ------------------------------------ Profile Page ----------------------------------- */



        .spotify__container--is-desktop:not(.fullscreen) .zogFp9G1AEqb8AKOd5BO {
            -webkit-app-region: no-drag;
            backdrop-filter: blur(40px) saturate(3.5) !important;
            border-radius: var(--border-radius-1);
        }

        .PsrXxenHUFXYM1ub1xWw {
            background-color: rgba(var(--spice-rgb-card) 0.7) !important;
        }

        .U_VWfeeLWnDPhUTxCmrQ {
            margin: 15px !important;
        }

        .PsrXxenHUFXYM1ub1xWw .tAIzXn8C9KriGwGuBfWg {
            cursor: pointer !important;
        }

        .profile-userEditDetails-nameInput:focus {
            border: 1px solid var(--spice-accent) !important;
        }

        .profile-userEditDetails-label {
            left: 10px;
            top: -5px;
            line-height: 0;
            padding: 0 4px;
            background: linear-gradient(180deg, #0f0f0f, var(--spice-tab-active));
        }



        /* ------------------------------------ Marketplace ------------------------------------ */



        .marketplace-grid .main-card-draggable .main-card-cardMetadata li.marketplace-card__tag[data-tag="external JS"], .marketplace-grid .main-card-draggable .main-card-cardMetadata li.marketplace-card__tag[data-tag=archived] {
            background-color: var(--spice-accent);
            color: var(--spice-alt-text);
        }



        /* -------------------------------------- Play Bar ------------------------------------- */



        .HD9s7U5E1RLSWKpXmrqx {
            background: transparent !important;
        }



        /* -------------------------------------- NPV ------------------------------------- */



        .artist-artistOnTour-date.artist-artistOnTour-elevated {
            background: transparent !important;
        }



        /* -------------------------------------- Event Page ------------------------------------- */



        .HYVIJaYYiCTgSCHie70L {
            background: rgba(var(--spice-rgb-card), 0.7) !important;
        }

        .SPbe_Q1wtiZQCmo0QKUy {
            margin: 8px;
        }

        .wedRUk4eiBo9n9vqXLhU {
            background-color: var(--spice-card);
            border: 1px var(--spice-contour) solid !important;
            display: inline-flex;
            flex-direction: column;
            row-gap: var(--encore-spacing-tighter-2, 8px);
            border-radius: var(--encore-corner-radius-larger, 6px);
            padding-block: 12px;
            padding-inline: 12px;
        }

        .wedRUk4eiBo9n9vqXLhU:hover {
            background-color: var(--spice-highlight);
        }

        .EkGb0ZzhswreSvpZoioY {
            border-radius: 6px !important;
            width: calc(100% - 20px) !important;
            margin: 10px;
        }
            
        .no-focus-outline :focus {
            outline: none;
        }

        .XgeTnLs82tTjczDR6oKn .IconWrapper__Wrapper-sc-1hf1hjl-0 .Svg-sc-ytk21e-0 {
            mask-image: url(https://raw.githubusercontent.com/Amiru2007/Bloom-Tweaks/main/assets/Icons/ic_fluent_open_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/Amiru2007/Bloom-Tweaks/main/assets/Icons/ic_fluent_open_24_filled.svg);
            background-color: var(--spice-highlight-elevated) !important;
            width: 17px;
            height: 17px;
            margin-top: -4px;
        }



        /* -------------------------------------- Top Bar ------------------------------------- */



        .main-topBar-topbarContent svg {
            width: 25px !important;
            height: 25px !important;
            margin-top: -4px;
        }



        /* -------------------------------------- New Release Page ------------------------------------- */



        .view-homeShortcutsGrid-PlayButtonContainer .Button-buttonPrimary-useBrowserDefaultFocusStyle-data-is-icon-only {
            background: transparent !important;
        }

        .Button-buttonPrimary-useBrowserDefaultFocusStyle-data-is-icon-only .Svg-sc-ytk21e-0,
        .view-homeShortcutsGrid-PlayButtonContainer .Svg-sc-ytk21e-0 {
            width: 35px;
            height: 35px;
        }

        .Button-buttonPrimary-useBrowserDefaultFocusStyle-data-is-icon-only .ButtonInner-small-iconOnly {
            background: transparent !important;
        }

        .Button-buttonPrimary-useBrowserDefaultFocusStyle-data-is-icon-only .IconWrapper__Wrapper-sc-1hf1hjl-0 {
            top: 0 !important;
            left: 0 !important;
            margin: 0 !important;
        }

        .SjhDNg4bQRQmIJAba47Z {
            width: 60% !important;
        }



        /* -------------------------------------- New Release Page ------------------------------------- */



        .tag-list-button {
            mask-image: url(https://raw.githubusercontent.com/Amiru2007/Bloom-Tweaks/main/assets/Icons/ic_fluent_edit_24_regular.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/Amiru2007/Bloom-Tweaks/main/assets/Icons/ic_fluent_edit_24_regular.svg);
            background-color: var(--spice-text) !important;
            width: 13px;
            height: 13px;
            padding: 20px 0 0;
            margin-left: 6px;
        }
    `;
    document.head.append(style);

    // JavaScript function to handle play/pause button classes
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

    // Initial update of button states
    updateButtonState();

    // Listen for changes in the DOM to update button states dynamically
    const observer = new MutationObserver(updateButtonState);
    observer.observe(document.body, { childList: true, subtree: true });

    // Listen for button clicks to update button states
    document.body.addEventListener('click', event => {
        if (event.target.tagName === 'BUTTON' && event.target.getAttribute('aria-label')) {
            updateButtonState();
        }
    });
}

// Execute the function
waitForSpicetify();
