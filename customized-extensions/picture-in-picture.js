(async () => {
    for (; !Spicetify.React || !Spicetify.ReactDOM; )
      await new Promise((e) => setTimeout(e, 10));
    var s, n, v;
    var isMuted = false; // Track mute state
    async function e() {
      for (
        ;
        !Spicetify?.Player ||
        !Spicetify?.Playbar?.Button ||
        !Spicetify?.Player?.data?.item;
  
      )
        await new Promise((e) => setTimeout(e, 100));
      let e,
        t =
          (Spicetify.Player.addEventListener("songchange", () => {
            i(e);
          }),
          Spicetify.Player.addEventListener("onplaypause", a),
          Spicetify.Player.addEventListener("onprogress", (e) => {
            (e = e.data),
              s &&
                (s.querySelector(".bar").style.width =
                  (e / Spicetify.Player.data.item.duration.milliseconds) * 100 +
                  "%");
          }),
          new Spicetify.Playbar.Button(
            "Picture-In-Picture",
            v.pip,
            async function () {
              window.documentPictureInPicture.window
                ? (window.documentPictureInPicture.window.close(),
                  (s = null),
                  (t.active = !1))
                : ((e = await window.documentPictureInPicture.requestWindow({
                    width: 360,
                    height: 176,
                  })).addEventListener("pagehide", (e) => {
                    (t.active = !1), (s = null);
                  }),
                  (t.active = !0));
            },
            !document.pictureInPictureEnabled,
          ));
    }

    function i(e) {
      var t, i, a, l;
      s &&
        e &&
        ((t = (i = Spicetify.Player.data.item).duration.milliseconds),
        (i = (i.artists || []).map((e) => e.name).join(", ")),
        (a = Spicetify.Player.getProgress()),
        (s.body.innerHTML = `
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
              background: #212121;
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
              height: 56px;
              aspect-ratio: 1 / 1;
              border-radius: 4px;
              /* box-shadow: 1px 1px 2px #1e1e1eb8; */
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
              gap: 20px;
          }
          .song-text {
              display: flex;
              align-items: self-start;
              justify-content: center;
              flex-direction: column;
              height: 60px;
              width: -webkit-fill-available;
          }
          .controls {
              display: flex;
              justify-content: center;
              gap: 40px;
              /* padding: 8px 0 22px 0; */
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
              height: 4px;
              position: absolute;
              bottom: 2px;
              width: 100%;
              opacity: 0;
              transition: all 0.5s ease;
              background: #444444;
              border-radius: 9px;
              > .bar {
                  background: #878787;
                  height: 100%;
                  width: 0;
                  border-radius: 9px;
              }
          }
          .main-container:hover .progress {
              opacity: 1;
          }
          .controls .button {
              transform: scale(0.76);
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

          .mute-button.button, .mute-button svg, .spotify-window-button.button, .spotify-window-button.button svg {
              width: 24px;
              height: 24px;
          }
          .mute-button.button {
              position: absolute;
              left: 0;
              visibility: hidden;
              opacity: 0;
              transition: all 0.3s ease;
          }

          .spotify-window-button.button {
              position: absolute;
              right: 0;
              visibility: hidden;
              opacity: 0;
              transition: all 0.3s ease;
          }
          .main-container:hover .mute-button.button, .main-container:hover .spotify-window-button.button {
              visibility: visible;
              opacity: 1; 
          }
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
                      <img src="${((l = Spicetify.Player.data.item), l.images?.find((e) => "standard" === e.label)?.url?.replaceAll("spotify:image:", "https://i.scdn.co/image/"))}" alt="" class="album"/>
                  </div>
                  <div class="controls">
                      <div class="prev button">${v.prev}</div>
                      <div class="play button">${n ? v.pause : v.play}</div>
                      <div class="next button">${v.next}</div>
                      <div class="mute-button button">
                        <svg class="mute-icon" style="display: ${isMuted ? 'none' : 'block'};">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 4.25c0-1.079-1.274-1.65-2.08-.934L8.427 7.309a.75.75 0 0 1-.498.19H4.25A2.25 2.25 0 0 0 2 9.749v4.497a2.25 2.25 0 0 0 2.25 2.25h3.68a.75.75 0 0 1 .498.19l4.491 3.994c.806.716 2.081.144 2.081-.934V4.25ZM9.425 8.43 13.5 4.807v14.382l-4.075-3.624a2.25 2.25 0 0 0-1.495-.569H4.25a.75.75 0 0 1-.75-.75V9.75a.75.75 0 0 1 .75-.75h3.68a2.25 2.25 0 0 0 1.495-.569ZM18.992 5.897a.75.75 0 0 1 1.049.157A9.959 9.959 0 0 1 22 12a9.96 9.96 0 0 1-1.96 5.946.75.75 0 0 1-1.205-.892A8.459 8.459 0 0 0 20.5 12a8.459 8.459 0 0 0-1.665-5.054.75.75 0 0 1 .157-1.049Z" fill="#909090"/><path d="M17.143 8.37a.75.75 0 0 1 1.017.302c.536.99.84 2.125.84 3.328a6.973 6.973 0 0 1-.84 3.328.75.75 0 0 1-1.32-.714c.42-.777.66-1.666.66-2.614s-.24-1.837-.66-2.614a.75.75 0 0 1 .303-1.017Z" fill="#909090"/></svg>
                        </svg>
                        <svg class="unmute-icon" style="display: ${isMuted ? 'block' : 'none'};">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.92 3.316c.806-.717 2.08-.145 2.08.934v15.496c0 1.078-1.274 1.65-2.08.934l-4.492-3.994a.75.75 0 0 0-.498-.19H4.25A2.25 2.25 0 0 1 2 14.247V9.75a2.25 2.25 0 0 1 2.25-2.25h3.68a.75.75 0 0 0 .498-.19l4.491-3.993Zm.58 1.49L9.425 8.43A2.25 2.25 0 0 1 7.93 9H4.25a.75.75 0 0 0-.75.75v4.497c0 .415.336.75.75.75h3.68a2.25 2.25 0 0 1 1.495.57l4.075 3.623V4.807ZM16.22 9.22a.75.75 0 0 1 1.06 0L19 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L20.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L19 13.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L17.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06Z" fill="#909090"/></svg>
                        </svg>
                      </div>
                      <div class="spotify-window-button button">
                          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v.25h15v-.25a1.75 1.75 0 0 0-1.75-1.75H6.25ZM19.5 8h-15v9.75c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V8Z" fill="#909090"/></svg>
                      </div>
                  </div>
                  <!-- <div class="progress">
                      <div class="bar" style="width: ${(a / t) * 100}%"></div>
                  </div> -->
              </div>
          </div>
      </div>
      `),
        s.querySelector(".prev").addEventListener("click", Spicetify.Player.back),
        s.querySelector(".play").addEventListener("click", (e) => {
          Spicetify.Player.togglePlay();
        }),
        s.querySelector(".next").addEventListener("click", Spicetify.Player.next),
        s.querySelector(".mute-button").addEventListener("click", muteToggle),
        s.querySelector(".spotify-window-button").addEventListener("click", openSpotifyWindow),
        s.querySelector(".close").addEventListener("click", () => {
          e.close();
        }));
    }
    function muteToggle() {
        isMuted = !isMuted; // Toggle mute state
        const volume = isMuted ? 0 : 1; // Set volume based on mute state
        Spicetify.Player.setVolume(volume); // Set volume for Spotify
    
        // Update icon visibility
        const muteIcon = s.querySelector(".mute-icon");
        const unmuteIcon = s.querySelector(".unmute-icon");
        muteIcon.style.display = isMuted ? 'none' : 'block';
        unmuteIcon.style.display = isMuted ? 'block' : 'none';
    }
    function openSpotifyWindow() {
      // Open the Spotify web player in a new tab
      const spotifyWebURL = "https://open.spotify.com/";
      window.open(spotifyWebURL, "_blank");
    }
    function a() {
      var e;
      s &&
        ((e = s.querySelector(".play")),
        (n = !n),
        (e.innerHTML = n ? v.pause : v.play));
    }
    (n = Spicetify.Player.isPlaying()),
      (v = {
        pip: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#909090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-picture-in-picture-2"><path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"/><rect width="10" height="7" x="12" y="13" rx="2"/></svg>',
        leave_pip:
          '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="16px" fill="#555555"><path d="M160-160q-33 0-56.5-23.5T80-240v-280h80v280h640v-480H440v-80h360q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm523-140 57-57-124-123h104v-80H480v240h80v-103l123 123ZM80-600v-200h280v200H80Zm400 120Z"/></svg>',
        play: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 5.27368C5 3.56682 6.82609 2.48151 8.32538 3.2973L20.687 10.0235C22.2531 10.8756 22.2531 13.124 20.687 13.9762L8.32538 20.7024C6.82609 21.5181 5 20.4328 5 18.726V5.27368Z" fill="#ffffff"/></svg>',
        pause:
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M5.746 3a1.75 1.75 0 0 0-1.75 1.75v14.5c0 .966.784 1.75 1.75 1.75h3.5a1.75 1.75 0 0 0 1.75-1.75V4.75A1.75 1.75 0 0 0 9.246 3h-3.5ZM14.746 3a1.75 1.75 0 0 0-1.75 1.75v14.5c0 .966.784 1.75 1.75 1.75h3.5a1.75 1.75 0 0 0 1.75-1.75V4.75A1.75 1.75 0 0 0 18.246 3h-3.5Z" fill="#ffffff"/></svg>',
        next: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3.0001 4.753C3.0001 3.34519 4.57791 2.51363 5.73926 3.30937L16.2377 10.5028C17.2479 11.1949 17.2531 12.6839 16.2478 13.3831L5.7493 20.6847C4.58897 21.4917 3.0001 20.6613 3.0001 19.248V4.753ZM21 3.75C21 3.33579 20.6642 3 20.25 3C19.8358 3 19.5 3.33579 19.5 3.75V20.25C19.5 20.6642 19.8358 21 20.25 21C20.6642 21 21 20.6642 21 20.25V3.75Z" fill="#ffffff"/></svg>',
        prev: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 3.75C3 3.33579 3.33579 3 3.75 3C4.16421 3 4.5 3.33579 4.5 3.75V20.25C4.5 20.6642 4.16421 21 3.75 21C3.33579 21 3 20.6642 3 20.25V3.75ZM20.9999 4.753C20.9999 3.34519 19.4221 2.51363 18.2608 3.30937L7.76231 10.5028C6.75214 11.1949 6.74694 12.6839 7.75226 13.3831L18.2507 20.6847C19.4111 21.4917 20.9999 20.6613 20.9999 19.248V4.753Z" fill="#ffffff"/></svg>',
      }),
      window.documentPictureInPicture.addEventListener("enter", (e) => {
        (s = e.window.document), i(e.window);
      }),
      (async () => {
        await e();
      })();
  })();