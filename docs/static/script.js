function openEnvelope() {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const envelope = document.getElementById('envelope');
    const container = document.getElementById('container');

    envelope.classList.add('opening');

    setTimeout(() => {
        envelopeWrapper.style.display = 'none';
        container.style.display = 'block';
        container.classList.add('fade-in');
        container.style.transform = 'scale(0.7)'; // smaller
    }, 800);
}

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    randomX = Math.max(20, Math.min(randomX, maxX));
    randomY = Math.max(80, Math.min(randomY, maxY));

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    const currentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (currentSize > 12) {
        noBtn.style.fontSize = (currentSize - 1) + 'px';
        noBtn.style.padding = '12px 30px';
    }
}

function showCelebration() {
    const container = document.getElementById('container');
    const celebration = document.getElementById('celebration');

    container.style.display = 'none';
    celebration.style.display = 'block';

    createHearts();
}

// Animated hearts in celebration
function createHearts() {
    const colors = ['#ff6b9d', '#c06c84', '#ff1493', '#ff69b4', '#ff85b3'];
    const heartsContainer = document.querySelector('.celebration-container .hearts');

    function createHeart() {
        const heart = document.createElement('div');
        heart.innerText = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = (Math.random() * 30 + 10) + 'px';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.bottom = '-50px';
        heart.style.opacity = Math.random();
        heart.style.pointerEvents = 'none';
        heartsContainer.appendChild(heart);

        const duration = Math.random() * 2 + 2; // faster

        const animation = heart.animate([
            { transform: 'translateY(0)', opacity: heart.style.opacity },
            { transform: `translateY(-${window.innerHeight + 50}px)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'linear'
        });

        animation.onfinish = () => heart.remove();
    }

    setInterval(createHeart, 200);
}
