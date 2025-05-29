document.addEventListener('DOMContentLoaded', function() {
  // Music toggle functionality
  const musicToggle = document.getElementById('music-toggle');
  const audio = document.getElementById('birthday-audio');
  let isPlaying = false;
  
  // Try to play music automatically (many browsers block this)
  const playPromise = audio.play();
  
  if (playPromise !== undefined) {
    playPromise
      .then(_ => {
        isPlaying = true;
        musicToggle.innerHTML = '<i class="fas fa-volume-up"></i> Pause Music';
      })
      .catch(error => {
        isPlaying = false;
        musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i> Play Music';
      });
  }
  
  musicToggle.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i> Play Music';
    } else {
      audio.play();
      musicToggle.innerHTML = '<i class="fas fa-volume-up"></i> Pause Music';
    }
    isPlaying = !isPlaying;
  });
  
  // Confetti button
  const confettiBtn = document.getElementById('confetti-btn');
  confettiBtn.addEventListener('click', () => {
    triggerConfetti();
  });
  
  // Auto confetti every 30 seconds
  setInterval(triggerConfetti, 30000);
  
  // Confetti on click anywhere
  document.addEventListener('click', function(e) {
    if (e.target.tagName !== 'BUTTON') {
      triggerConfetti();
    }
  });
  
  // Photo hover effects
  const photos = document.querySelectorAll('.photo-card img');
  photos.forEach(photo => {
    photo.addEventListener('mouseenter', () => {
      photo.style.transform = 'rotateY(15deg) scale(1.05)';
    });
    
    photo.addEventListener('mouseleave', () => {
      photo.style.transform = 'rotateY(0) scale(1)';
    });
  });
  
  // Wish cards animation
  const wishCards = document.querySelectorAll('.wish-card');
  wishCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
  
  // Typewriter effect for title
  const title = document.querySelector('.title');
  const originalText = title.textContent;
  title.textContent = '';
  
  let i = 0;
  const typeWriter = setInterval(() => {
    if (i < originalText.length) {
      title.textContent += originalText.charAt(i);
      i++;
    } else {
      clearInterval(typeWriter);
    }
  }, 100);
});

function triggerConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ffffff']
  });
  
  // Additional confetti effects
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#ff6b6b', '#ffe66d']
    });
  }, 250);
  
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#4ecdc4', '#ffe66d']
    });
  }, 400);
}