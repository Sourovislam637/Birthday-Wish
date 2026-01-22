function scrollToMemories() {
    document.getElementById('memories').scrollIntoView({ behavior: 'smooth' });
}

function scrollToMessage() {
    document.getElementById('message').scrollIntoView({ behavior: 'smooth' });
}

// ফ্লোটিং হার্ট তৈরির ফাংশন
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('heart-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// প্রতি ৫০০ মিলিসেকেন্ডে একটি হার্ট তৈরি হবে
setInterval(createHeart, 500);

// স্ক্রল করার সময় এনিমেশন ট্রিগার করা
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

// সব লুকানো এলিমেন্ট খুঁজে বের করে অবজারভার লাগানো
document.querySelectorAll('section, .photo-card, .letter').forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

// হার্ট এনিমেশন তো আগেই ছিল, ওটা থাকবে...

