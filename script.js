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
