function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  document.body.appendChild(heart);

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';

  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

setInterval(createHeart, 300);
