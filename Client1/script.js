let wrongAttempts = 0;
let magicWordInput;

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    magicWordInput = document.getElementById('magicWordInput');

    magicWordInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') checkMagicWord();
    });

    initPageContent();
});

function initPageContent() {
    const c = appConfig;

    // Browser tab title
    document.title = c.siteTitle || 'Client Showcase';

    // ---- Page 1 ----
    document.getElementById('page1Title').textContent        = c.page1.title;
    document.getElementById('page1Description').textContent = c.page1.description;
    document.getElementById('page1Button').textContent       = c.page1.buttonText;
    magicWordInput.placeholder                               = c.page1.placeholder;

    // ---- Wrong code modal ----
    document.getElementById('wrongTitle').textContent    = c.wrongCodeModal.title;
    document.getElementById('wrongModalBtn').textContent = c.wrongCodeModal.buttonText;

    // ---- Welcome modal ----
    document.getElementById('welcomeTitle').textContent       = c.welcomeModal.title;
    document.getElementById('welcomeDescription').textContent = c.welcomeModal.description;
    document.getElementById('welcomeButton').textContent      = c.welcomeModal.buttonText;

    // ---- Tic Tac Toe page ----
    document.getElementById('ticTacToeTitle').textContent          = c.ticTacToe.title;
    document.getElementById('ticTacToeSubtitle').textContent       = c.ticTacToe.subtitle;
    document.getElementById('ticTacToeRestartButton').textContent  = c.ticTacToe.restartText;

    // ---- Win modal ----
    document.getElementById('winModalTitle').textContent   = c.ticTacToe.winModal.title;
    document.getElementById('winModalMessage').textContent = c.ticTacToe.winModal.message;
    document.getElementById('winModalButton').textContent  = c.ticTacToe.winModal.buttonText;

    // ---- Lose modal ----
    document.getElementById('loseModalTitle').textContent   = c.ticTacToe.loseModal.title;
    document.getElementById('loseModalMessage').textContent = c.ticTacToe.loseModal.message;
    document.getElementById('loseModalButton').textContent  = c.ticTacToe.loseModal.buttonText;

    // ---- Main header ----
    document.getElementById('mainHeaderTitle').textContent    = c.mainHeader.title;
    document.getElementById('mainHeaderSubtitle').textContent = c.mainHeader.subtitle;

    // ---- Footer ----
    document.getElementById('footerText').textContent = c.footer;

    // ---- Nav buttons (dynamic) ----
    buildNavButtons();

    // ---- Section titles ----
    document.getElementById('loveSectionTitle').textContent    = c.highlights.sectionTitle;
    document.getElementById('showMessageBtn').textContent      = c.highlights.buttonText;
    document.getElementById('musicSectionTitle').textContent   = c.music.sectionTitle;
    document.getElementById('gallerySectionTitle').textContent = c.gallery.sectionTitle;
    document.getElementById('notesSectionTitle').textContent   = c.notes.sectionTitle;

    // ---- Background music source ----
    document.getElementById('backgroundMusicSrc').src = c.music.backgroundTrack;

    // ---- Build dynamic content ----
    buildNavButtons();
    buildMusicPlayers();
    buildGalleryItems();
    buildNotesList();
    loadGalleryCaptions();
}

// ============================================================
// NAV BUTTONS  (built from config.nav)
// ============================================================
function buildNavButtons() {
    const container = document.getElementById('navButtons');
    container.innerHTML = '';

    appConfig.nav.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className    = 'nav-btn' + (index === 0 ? ' active' : '');
        btn.id           = 'navBtn_' + item.id;
        btn.textContent  = item.label;
        btn.addEventListener('click', (e) => showSection(item.id, e));
        container.appendChild(btn);
    });

    // Show first section by default
    if (appConfig.nav.length > 0) {
        const firstSection = document.getElementById(appConfig.nav[0].id);
        if (firstSection) firstSection.classList.add('active');
    }
}

// ============================================================
// MUSIC PLAYERS  (built from config.music.tracks)
// ============================================================
function buildMusicPlayers() {
    const list = document.getElementById('musicPlayersList');
    list.innerHTML = '';

    appConfig.music.tracks.forEach((track) => {
        const player = document.createElement('div');
        player.className        = 'music-player';
        player.dataset.song     = track.src;

        player.innerHTML = `
            <button class="play-btn" onclick="toggleMusic(this)">&#9654;</button>
            <div class="music-info">
                <div class="music-title">${track.title}</div>
                <div class="progress-container">
                    <div class="progress-bar"></div>
                </div>
            </div>
        `;

        list.appendChild(player);
    });
}

// ============================================================
// GALLERY  (built from config.gallery.items)
// ============================================================
function buildGalleryItems() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    if (!appConfig.gallery || !appConfig.gallery.items) return;

    appConfig.gallery.items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className  = 'gallery-item';
        galleryItem.dataset.id = item.id;
        galleryItem.addEventListener('click', () => openImageModal(item.src, item.caption));

        const imageContainer = document.createElement('div');
        imageContainer.className = 'gallery-item-image-container';

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        imageContainer.appendChild(img);

        const caption = document.createElement('div');
        caption.className   = 'gallery-caption';
        caption.textContent = item.caption;
        caption.addEventListener('click', function (e) {
            e.stopPropagation();
            editGalleryCaption(this);
        });

        galleryItem.appendChild(imageContainer);
        galleryItem.appendChild(caption);
        galleryGrid.appendChild(galleryItem);
    });
}

// ============================================================
// NOTES  (built from config.notes.items)
// ============================================================
function buildNotesList() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    if (!appConfig.notes || !appConfig.notes.items) return;

    const icon = appConfig.notes.icon || '💡';

    appConfig.notes.items.forEach(note => {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';

        const noteHeart = document.createElement('div');
        noteHeart.className   = 'note-heart';
        noteHeart.textContent = icon;

        const noteText = document.createElement('div');
        noteText.className   = 'note-text';
        noteText.textContent = note;

        noteItem.appendChild(noteHeart);
        noteItem.appendChild(noteText);
        notesList.appendChild(noteItem);
    });
}

// ============================================================
// ACCESS CODE CHECK
// ============================================================
function checkMagicWord() {
    const inputValue  = magicWordInput.value.trim();
    const expected    = appConfig.page1.accessCode.toLowerCase();
    const inputLower  = inputValue.toLowerCase();

    if (inputValue === '') {
        showWrongModal();
        return;
    }

    if (inputLower === expected) {
        document.getElementById('welcomeModal').style.display = 'flex';
        magicWordInput.value = '';
        wrongAttempts = 0;
    } else {
        showWrongModal();
    }
}

function showWrongModal() {
    const clues      = appConfig.wrongCodeModal.clues || [];
    const clueIndex  = Math.min(wrongAttempts, clues.length - 1);

    document.getElementById('wrongTitle').textContent = appConfig.wrongCodeModal.title;
    document.getElementById('wrongClue').textContent  = clues[clueIndex] || 'Please try again.';
    document.getElementById('wrongModal').style.display = 'flex';

    wrongAttempts++;
    magicWordInput.value = '';
}

function closeModal() {
    document.getElementById('wrongModal').style.display = 'none';
}

// ============================================================
// FLOW: WELCOME → TIC TAC TOE → MAIN PAGE
// ============================================================
function startTicTacToe() {
    document.getElementById('welcomeModal').style.display  = 'none';
    document.getElementById('page1').style.display         = 'none';
    document.getElementById('ticTacToePage').style.display = 'flex';
    initTicTacToe();
}

function continueToMainPage() {
    document.getElementById('winModal').style.display       = 'none';
    document.getElementById('ticTacToePage').style.display  = 'none';
    document.getElementById('page2').style.display          = 'block';

    backgroundMusic.currentTime = backgroundMusicPosition;
    backgroundMusic.play().catch(e => console.log('Autoplay prevented:', e));

    createFloatingImages();
}

function restartTicTacToe() {
    document.getElementById('loseModal').style.display = 'none';
    restartGame();
}

// ============================================================
// SECTION NAVIGATION
// ============================================================
function showSection(sectionId, event) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.add('active');

    const clickedButton = event.currentTarget || event.target;
    if (clickedButton) clickedButton.classList.add('active');

    setTimeout(() => {
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset - 20;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }, 100);
}

// ============================================================
// HIGHLIGHTS MESSAGE
// ============================================================
function showLoveMessage() {
    const message = document.getElementById('loveMessage');
    message.innerHTML = `<p>${appConfig.highlights.message}</p>`;
    message.style.display = 'block';
    message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================================
// MUSIC PLAYER
// ============================================================
const backgroundMusic         = document.getElementById('backgroundMusic');
let backgroundMusicPosition   = 0;
let currentSongAudio          = null;
let currentPlayButton         = null;

backgroundMusic.addEventListener('pause', function () {
    backgroundMusicPosition = this.currentTime;
});

function toggleMusic(button) {
    const player    = button.closest('.music-player');
    const songPath  = player.dataset.song;

    const isCurrentSong = currentSongAudio &&
        currentSongAudio.src === new URL(songPath, location.href).href;

    if (currentSongAudio && !isCurrentSong) {
        pauseCurrentSong();
        createNewAudioElement(songPath, button);
        return;
    }

    if (!currentSongAudio) {
        createNewAudioElement(songPath, button);
        return;
    }

    if (currentSongAudio.paused) {
        playCurrentSong(button);
    } else {
        pauseCurrentSong();
    }
}

function createNewAudioElement(songPath, button) {
    backgroundMusicPosition = backgroundMusic.currentTime;
    backgroundMusic.pause();

    currentSongAudio  = new Audio(songPath);
    currentPlayButton = button;

    const player      = button.closest('.music-player');
    const progressBar = player.querySelector('.progress-bar');

    currentSongAudio.addEventListener('timeupdate', function () {
        if (currentSongAudio.duration) {
            progressBar.style.width =
                (this.currentTime / this.duration * 100) + '%';
        }
    });

    currentSongAudio.addEventListener('ended', function () {
        button.textContent = '▶';
        button.classList.remove('playing');
        progressBar.style.width = '0%';
        currentSongAudio  = null;
        currentPlayButton = null;
        resumeBackgroundMusic();
    });

    currentSongAudio.play().catch(e => console.log('Play failed:', e));
    button.textContent = '⏸';
    button.classList.add('playing');
}

function playCurrentSong(button) {
    backgroundMusicPosition = backgroundMusic.currentTime;
    backgroundMusic.pause();
    currentSongAudio.play().catch(e => console.log('Play failed:', e));
    button.textContent = '⏸';
    button.classList.add('playing');
}

function pauseCurrentSong() {
    if (currentPlayButton) {
        currentPlayButton.textContent = '▶';
        currentPlayButton.classList.remove('playing');
    }
    if (currentSongAudio) currentSongAudio.pause();
    resumeBackgroundMusic();
}

function resumeBackgroundMusic() {
    backgroundMusic.currentTime = backgroundMusicPosition;
    backgroundMusic.play().catch(e => console.log('BG music resume failed'));
}

// ============================================================
// GALLERY IMAGE MODAL
// ============================================================
function openImageModal(imageSrc, caption) {
    document.getElementById('imageModal').style.display    = 'flex';
    document.getElementById('modalImage').src             = imageSrc;
    document.getElementById('modalCaption').textContent   = caption;
}

function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// ============================================================
// GALLERY CAPTION EDITING
// ============================================================
function editGalleryCaption(captionElement) {
    const currentText = captionElement.textContent;
    const input       = document.createElement('input');
    input.type        = 'text';
    input.value       = currentText;
    input.className   = 'gallery-text-input';

    captionElement.textContent = '';
    captionElement.appendChild(input);
    captionElement.classList.add('editable');
    input.focus();
    input.select();

    function saveCaption() {
        const newText = input.value.trim() || currentText;
        captionElement.textContent = newText;
        captionElement.classList.remove('editable');
        const galleryId = captionElement.closest('.gallery-item').dataset.id;
        localStorage.setItem(`gallery_caption_${galleryId}`, newText);
    }

    input.addEventListener('blur', saveCaption);
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') saveCaption();
    });
}

function loadGalleryCaptions() {
    document.querySelectorAll('.gallery-item').forEach(item => {
        const galleryId     = item.dataset.id;
        const savedCaption  = localStorage.getItem(`gallery_caption_${galleryId}`);
        const captionEl     = item.querySelector('.gallery-caption');
        if (savedCaption && captionEl) captionEl.textContent = savedCaption;
    });
}

// ============================================================
// FLOATING IMAGES
// ============================================================
function createFloatingImages() {
    const container      = document.getElementById('floatingImages');
    container.innerHTML  = '';
    container.style.zIndex = '100';

    const floatingImages = appConfig.floatingImages || [];

    for (let i = 0; i < 8; i++) {
        const img         = document.createElement('img');
        img.className     = 'floating-img';
        img.src           = floatingImages.length
            ? floatingImages[i % floatingImages.length]
            : 'images/photo1.jpg';
        img.alt           = 'Floating image ' + (i + 1);
        img.style.left    = Math.random() * 90 + '%';
        img.style.top     = Math.random() * 90 + '%';
        img.style.animationDelay    = Math.random() * 5 + 's';
        img.style.animationDuration = (Math.random() * 4 + 6) + 's';

        let startX, startY;

        img.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            startY = e.clientY;
        });

        img.addEventListener('mouseup', (e) => {
            const dist = Math.sqrt(
                Math.pow(e.clientX - startX, 2) + Math.pow(e.clientY - startY, 2)
            );
            if (dist > 50) {
                img.classList.add('swiped');
                setTimeout(() => img.remove(), 600);
            }
        });

        img.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        img.addEventListener('touchend', (e) => {
            const dist = Math.sqrt(
                Math.pow(e.changedTouches[0].clientX - startX, 2) +
                Math.pow(e.changedTouches[0].clientY - startY, 2)
            );
            if (dist > 50) {
                img.classList.add('swiped');
                setTimeout(() => img.remove(), 600);
            }
        });

        container.appendChild(img);
    }
}

// ============================================================
// TIC TAC TOE
// ============================================================
let boxEls, statusEl, restartBtnEl;
let options  = ['', '', '', '', '', '', '', '', ''];
let running  = false;

// Player tokens — pulled from config
let playerXName  = '';
let playerOName  = '';
let playerXToken = '';
let playerOToken = '';
let currentToken = '';
let currentPlayerName = '';

const WIN_COMBOS = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function initTicTacToe() {
    // Read player names + images from config
    playerXName  = appConfig.ticTacToe.playerX.name;
    playerOName  = appConfig.ticTacToe.playerO.name;
    playerXToken = `<img src="${appConfig.ticTacToe.playerX.imageUrl}" alt="${playerXName}">`;
    playerOToken = `<img src="${appConfig.ticTacToe.playerO.imageUrl}" alt="${playerOName}">`;

    currentToken       = playerXToken;
    currentPlayerName  = playerXName;

    boxEls       = document.querySelectorAll('.box');
    statusEl     = document.querySelector('.status');
    restartBtnEl = document.querySelector('.restartBtn');

    options  = ['', '', '', '', '', '', '', '', ''];
    running  = true;

    boxEls.forEach(box => {
        box.innerHTML = '';
        box.classList.remove('win');
        box.addEventListener('click', boxClick);
    });

    restartBtnEl.addEventListener('click', restartGame);
    statusEl.textContent  = `Turn: ${currentPlayerName}`;
    statusEl.style.color  = '#FF1493';
}

function boxClick(e) {
    let box = e.target;
    if (box.tagName === 'IMG') box = box.parentElement;

    const index = box.dataset.index;

    if (options[index] !== '' || !running || currentPlayerName !== playerXName) return;

    placeToken(box, index, playerXName, playerXToken);
    checkWinner();

    if (running) setTimeout(aiMove, 300);
}

function placeToken(box, index, name, token) {
    options[index] = name;
    box.innerHTML  = token;
}

function changePlayer() {
    if (currentPlayerName === playerXName) {
        currentPlayerName = playerOName;
        currentToken      = playerOToken;
    } else {
        currentPlayerName = playerXName;
        currentToken      = playerXToken;
    }
    statusEl.textContent = `Turn: ${currentPlayerName}`;
    statusEl.style.color = '#FF1493';
}

function restartGame() {
    options           = ['', '', '', '', '', '', '', '', ''];
    currentPlayerName = playerXName;
    currentToken      = playerXToken;
    running           = true;

    statusEl.textContent  = `Turn: ${currentPlayerName}`;
    statusEl.style.color  = '#FF1493';
    restartBtnEl.textContent = appConfig.ticTacToe.restartText;

    boxEls.forEach(box => {
        box.innerHTML = '';
        box.classList.remove('win');
    });
}

function aiMove() {
    if (!running || currentPlayerName !== playerOName) return;

    const smart = Math.random() < 0.5;
    let moveIndex;

    if (smart) {
        moveIndex = findWinningMove(playerOName);
        if (moveIndex === null) moveIndex = findWinningMove(playerXName);
        if (moveIndex === null) moveIndex = randomMove();
    } else {
        moveIndex = randomMove();
    }

    options[moveIndex]          = playerOName;
    boxEls[moveIndex].innerHTML = playerOToken;

    checkWinner();
}

function randomMove() {
    const empty = options.map((v, i) => v === '' ? i : null).filter(v => v !== null);
    return empty[Math.floor(Math.random() * empty.length)];
}

function findWinningMove(name) {
    for (const [a, b, c] of WIN_COMBOS) {
        const vals      = [options[a], options[b], options[c]];
        const count     = vals.filter(v => v === name).length;
        const emptySpot = vals.indexOf('');
        if (count === 2 && emptySpot !== -1) return [a, b, c][emptySpot];
    }
    return null;
}

function checkWinner() {
    for (const [a, b, c] of WIN_COMBOS) {
        if (options[a] === '' || options[b] === '' || options[c] === '') continue;
        if (options[a] === options[b] && options[b] === options[c]) {
            running = false;
            boxEls[a].classList.add('win');
            boxEls[b].classList.add('win');
            boxEls[c].classList.add('win');

            const winner = options[a];
            if (winner === playerXName) {
                statusEl.textContent = `${playerXName} wins! 💖`;
                statusEl.style.color = 'green';
                setTimeout(() => {
                    document.getElementById('winModal').style.display = 'flex';
                }, 1000);
            } else {
                statusEl.textContent = `${playerOName} wins 😢`;
                statusEl.style.color = 'red';
                setTimeout(() => {
                    document.getElementById('loseModal').style.display = 'flex';
                }, 1000);
            }
            return;
        }
    }

    if (!options.includes('')) {
        running = false;
        statusEl.textContent = 'Draw 💕';
        statusEl.style.color = '#FF69B4';
        setTimeout(() => {
            document.getElementById('loseModal').style.display = 'flex';
        }, 1000);
        return;
    }

    changePlayer();
}