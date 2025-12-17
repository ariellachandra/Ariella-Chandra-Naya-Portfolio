function scrollToSection() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    if (photo.classList.contains('center')) return;

    const center = document.querySelector('.photo.center');
    const left = document.querySelector('.photo.left');
    const right = document.querySelector('.photo.right');

    if (photo === left) {
      // kiri diklik → muter ke tengah
      left.className = 'photo center';
      center.className = 'photo right';
      right.className = 'photo left';
    } else if (photo === right) {
      // kanan diklik → muter ke tengah
      right.className = 'photo center';
      center.className = 'photo left';
      left.className = 'photo right';
    }
  });
});

// ROTATE FOTO EXPERIENCE
document.querySelectorAll('.experience-photos').forEach(container => {
  const photos = container.querySelectorAll('.e-photo');

  photos.forEach(photo => {
    photo.addEventListener('click', () => {
      const center = container.querySelector('.center');
      const left = container.querySelector('.left');
      const right = container.querySelector('.right');

      // rotasi posisi
      center.classList.remove('center');
      center.classList.add('left');

      left.classList.remove('left');
      left.classList.add('right');

      right.classList.remove('right');
      right.classList.add('center');
    });
  });
});
