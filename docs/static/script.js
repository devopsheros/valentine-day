function openEnvelope() {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const envelope = document.getElementById('envelope');
    const container = document.getElementById('container');
    
    envelope.classList.add('opening');
    
    setTimeout(() => {
        envelopeWrapper.style.display = 'none';
        container.style.display = 'block';
        container.classList.add('fade-in');

        // Shrink container after opening envelope
        container.style.transform = 'scale(0.8)';
    }, 800);
}

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const maxX = containerWidth - btnWidth - 30;
    const maxY = containerHeight - btnHeight - 30;
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;
    randomX = Math.max(20, randomX);
    randomY = Math.max(80, randomY);
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '1000';
    const currentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (currentSize > 12) {
        noBtn.style.fontSize = (currentSize - 1) + 'px';
        noBtn.style.padding = '10px 25px';
    }
}

function sayYes() {
    const container = document.querySelector('.container');
    container.style.transform = 'scale(1.1)';
    createConfetti();
    setTimeout(() => { window.location.href = '/yes'; }, 1000);
}

function createConfetti() {
    const colors = ['#ff6b9d', '#c06c84', '#667eea', '#764ba2', '#ffd700'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);
        const duration = Math.random() * 3 + 2;
        const fallDistance = window.innerHeight + 10;
        confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${fallDistance}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], { duration: duration * 1000, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' });
        setTimeout(() => { confetti.remove(); }, duration * 1000);
    }
}
