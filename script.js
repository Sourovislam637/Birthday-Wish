// স্ক্রল করলে এলিমেন্টগুলো ভেসে উঠবে
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(section => {
    observer.observe(section);
});

// হার্ট রেইন অ্যানিমেশন
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['❤️', '💖', '💝', '✨'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.getElementById('heart-container').appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
