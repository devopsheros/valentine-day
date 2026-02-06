// Envelope opens and shows the question container
function openEnvelope() {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const envelope = document.getElementById('envelope');
    const container = document.getElementById('container');

    envelope.classList.add('opening');

    setTimeout(() => {
        envelopeWrapper.style.display = 'none';
        container.style.display = 'block';
        container.classList.add('fade-in');
        container.style.transform = 'scale(0.7)'; // smaller envelope container
    }, 800);
}

// Move "No" button within screen limits
function moveButton() {
    const noBtn = document.getElementById('noBtn');

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Maximum X and Y positions (keep button inside screen)
    const maxX = window.innerWidth - btnWidth - 20; // 20px margin from right
    const maxY = window.innerHeight - btnHeight - 20; // 20px margin from bottom

    // Random position within limits
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    // Ensure minimum distance from edges
    randomX = Math.max(20, randomX); // 20px margin from left
    randomY = Math.max(20, randomY); // 20px margin from top

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Optional: shrink button size each time
    const currentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (currentSize > 12) {
        noBtn.style.fontSize = (currentSize - 1) + 'px';
        noBtn.style.padding = '12px 30px';
    }
}

// Show celebration container and animated hearts
function showCelebration() {
    const container = document.getElementById('container');
    const celebration = document.getElementById('celebration');

    container.style.display = 'none';      // hide question
    celebration.style.display = 'block';   // show celebration
    createHearts();                        // start animated hearts
}

// Animated hearts rising up
function createHearts() {
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

        const duration = Math.random() * 2 + 2; // faster hearts

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
