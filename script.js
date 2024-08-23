const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Include alphanumeric characters, Katakana, and Kanji
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン亜阿愛挨暗案意医衣育院飲運泳英営円園遠央奥音';
const letters = Array(256).join('1').split('');

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = '20px monospace';

    letters.forEach((y, index) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = index * 20;
        ctx.fillText(text, x, y);
        letters[index] = y > canvas.height + Math.random() * 1e4 ? 0 : y + 20;
    });
};

setInterval(draw, 33);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
