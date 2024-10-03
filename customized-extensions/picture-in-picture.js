(async () => {
    for (; !Spicetify.React || !Spicetify.ReactDOM;)await new Promise(e => setTimeout(e, 10)); var s, n, v; async function e() { for (; !Spicetify?.Player || !Spicetify?.Playbar?.Button || !Spicetify?.Player?.data?.item;)await new Promise(e => setTimeout(e, 100)); let e, t = (Spicetify.Player.addEventListener("songchange", () => { i(e) }), Spicetify.Player.addEventListener("onplaypause", a), Spicetify.Player.addEventListener("onprogress", e => { e = e.data, s && (s.querySelector(".bar").style.width = e / Spicetify.Player.data.item.duration.milliseconds * 100 + "%") }), new Spicetify.Playbar.Button("Picture-In-Picture", v.pip, async function () { window.documentPictureInPicture.window ? (window.documentPictureInPicture.window.close(), s = null, t.active = !1) : ((e = await window.documentPictureInPicture.requestWindow({ width: 360, height: 176 })).addEventListener("pagehide", e => { t.active = !1, s = null }), t.active = !0) }, !document.pictureInPictureEnabled)) } function i(e) {
        var t, i, a, l; s && e && (t = (i = Spicetify.Player.data.item).duration.milliseconds, i = (i.artists || []).map(e => e.name).join(", "), a = Spicetify.Player.getProgress(), s.body.innerHTML = `
    <style>
        * {
            font-family: "Segoe UI Variable Display", "Segoe UI Variable Text", "Segoe UI", "Microsoft Ya Hei", sans-serif !important;
        }
        body {
            display: flex;
            flex-direction: row !important; /*spotify has annoying default styles*/
            color: white;
            font-family: sans-serif;
            margin: 0;
            /*overflow: hidden;*/
        }
        .main-container {
            width: 100%;
            /* display: flex; */
            padding: 8px 22px;
            background: #292929;
        }
        .header {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .spotify {
            width: -webkit-fill-available;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            font-size: 12px;
        }
        .spotify .logo img {
            width: 16px;
            height: 16px;
        }
        .album {
            height: 60px;
            aspect-ratio: 1 / 1;
            border-radius: 6px;
            box-shadow: 3px 3px 6px #252525;
        }
        .main {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            position: relative;
        }
        .song-card {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
        }
        .song-text {
            display: flex;
            align-items: self-start;
            justify-content: center;
            flex-direction: column;
            height: 60px;
        }
        .controls {
            display: flex;
            justify-content: center;
            gap: 40px;
            padding: 15px 0;
        }
        .title {
            text-align: left;
            font-size: 14px;
            font-weight: 500;
        }
        .artists {
            text-align: left;
            font-size: 12px;
            color: #999999;
        }
        .close, .move {
            position: absolute;
            right: 22px;
            /* padding: 10px; */
        }
        .move { bottom: 0; }
        
        .button {
            cursor: pointer;
            &:hover > svg {
                fill: #999;
            }
        }
        .progress {
            height: 5px;
            position: absolute;
            bottom: 0;
            width: 100%;
            > .bar {
                background: #7bdb0f;
                height: 100%;
                width: 0;
            }
        }

        /*
        .controls .button svg {
            background: #ffffff;
            width: 24px;
            height: 24px;
            transform: scale(0.76);
        }
        .controls .button path {
            display: none;
        }
        .prev.button svg {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_previous_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_previous_24_filled.svg);
        }
        .play.button svg {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_play_24_filled.svg);
        }
        .next.button svg {
            mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_next_24_filled.svg);
            -webkit-mask-image: url(https://raw.githubusercontent.com/nimsandu/spicetify-bloom/main/assets/fluentui-system-icons/ic_fluent_next_24_filled.svg);
        }

        */
    </style>
    <div class="main-container">
        <div class="header">
            <div class="spotify">
                <div class="logo">
                    <img src="https://raw.githubusercontent.com/Amiru2007/Bloom-Tweaks/refs/heads/main/assets/Images/Spotify.png">
                </div>
                <span class="head-text">Spotify</span>
            </div>
            <div class="close button">${v.leave_pip}</div>
        </div>
        <div class="song-details">
            <div class="main">
                <div class="song-card">
                    <div class="song-text">
                        <div class="title">${Spicetify.Player.data.item.name}</div>
                        ${i ? `<div class="artists">${i}</div>` : ""}
                    </div>
                    <img src="${l = Spicetify.Player.data.item, l.images?.find(e => "standard" === e.label)?.url?.replaceAll("spotify:image:", "https://i.scdn.co/image/")}" alt="" class="album"/>
                </div>
                <div class="controls">
                    <div class="prev button">${v.prev}</div>
                    <div class="play button">${n ? v.pause : v.play}</div>
                    <div class="next button">${v.next}</div>
                </div>
                <!-- <div class="progress">
                    <div class="bar" style="width: ${a / t * 100}%"></div>
                </div> -->
            </div>
        </div>
    </div>
    `, s.querySelector(".prev").addEventListener("click", Spicetify.Player.back), s.querySelector(".play").addEventListener("click", e => { Spicetify.Player.togglePlay() }), s.querySelector(".next").addEventListener("click", Spicetify.Player.next), s.querySelector(".close").addEventListener("click", () => { e.close() }))
    } function a() { var e; s && (e = s.querySelector(".play"), n = !n, e.innerHTML = n ? v.pause : v.play) } n = Spicetify.Player.isPlaying(), v = {
        pip: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M80-520v-80h144L52-772l56-56 172 172v-144h80v280H80Zm80 360q-33 0-56.5-23.5T80-240v-200h80v200h320v80H160Zm640-280v-280H440v-80h360q33 0 56.5 23.5T880-720v280h-80ZM560-160v-200h320v200H560Z"/></svg>',
        leave_pip: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#555555"><path d="M160-160q-33 0-56.5-23.5T80-240v-280h80v280h640v-480H440v-80h360q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm523-140 57-57-124-123h104v-80H480v240h80v-103l123 123ZM80-600v-200h280v200H80Zm400 120Z"/></svg>',
        play: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 5.27368C5 3.56682 6.82609 2.48151 8.32538 3.2973L20.687 10.0235C22.2531 10.8756 22.2531 13.124 20.687 13.9762L8.32538 20.7024C6.82609 21.5181 5 20.4328 5 18.726V5.27368Z" fill="#ffffff"/></svg>',
        pause: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M5.746 3a1.75 1.75 0 0 0-1.75 1.75v14.5c0 .966.784 1.75 1.75 1.75h3.5a1.75 1.75 0 0 0 1.75-1.75V4.75A1.75 1.75 0 0 0 9.246 3h-3.5ZM14.746 3a1.75 1.75 0 0 0-1.75 1.75v14.5c0 .966.784 1.75 1.75 1.75h3.5a1.75 1.75 0 0 0 1.75-1.75V4.75A1.75 1.75 0 0 0 18.246 3h-3.5Z" fill="#ffffff"/></svg>',
        next: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3.0001 4.753C3.0001 3.34519 4.57791 2.51363 5.73926 3.30937L16.2377 10.5028C17.2479 11.1949 17.2531 12.6839 16.2478 13.3831L5.7493 20.6847C4.58897 21.4917 3.0001 20.6613 3.0001 19.248V4.753ZM21 3.75C21 3.33579 20.6642 3 20.25 3C19.8358 3 19.5 3.33579 19.5 3.75V20.25C19.5 20.6642 19.8358 21 20.25 21C20.6642 21 21 20.6642 21 20.25V3.75Z" fill="#ffffff"/></svg>',
        prev: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 3.75C3 3.33579 3.33579 3 3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V20.25C4.5 20.6642 4.16421 21 3.75 21C3.33579 21 3 20.6642 3 20.25V3.75ZM20.9999 4.753C20.9999 3.34519 19.4221 2.51363 18.2608 3.30937L7.76231 10.5028C6.75214 11.1949 6.74694 12.6839 7.75226 13.3831L18.2507 20.6847C19.4111 21.4917 20.9999 20.6613 20.9999 19.248V4.753Z" fill="#ffffff"/></svg>'
    },
    window.documentPictureInPicture.addEventListener("enter", e => { s = e.window.document, i(e.window) }), (async () => { await e() })()
})();