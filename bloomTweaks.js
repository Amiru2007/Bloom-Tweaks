// Wait for Spicetify to load
function waitForSpicetify() {
    if (!Spicetify.Player) {
        setTimeout(waitForSpicetify, 100);
        return;
    }

    // Inject CSS styles
    const style = document.createElement('style');
    style.textContent = `
        ._Cq69xKZBtHaaeMZXIdk {
            display: none !important;
        }

        .playlist-playlist-playlist .IconWrapper__Wrapper-sc-1hf1hjl-0 .Svg-sc-ytk21e-0 {
            width: 50px;
            height: 50px;
        }

        /* .IconWrapper__Wrapper-sc-1hf1hjl-0 .Svg-sc-ytk21e-0 {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            background-color: var(--spice-text) !important;
        } */

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

        aside[aria-label="Friend Activity"] .sGj6VHKqd2s4IorAqiYI {
            background-color: var(--background-press) !important;
        }

        aside[aria-label="Friend Activity"] .sGj6VHKqd2s4IorAqiYI p {
            color: var(--spice-subtext) !important;
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
        
        #spicetify-playlist-list li button.Button-sc-1dqy6lx-0.Button-textBase-medium-medium-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle[aria-label*="Play"] svg.Svg-sc-ytk21e-0.Svg-img-icon-medium,
        .main-playButton-PlayButton.main-playButton-primary svg,
        aside[aria-label="Queue"] .Button-sc-1dqy6lx-0[aria-label*="Play"] svg,
        .cRB7yMdTUrWxDud8Uqvi[aria-label*="Play"] .RTHphmJ9fFJyJWFe9Kwt,
        .play-button svg,
        .Button-buttonPrimary-useBrowserDefaultFocusStyle-data-is-icon-only[aria-label*="Play"] .IconWrapper__Wrapper-sc-1hf1hjl-0 .Svg-sc-ytk21e-0 {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            transition: transform 0.3s ease;
            background: var(--spice-text);
        }

        #spicetify-playlist-list li button.Button-sc-1dqy6lx-0.Button-textBase-medium-medium-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle[aria-label*="Pause"] svg.Svg-sc-ytk21e-0.Svg-img-icon-medium,
        aside[aria-label="Queue"] .Button-sc-1dqy6lx-0[aria-label*="Pause"] svg,
        .cRB7yMdTUrWxDud8Uqvi[aria-label*="Pause"] .RTHphmJ9fFJyJWFe9Kwt,
        .Button-buttonPrimary-useBrowserDefaultFocusStyle-data-is-icon-only[aria-label*="Pause"] .IconWrapper__Wrapper-sc-1hf1hjl-0 .Svg-sc-ytk21e-0 {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_pause_16_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_pause_16_filled.svg);
            transition: transform 0.3s ease;
            background: var(--spice-text);
        }

        .main-yourLibraryX-button path {
            display: block !important;
        }

        .main-yourLibraryX-libraryItemContainer li.main-useDropTarget-base.main-useDropTarget-track.main-useDropTarget-local.main-useDropTarget-album.main-useDropTarget-episode.main-yourLibraryX-listItem button.Button-sc-1dqy6lx-0.Button-textBase-medium-medium-buttonTertiary-iconOnly-useBrowserDefaultFocusStyle svg.Svg-sc-ytk21e-0.Svg-img-icon-medium path {
            background: transparent;
        }

        .BfALkuQy0UjTI70U9QlQ {
            background: rgba(0, 0, 0, 0.5) !important;
            border-radius: 4px !important;
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

        .main-trackList-trackList[aria-rowcount="3"] {
            margin-top: 20px;
        }

        .playlist-playlist-playlistInlineCurationBackButton {
            color: var(--text-subdued);
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

        .SN5MVM1k5tAxwKeA7WDr {
            color: var(--spice-text) !important;
        }



        /* ------------------------------------ Profile Page ----------------------------------- */



        .spotify__container--is-desktop:not(.fullscreen) .zogFp9G1AEqb8AKOd5BO {
            -webkit-app-region: no-drag;
            backdrop-filter: blur(40px) saturate(3.5) !important;
            border-radius: var(--border-radius-1);
        }

        .PsrXxenHUFXYM1ub1xWw {
            background-color: rgba(var(--spice-rgb-card), 0.7) !important;
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
            background-color: var(--spice-accent) !important;
            color: var(--spice-alt-text) !important;
        }

        .setting-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }



        /* -------------------------------------- Play Bar ------------------------------------- */



        .HD9s7U5E1RLSWKpXmrqx {
            background: transparent !important;
        }

        .Root__now-playing-bar .Button-buttonPrimary-useBrowserDefaultFocusStyle-data-is-icon-only .Svg-sc-ytk21e-0 {
            width: 28px !important;
            height: 28px !important;
        }

        .player-controls__buttons button {
            max-height: var(--button-size);
            max-width: var(--button-size);
            padding-left: 0 !important;
            padding-right: 0 !important;
        }

        button.Button-sc-1dqy6lx-0[aria-label*="Previous"] {
            padding-left: 10px !important;
        }

        button.Button-sc-1dqy6lx-0[aria-label*="Next"] {
            padding-right: 10px !important;
        }

        button.Button-sc-1dqy6lx-0[aria-label*="Previous"] svg.Svg-sc-ytk21e-0.Svg-img-icon-small {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_previous_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_previous_24_filled.svg);
            background-color: var(--spice-text) !important;
            width: 24px !important;
            height: 24px !important;
        }

        button.Button-sc-1dqy6lx-0[aria-label*="Next"] svg.Svg-sc-ytk21e-0.Svg-img-icon-small {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_next_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_next_24_filled.svg);
            background-color: var(--spice-text) !important;
            width: 24px !important;
            height: 24px !important;
        }

        .playback-bar .playback-progressbar {
            height: 20px !important;
        }

        .playback-bar .progress-bar {
            padding: 0 10px;
        }

        .playback-bar .x-progressBar-progressBarBg {
            width: calc(100% - 20px) !important;
        }

        .playback-bar .x-progressBar-fillColor {
            width: 100%;
            will-change: transform;
            padding: 0 10px;
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



        /* -------------------------------------- Nav Bar ------------------------------------- */



        .main-yourLibraryX-header .Button-sc-1dqy6lx-0[aria-label="Go back"] svg {
            mask-image: url(https://nimsandu.github.io/spicetify-bloom/assets/fluentui-system-icons/ic_fluent_arrow_left_24_filled.svg) !important;
            -webkit-mask-image: url(https://nimsandu.github.io/spicetify-bloom/assets/fluentui-system-icons/ic_fluent_arrow_left_24_filled.svg) !important;
            background-color: var(--spice-subtext);
            margin-left: 5px;
        }



        /* -------------------------------------- Spicetify Tags ------------------------------------- */


        
        .GitHub-button-wrapper,
        .README h1,
        .all-untagged-playlists-page-sort-dropdown-wrapper, 
        .all-playlists-page-sort-dropdown-wrapper {
            padding-top: 30px;
        }

        .play-icon {
            left: 0 !important;
            top: 0 !important;
            width: 50px !important;
            transform: none !important;
            height: 50px !important;
        }
        
        .loadingWrapper .status-icon {
            mask-image: url(https://nimsandu.github.io/spicetify-bloom/assets/fluentui-system-icons/ic_fluent_library_24_regular.svg) !important;
            -webkit-mask-image: url(https://nimsandu.github.io/spicetify-bloom/assets/fluentui-system-icons/ic_fluent_library_24_regular.svg) !important;
            background-color: var(--spice-subtext) !important;
        }

        .text-input {
            scrollbar-color: rgba(var(--spice-rgb-selected-row),.3) transparent;
            -webkit-font-smoothing: antialiased;
            user-select: none;
            box-sizing: border-box;
            font-family: "Segoe UI Variable Display", "Segoe UI Variable Text", "Segoe UI",
            "Microsoft Ya Hei", sans-serif !important;
            line-height: normal;
            box-shadow: none !important;
            text-transform: none;
            background: rgba(var(--spice-rgb-selected-row),.1);
            border: 1px solid transparent;
            color: var(--spice-text);
            font-size: 14px;
            height: 40px;
            padding: 0 12px;
            width: 100%;
            background-color: var(--spice-card);
            border-radius: var(--border-radius-2) !important;
        }

        .text-input:focus {
            border-color: var(--spice-accent) !important;
        }

        .modal-button { */
            scrollbar-color: rgba(var(--spice-rgb-selected-row), .3) transparent;
            -webkit-font-smoothing: antialiased;
            user-select: none;
            box-sizing: border-box;
            font-family: "Segoe UI Variable Display", "Segoe UI Variable Text", "Segoe UI", "Microsoft Ya Hei", sans-serif !important;
            line-height: normal;
            box-shadow: none !important;
            text-transform: none;
            background: rgba(var(--spice-rgb-selected-row), .1);
            border: 1px solid transparent;
            color: var(--spice-text);
            font-size: 14px;
            height: 40px;
            padding: 0 12px;
            width: 70px !important;
            background-color: var(--spice-card);
            border-radius: 9999px;
            color: var(--spice-alt-text) !important;
            font-weight: 700;
            background: var(--spice-text) !Important;
        }
            
        div#playlist-tags-settings {
            padding-top: 30px;
        }
    
        h2.TypeElement-cello-textBase-type {
            font-size: var(--encore-text-size-base);
            color: var(--text-base);
            font-weight: 700;
        }

        #playlist-tags-settings h2.TypeElement-cello-textBase-type {
            font-size: var(--encore-text-size-larger-2) !important;
        }

        .TypeElement-viola-textSubdued-type {
            font-size: var(--encore-text-size-smaller);
        }



        /* -------------------------------------- Beautiful Lyrics ------------------------------------- */



        #BeautifulLyricsFullscreenButton svg {
            fill: var(--spice-subtext) !important;
        }
        /*
        .BeautifulLyricsBackground:is(aside) .BeautifulLyricsBackground-Container {
            display: none !important;
        }
        */
        .Lyric.Synced.Line {  
            --text-shadow-opacity: 0 !important;
        }

        .ffFwfKcPDbmAPLXzxzKq {
            border-radius: var(--border-radius-1) !important;
        }



        /* -------------------------------------- Genre Tags ------------------------------------- */



        .ellipsis-one-line a {
            color: var(--text-subdued) !important;
        }

        .ellipsis-one-line.main-type-finale {
            margin-top: -3px !important;
        }



        /* -------------------------------------- Home ------------------------------------- */



        .mjZrvVI3CxfHJXu7y0Lg {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
        }



        /* -------------------------------------- Sleep Time ------------------------------------- */



        #sleep-timer-menu .btn-success, #sleep-timer-menu .btn-success:hover {
            background: var(--spice-button, var(--spice-accent)) !important;
            border: 1px solid var(--spice-button, var(--spice-accent)) !important;
            color: var(--spice-alt-text) !important;
        }



        /* -------------------------------------- Bookmarks ------------------------------------- */



        .main-playButton-PlayButton.main-playButton-primary {
            background: transparent;
            border: 0;
        }

        .bookmark-controls {
            background-color: rgb(45 45 45 / 70%) !important;
        }

        .bookmark-card-image {
            width: 60px !important;
            height: 60px !important;
            border-radius: 7px !important;
        }

        .bookmark-card {
            margin-top: 12px !important;
        }



        /* -------------------------------------- Spicetify Stats ------------------------------------- */



        .Box__BoxComponent-sc-y4nds-0.BoxComponent-group-card-naked-isInteractive-draggable.Box-sc-1njtxi4-0.Box-group-naked-card-md-isInteractive-draggable.main-card-cardContainer.Card:hover:active,
        .Box__BoxComponent-sc-y4nds-0.BoxComponent-group-card-naked-isInteractive-draggable.Box-sc-1njtxi4-0.Box-group-naked-card-md-isInteractive-draggable.main-card-cardContainer.Card {
            width: 100% !important;
            height: 100% !important;
        }
            
        .TypeElement-type-canon-textBase {
            margin-bottom: 10px;
        }

        .page-header {
            margin: 16px 0 0 0 !important;
        }
            
        .badge {
            background-color: var(--spice-accent) !important;
            color: var(--spice-alt-text) !important;
            font-weight: 500;
        }
            
        .badge svg {
            fill: var(--spice-alt-text) !important;
        }

        .main-tag-container, .main-trackList-rowImage {
            border-radius: 4px !important;
        }

        .navBar-module__topBarNav___qWGeZ_stats {
            text-align: center;
        }
        
        #stats-app .main-trackList-trackListHeader {
            padding: 0 !important;
            top: 64px !important;
        }
        
        #stats-app span.TypeElement-mesto-textSubdued.TypeElement-mesto-textSubdued-type.main-trackList-rowSubTitle.standalone-ellipsis-one-line {
            margin-top: -2px;
        }
        
        #stats-app span.TypeElement-mesto-textSubdued.TypeElement-mesto-textSubdued-type.main-trackList-rowSubTitle.standalone-ellipsis-one-line a {
            color: var(--text-subdued) !important;
            font-size: 14px !important;
        }

        #stats-app .stats-scrollButton {
            border-radius: 4px !important;
            padding: 3px 0 !important;
            margin: 0 5px 5px 0 !important;
        }

        #stats-app .stats-genreRowFill {
            background: var(--spice-button);
            height: 100%;
            border-radius: 30px !important;
            display: flex;
            align-items: center;
        }

        #stats-app .stats-genreText {
            margin-left: 10px !important;
        }



        /* -------------------------------------- Spicetify Better Local Fils by Pithaya ------------------------------------- */



        .contentSpacing.main-entityHeader-container.main-entityHeader-nonWrapped.main-entityHeader-newEntityHeaders .app-module__center-container___LG8O4_betterDlocalDfiles {
            border-radius: var(--border-radius-1) !important; */
            box-shadow: 0 4px 60px rgb(33 33 33 / 50%) !important;
            background-image: linear-gradient(to right top, #007cbc, #00a1d3, #00c2bc, #00dc7c, #a8eb12) !important;
        }
            
        .app-module__stretch-container___SIzsh_betterDlocalDfiles.undefined .main-trackList-trackListRow {
            width: calc(100% - 20px) !important;
            margin-left: 10px !important;
            margin-top: 0px !Important;
        }
            
        .app-module__stretch-container___SIzsh_betterDlocalDfiles.undefined .main-trackList-trackListHeaderRow {
            margin-bottom: 25px;
        }

        .app-module__stretch-container___SIzsh_betterDlocalDfiles.undefined .main-entityHeader-backgroundColor {
            background-color: #00a1d3;
        }
            
        span.Type__TypeElement-sc-goli3j-0.TypeElement-type-mesto-textSubdued.main-trackList-rowSubTitle.standalone-ellipsis-one-line {
            font    -size: 14px !important;
            color: var(--spice-subtext) !important;
        }
            
        .app-module__full-size-container___XoGtP_betterDlocalDfiles .contentSpacing:not( .artist-artistDiscography-topBar, .search-searchCategory-container, .hV9v6y_uYwdAsoiOHpzk, .main-entityHeader-container, .main-actionBar-ActionBar ) {
            padding-top: 8px;
            padding-bottom: 110px;
        }

        .main-playButton-PlayButton > button {
            width: 50px !important;
            height: 50px !important;
            margin: 3px;
        }



        /* -------------------------------------- Made For You ------------------------------------- */



        a[aria-label*="Made for you"] .TypeElement-balladBold-type {
            font-weight: 700 !important;
        }



        /* -------------------------------------- Spicetify Library by Harbassan ------------------------------------- */



        .main-yourLibraryX-navLink[href="/library"] > svg {
            mask-image: url(https://nimsandu.github.io/spicetify-bloom/assets/fluentui-system-icons/ic_fluent_library_24_regular.svg) !important;
            -webkit-mask-image: url(https://nimsandu.github.io/spicetify-bloom/assets/fluentui-system-icons/ic_fluent_library_24_regular.svg) !important;
            background-color: var(--spice-subtext) !important;
        }

        .main-yourLibraryX-navLink[href="/library"].active > svg {
            mask-image: url(https://nimsandu.github.io/spicetify-bloom/assets/fluentui-system-icons/ic_fluent_library_24_filled.svg) !important;
            -webkit-mask-image: url(https://nimsandu.github.io/spicetify-bloom/assets/fluentui-system-icons/ic_fluent_library_24_filled.svg) !important;
            background-color: var(--spice-accent) !important;
        }

        .main-yourLibraryX-navLink[href="/library"]:hover > svg {
            background-color: var(--spice-text) !important;
        }

        .main-yourLibraryX-navLink[href="/library"].active:hover > svg {
            background-color: var(--spice-accent) !important;
        }

        .main-yourLibraryX-navLink[href="/library"] > svg path {
            opacity: 0;
        }

        .main-gridContainer-gridContainer div .Box__BoxComponent-sc-y4nds-0[aria-labelledby*='folder'] .Areas__InteractiveArea-sc-1tea2mc-0.Areas__MainArea-sc-1tea2mc-1.MWEhk.MainArea::after {
            content: '';
            background: var(--text-subdued);
            height: 24px;
            width: 24px;
            mask-image: url(https://raw.githubusercontent.com/Amiru2007/Bloom-Tweaks/main/assets/Icons/ic_fluent_folder_24_regular.svg) !important;
            -webkit-mask-image: url(https://raw.githubusercontent.com/Amiru2007/Bloom-Tweaks/main/assets/Icons/ic_fluent_folder_24_regular.svg) !important;
            position: absolute;
            right: 12px;
        }



        /* -------------------------------------- Spicetify Library by Harbassan ------------------------------------- */



        #playback-bar-drag-block div div:nth-child(3) {
            background-color: var(--spice-player-bar-bg) !important;
        }

        #playback-bar-drag-block div div:nth-child(1) svg,
        #playback-bar-drag-block div div:nth-child(2) svg {
            opacity: 0;
        }

        #playback-bar-drag-block div div:nth-child(1)::after,
        #playback-bar-drag-block div div:nth-child(2)::after {
            content: '';
            background: var(--spice-text);
            width: 2px;
            height: 16px;
            border-radius: 99px;
            border: 3px solid var(--spice-card);
            position: absolute;
        }



        /* -------------------------------------- Local Files Folder ------------------------------------- */



        .standalone-ellipsis-one-line.W676nknusnBt8sz19YVV {
            font-size: var(--encore-text-size-smaller) !important;
            color: var(--text-subdued) !important;
        }

        .main-entityHeader-detailsText {
            margin-left: 5px;
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
