const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters to use in the Matrix effect
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン亜阿愛挨暗案意医衣';
const fontSize = 20;
const columns = canvas.width / fontSize;

// Create an array of drops with random initial positions
const drops = Array.from({ length: Math.floor(columns) }, () => Math.floor(Math.random() * canvas.height / fontSize));

const drawMatrix = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0'; // Green text color
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, index) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = index * fontSize;
        ctx.fillText(text, x, y * fontSize);

        // Randomly reset the drop to create a more varied effect
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        } else {
            drops[index]++;
        }
    });
};

setInterval(drawMatrix, 33);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops.length = Math.floor(canvas.width / fontSize);
    drops.fill(1);
});
