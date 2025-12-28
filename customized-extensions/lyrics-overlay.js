// Original creator and the repository - https://github.com/FO-SS/Spictify-Lyric-Miniplayer

(async function LyricsOverlay() {
    while (!Spicetify?.Player?.data || !Spicetify?.Platform || !Spicetify?.CosmosAsync) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    const CONFIG = {
        pipWidth: 400,
        pipHeight: 500,
        updateInterval: 100,
        defaultFontSize: 20,
        maxFontSize: 36,
        minFontSize: 12,
    };

    let pipWindow = null;
    let currentLyrics = null;
    let currentTrackUri = null;
    let updateIntervalId = null;
    let fontSize = CONFIG.defaultFontSize;
    let showFontSlider = true;
    let showVolumeSlider = true;
    let showLyrics = true;

    // Load saved settings
    try {
        const savedSize = localStorage.getItem('lyrics-overlay-fontsize');
        if (savedSize) fontSize = parseInt(savedSize);
        const savedShowFont = localStorage.getItem('lyrics-overlay-showfont');
        if (savedShowFont !== null) showFontSlider = savedShowFont === 'true';
        const savedShowVol = localStorage.getItem('lyrics-overlay-showvol');
        if (savedShowVol !== null) showVolumeSlider = savedShowVol === 'true';
        const savedShowLyrics = localStorage.getItem('lyrics-overlay-showlyrics');
        if (savedShowLyrics !== null) showLyrics = savedShowLyrics === 'true';
    } catch (e) {}

    const PIP_STYLES = `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');
    `;

    async function fetchLyrics(trackUri) {
        try {
            const trackId = trackUri.split(':').pop();
            
            // Method 1: Color Lyrics API
            try {
                const response = await Spicetify.CosmosAsync.get(
                    `https://spclient.wg.spotify.com/color-lyrics/v2/track/${trackId}?format=json&market=from_token`
                );
                if (response?.lyrics?.lines) {
                    return {
                        synced: response.lyrics.syncType === 'LINE_SYNCED',
                        lines: response.lyrics.lines.map(line => ({
                            startTime: parseInt(line.startTimeMs),
                            text: line.words || ''
                        }))
                    };
                }
            } catch (e) {}

            if (Spicetify.Platform?.Lyrics) {
                try {
                    const lyrics = await Spicetify.Platform.Lyrics.getLyrics(trackUri);
                    if (lyrics?.lines) {
                        return {
                            synced: true,
                            lines: lyrics.lines.map(line => ({
                                startTime: line.startTimeMs || 0,
                                text: line.words || line.text || ''
                            }))
                        };
                    }
                } catch (e) {}
            }

            try {
                const altResponse = await Spicetify.CosmosAsync.get(
                    `wg://lyrics/v1/track/${trackId}?format=json&market=from_token`
                );
                if (altResponse?.lines) {
                    return {
                        synced: true,
                        lines: altResponse.lines.map(line => ({
                            startTime: parseInt(line.startTimeMs || line.time || 0),
                            text: line.words || line.text || ''
                        }))
                    };
                }
            } catch (e) {}

            return null;
        } catch (error) {
            console.error('[Lyric Miniplayer] Error fetching lyrics:', error);
            return null;
        }
    }

    async function openPictureInPicture() {
        if (pipWindow && !pipWindow.closed) {
            pipWindow.close();
            pipWindow = null;
            return;
        }

        if ('documentPictureInPicture' in window) {
            try {
                pipWindow = await window.documentPictureInPicture.requestWindow({
                    width: CONFIG.pipWidth,
                    height: CONFIG.pipHeight,
                });

                setupPipWindow(pipWindow);
                return;
            } catch (err) {
                console.log('[Lyric Miniplayer] Document PiP failed, trying fallback:', err);
            }
        }

        try {
            const left = window.screen.width - CONFIG.pipWidth - 30;
            const top = 30;

            pipWindow = window.open(
                'about:blank',
                'LyricsOverlayPiP',
                `width=${CONFIG.pipWidth},height=${CONFIG.pipHeight},left=${left},top=${top},resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,status=no`
            );

            if (pipWindow) {
                setupPipWindow(pipWindow);
            } else {
                Spicetify.showNotification('Could not open lyrics window.', true);
            }
        } catch (err) {
            console.error('[Lyric Miniplayer] Fallback popup failed:', err);
            Spicetify.showNotification('Could not open lyrics window', true);
        }
    }

    function getVolumeIconSvg(volume) {
        if (volume === 0) {
            return `<svg viewBox="0 0 16 16" class="volume-icon" id="volumeIcon">
                <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"/>
                <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"/>
            </svg>`;
        } else if (volume < 50) {
            return `<svg viewBox="0 0 16 16" class="volume-icon" id="volumeIcon">
                <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"/>
            </svg>`;
        } else {
            return `<svg viewBox="0 0 16 16" class="volume-icon" id="volumeIcon">
                <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"/>
            </svg>`;
        }
    }

    function setupPipWindow(win) {
        const doc = win.document;
        const currentVolume = Math.round((Spicetify.Player.getVolume() || 0) * 100);

        // Build the HTML
        doc.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>♫ Lyrics</title>
    <link rel="stylesheet" href="styles.css">
    <style>${PIP_STYLES}</style>
</head>
<body>
    <div class="header" id="dragHeader" title="Drag to move window">
        <img class="album-art" id="albumArt" src="" alt="">
        <div class="track-info">
            <div class="track-title" id="trackTitle">Loading...</div>
            <div class="track-artist" id="trackArtist">-</div>
        </div>
        <button class="menu-btn" id="menuBtn" title="Settings">
            <div class="menu-row">
                <div class="menu-dot"></div>
                <div class="menu-dot"></div>
            </div>
            <div class="menu-row">
                <div class="menu-dot"></div>
                <div class="menu-dot"></div>
            </div>
            <div class="menu-row">
                <div class="menu-dot"></div>
                <div class="menu-dot"></div>
            </div>
        </button>
    </div>

    <!-- Settings Menu -->
    <div class="settings-menu" id="settingsMenu">
        <div class="menu-item" id="toggleLyricsItem">
            <span class="menu-item-label">Show Lyrics</span>
            <div class="menu-toggle ${showLyrics ? 'on' : ''}" id="toggleLyrics"></div>
        </div>
        <div class="menu-divider"></div>
        <div class="menu-item" id="toggleFontItem">
            <span class="menu-item-label">Font Size</span>
            <div class="menu-toggle ${showFontSlider ? 'on' : ''}" id="toggleFont"></div>
        </div>
        <div class="menu-item" id="toggleVolItem">
            <span class="menu-item-label">Volume</span>
            <div class="menu-toggle ${showVolumeSlider ? 'on' : ''}" id="toggleVol"></div>
        </div>
    </div>
    
    <div class="controls">
        <button class="ctrl-btn" id="prevBtn" title="Previous">
            <svg viewBox="0 0 16 16"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"/></svg>
        </button>
        <button class="ctrl-btn play-btn" id="playBtn" title="Play/Pause">
            <svg viewBox="0 0 16 16" id="playIcon"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"/></svg>
        </button>
        <button class="ctrl-btn" id="nextBtn" title="Next">
            <svg viewBox="0 0 16 16"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"/></svg>
        </button>
    </div>
    
    <div class="lyrics-wrap ${showLyrics ? '' : 'collapsed'}" id="lyricsContainer">
        <div class="status-msg">
            <div class="spinner"></div>
        </div>
    </div>
    
    <div class="footer" id="footer">
        <div class="footer-row ${showFontSlider ? '' : 'collapsed'}" id="fontRow">
            <span class="control-label">Size</span>
            <input type="range" class="slider" id="fontSlider" min="${CONFIG.minFontSize}" max="${CONFIG.maxFontSize}" value="${fontSize}">
            <span class="value-display" id="fontValue">${fontSize}px</span>
        </div>
        <div class="footer-row ${showVolumeSlider ? '' : 'collapsed'}" id="volumeRow">
            <div id="volumeIconWrap">
                ${getVolumeIconSvg(currentVolume)}
            </div>
            <input type="range" class="slider" id="volumeSlider" min="0" max="100" value="${currentVolume}">
            <span class="value-display" id="volumePercent">${currentVolume}%</span>
        </div>
    </div>
</body>
</html>`);
        doc.close();

        const menuBtn = doc.getElementById('menuBtn');
        const settingsMenu = doc.getElementById('settingsMenu');
        const prevBtn = doc.getElementById('prevBtn');
        const playBtn = doc.getElementById('playBtn');
        const nextBtn = doc.getElementById('nextBtn');
        const fontSlider = doc.getElementById('fontSlider');
        const fontValue = doc.getElementById('fontValue');
        const fontRow = doc.getElementById('fontRow');
        const volumeRow = doc.getElementById('volumeRow');
        const volumeSlider = doc.getElementById('volumeSlider');
        const volumePercent = doc.getElementById('volumePercent');
        const volumeIconWrap = doc.getElementById('volumeIconWrap');
        const lyricsContainer = doc.getElementById('lyricsContainer');
        const toggleLyricsItem = doc.getElementById('toggleLyricsItem');
        const toggleLyrics = doc.getElementById('toggleLyrics');
        const toggleFontItem = doc.getElementById('toggleFontItem');
        const toggleFont = doc.getElementById('toggleFont');
        const toggleVolItem = doc.getElementById('toggleVolItem');
        const toggleVol = doc.getElementById('toggleVol');

        // Menu toggle
        menuBtn.onclick = (e) => {
            e.stopPropagation();
            settingsMenu.classList.toggle('open');
        };

        // Close menu when clicking outside
        doc.body.onclick = () => {
            settingsMenu.classList.remove('open');
        };

        settingsMenu.onclick = (e) => {
            e.stopPropagation();
        };

        // Toggle handlers
        toggleLyricsItem.onclick = () => {
            showLyrics = !showLyrics;
            toggleLyrics.classList.toggle('on', showLyrics);
            lyricsContainer.classList.toggle('collapsed', !showLyrics);
            localStorage.setItem('lyrics-overlay-showlyrics', showLyrics);
        };

        toggleFontItem.onclick = () => {
            showFontSlider = !showFontSlider;
            toggleFont.classList.toggle('on', showFontSlider);
            fontRow.classList.toggle('collapsed', !showFontSlider);
            localStorage.setItem('lyrics-overlay-showfont', showFontSlider);
        };

        toggleVolItem.onclick = () => {
            showVolumeSlider = !showVolumeSlider;
            toggleVol.classList.toggle('on', showVolumeSlider);
            volumeRow.classList.toggle('collapsed', !showVolumeSlider);
            localStorage.setItem('lyrics-overlay-showvol', showVolumeSlider);
        };

        prevBtn.onclick = () => Spicetify.Player.back();
        playBtn.onclick = () => Spicetify.Player.togglePlay();
        nextBtn.onclick = () => Spicetify.Player.next();

        fontSlider.oninput = (e) => {
            fontSize = parseInt(e.target.value);
            fontValue.textContent = `${fontSize}px`;
            localStorage.setItem('lyrics-overlay-fontsize', fontSize);
            updatePipFontSize();
        };

        volumeSlider.oninput = (e) => {
            const vol = parseInt(e.target.value);
            Spicetify.Player.setVolume(vol / 100);
            volumePercent.textContent = `${vol}%`;
            volumeIconWrap.innerHTML = getVolumeIconSvg(vol);
        };

        volumeIconWrap.onclick = () => {
            const currentVol = Math.round((Spicetify.Player.getVolume() || 0) * 100);
            if (currentVol > 0) {
                volumeSlider.dataset.prevVolume = currentVol;
                Spicetify.Player.setVolume(0);
                volumeSlider.value = 0;
                volumePercent.textContent = '0%';
                volumeIconWrap.innerHTML = getVolumeIconSvg(0);
            } else {
                const prevVol = parseInt(volumeSlider.dataset.prevVolume) || 50;
                Spicetify.Player.setVolume(prevVol / 100);
                volumeSlider.value = prevVol;
                volumePercent.textContent = `${prevVol}%`;
                volumeIconWrap.innerHTML = getVolumeIconSvg(prevVol);
            }
        };

        lyricsContainer.onclick = (e) => {
            if (e.target.classList.contains('lyric')) {
                const time = e.target.dataset.time;
                if (time) Spicetify.Player.seek(parseInt(time));
            }
        };

        win.addEventListener('pagehide', () => {
            pipWindow = null;
        });

        updatePipContent();
        startUpdateLoop();
    }

    function updatePipContent() {
        if (!pipWindow || pipWindow.closed) return;

        const doc = pipWindow.document;
        const data = Spicetify.Player.data;
        
        if (!data?.item) return;

        const track = data.item;

        const titleEl = doc.getElementById('trackTitle');
        const artistEl = doc.getElementById('trackArtist');
        const albumArtEl = doc.getElementById('albumArt');

        if (titleEl) titleEl.textContent = track.name || 'Unknown';
        if (artistEl) artistEl.textContent = track.artists?.map(a => a.name).join(', ') || 'Unknown';
        if (albumArtEl) {
            const imgUrl = track.album?.images?.[0]?.url || track.metadata?.image_url || '';
            albumArtEl.src = imgUrl;
        }

        updatePipPlayButton();

        updatePipVolume();

        if (track.uri !== currentTrackUri) {
            currentTrackUri = track.uri;
            loadLyrics(track.uri);
        }
    }

    function updatePipPlayButton() {
        if (!pipWindow || pipWindow.closed) return;

        const playIcon = pipWindow.document.getElementById('playIcon');
        if (!playIcon) return;

        const isPlaying = Spicetify.Player.isPlaying();
        playIcon.innerHTML = isPlaying
            ? '<path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"/>'
            : '<path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"/>';
    }

    function updatePipVolume() {
        if (!pipWindow || pipWindow.closed) return;

        const doc = pipWindow.document;
        const volumeSlider = doc.getElementById('volumeSlider');
        const volumePercent = doc.getElementById('volumePercent');
        const volumeIconWrap = doc.getElementById('volumeIconWrap');
        
        if (!volumeSlider || !volumePercent || !volumeIconWrap) return;

        if (doc.activeElement !== volumeSlider) {
            const vol = Math.round((Spicetify.Player.getVolume() || 0) * 100);
            volumeSlider.value = vol;
            volumePercent.textContent = `${vol}%`;
            volumeIconWrap.innerHTML = getVolumeIconSvg(vol);
        }
    }

    async function loadLyrics(uri) {
        if (!pipWindow || pipWindow.closed) return;

        const container = pipWindow.document.getElementById('lyricsContainer');
        if (!container) return;

        container.innerHTML = '<div class="status-msg"><div class="spinner"></div></div>';

        currentLyrics = await fetchLyrics(uri);

        if (!currentLyrics || !currentLyrics.lines?.length) {
            container.innerHTML = `
                <div class="status-msg">
                    <div class="icon">🎵</div>
                    <div class="text">No lyrics available</div>
                    <div class="subtext">Lyrics not found for this track</div>
                </div>
            `;
            return;
        }

        const lyricsHtml = currentLyrics.lines
            .filter(line => line.text && line.text.trim())
            .map((line, idx) => 
                `<div class="lyric" data-time="${line.startTime}" data-idx="${idx}" style="font-size:${fontSize}px">${escapeHtml(line.text)}</div>`
            ).join('');

        container.innerHTML = lyricsHtml || `
            <div class="status-msg">
                <div class="icon">🎶</div>
                <div class="text">Instrumental</div>
            </div>
        `;
    }

    function updateCurrentLyric() {
        if (!pipWindow || pipWindow.closed || !currentLyrics?.synced) return;

        const doc = pipWindow.document;
        const currentTime = Spicetify.Player.getProgress();
        
        let activeIdx = -1;
        const filteredLines = currentLyrics.lines.filter(l => l.text && l.text.trim());
        
        for (let i = filteredLines.length - 1; i >= 0; i--) {
            if (currentTime >= filteredLines[i].startTime) {
                activeIdx = i;
                break;
            }
        }

        const lyrics = doc.querySelectorAll('.lyric');
        lyrics.forEach((el, idx) => {
            el.classList.remove('active', 'past');
            
            if (idx === activeIdx) {
                el.classList.add('active');
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else if (idx < activeIdx) {
                el.classList.add('past');
            }
        });
    }

    function updatePipFontSize() {
        if (!pipWindow || pipWindow.closed) return;

        const lyrics = pipWindow.document.querySelectorAll('.lyric');
        lyrics.forEach(el => {
            el.style.fontSize = `${fontSize}px`;
        });
    }

    function startUpdateLoop() {
        if (updateIntervalId) clearInterval(updateIntervalId);
        
        updateIntervalId = setInterval(() => {
            if (!pipWindow || pipWindow.closed) {
                clearInterval(updateIntervalId);
                updateIntervalId = null;
                return;
            }
            
            updateCurrentLyric();
            updatePipPlayButton();
        }, CONFIG.updateInterval);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function createButton() {
        if (Spicetify.Topbar?.Button) {
            new Spicetify.Topbar.Button(
                'Lyric Miniplayer',
                `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    <path d="M19 3h-2v2h2v2h2V5h-2V3z" opacity="0.6"/>
                </svg>`,
                openPictureInPicture,
                false
            );
        }

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'l') {
                e.preventDefault();
                openPictureInPicture();
            }
        });
    }

    Spicetify.Player.addEventListener('songchange', () => {
        updatePipContent();
    });

    Spicetify.Player.addEventListener('onplaypause', () => {
        updatePipPlayButton();
    });

    createButton();
    
    console.log('[Lyric Miniplayer] Ready! Click the button or press Ctrl+Shift+L');
    Spicetify.showNotification('🎵 Lyric Miniplayer: Press Ctrl+Shift+L or click the button!');

})();
