// ১. টাইপিং অ্যানিমেশন
const text = "Happy Birthday, My Queen! 👸❤️";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// ২. স্ক্রল রিভিল ডিটেক্টর
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// ৩. রেইন হার্টস তৈরি করা
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = ['❤️', '💖', '💝', '🌸'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.opacity = Math.random();
    document.getElementById('heart-container').appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}

// উইন্ডো লোড হলে সব চালু হবে
window.onload = () => {
    typeWriter();
    setInterval(createHeart, 300);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};
