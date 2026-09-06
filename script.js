const pages = document.querySelectorAll('.page');
const dotsWrap = document.getElementById('dots');
let current = 0;

// Membuat titik navigasi
pages.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    dotsWrap.appendChild(d);
});

const dots = document.querySelectorAll('.dot');

// Fungsi pindah halaman
function goTo(i) {
    if (i < 0 || i >= pages.length) return;

    pages[current].classList.remove('active');
    dots[current].classList.remove('active');

    current = i;

    pages[current].classList.add('active');
    dots[current].classList.add('active');

    document.getElementById('prevBtn').classList.toggle(
        'hidden',
        current === 0
    );

    document.getElementById('nextBtn').classList.toggle(
        'hidden',
        current === pages.length - 1
    );
}

// Tombol kembali disembunyikan di halaman pertama
document.getElementById('prevBtn').classList.add('hidden');


// ==============================
// BACKGROUND FLOATING BLOBS
// ==============================

const bg = document.getElementById('bgLayer');

const blobColors = [
    '#2c3e50',
    '#34495e',
    '#3d5a73',
    '#d4a24c'
];

for (let i = 0; i < 5; i++) {
    const b = document.createElement('div');

    b.className = 'blob';

    const size = 90 + Math.random() * 110;

    b.style.width = size + 'px';
    b.style.height = size + 'px';
    b.style.left = Math.random() * 90 + 'vw';
    b.style.top = Math.random() * 90 + 'vh';
    b.style.background = blobColors[i % blobColors.length];
    b.style.animationDuration = (6 + Math.random() * 4) + 's';
    b.style.animationDelay = (Math.random() * 3) + 's';

    bg.appendChild(b);
}


// ==============================
// BALLOON
// ==============================

const balloonColors = [
    '#3d5a73',
    '#4a6a80',
    '#d4a24c',
    '#5a6b7a'
];

for (let i = 0; i < 6; i++) {
    const bl = document.createElement('div');

    bl.className = 'balloon';

    bl.style.left = Math.random() * 90 + 'vw';
    bl.style.background = balloonColors[i % balloonColors.length];
    bl.style.animationDuration = (9 + Math.random() * 6) + 's';
    bl.style.animationDelay = Math.random() * 8 + 's';

    bg.appendChild(bl);
}


// ==============================
// CONFETTI
// ==============================

const confettiColors = [
    '#3d5a73',
    '#4a6a80',
    '#d4a24c',
    '#5a6b7a',
    '#8fa3b3'
];

function spawnConfetti() {
    const c = document.createElement('div');

    c.className = 'confetti';

    c.style.left = Math.random() * 100 + 'vw';
    c.style.background =
        confettiColors[Math.floor(Math.random() * confettiColors.length)];

    c.style.animationDuration = (4 + Math.random() * 3) + 's';

    bg.appendChild(c);

    setTimeout(() => c.remove(), 7000);
}

setInterval(spawnConfetti, 500);


// ==============================
// MUSIK
// ==============================

const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const overlay = document.getElementById('startOverlay');

document.getElementById('startBtn').addEventListener('click', () => {

    // Hilangkan halaman pembuka
    overlay.classList.add('hide');

    // Volume musik
    music.volume = 0.6;

    // Mulai musik setelah tombol ditekan
    music.play().catch(() => {
        musicBtn.textContent = '🔇';
    });

    // Hapus overlay setelah animasi selesai
    setTimeout(() => {
        overlay.remove();
    }, 700);
});


// ==============================
// TOMBOL MUSIK
// ==============================

function toggleMusic() {

    if (music.paused) {

        music.play().catch(() => {});
        musicBtn.textContent = '🔊';

    } else {

        music.pause();
        musicBtn.textContent = '🔇';

    }
}