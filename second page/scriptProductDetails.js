document.querySelectorAll('.thumb-img').forEach(thumbnail => {
  thumbnail.addEventListener('click', function () {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = this.src;
  });
});

const mainImage = document.getElementById('mainImage');
const container = document.querySelector('.main-image-container');

mainImage.addEventListener('mousemove', function (e) {
  const rect = container.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  mainImage.style.transformOrigin = `${x}% ${y}%`;
  mainImage.classList.add('zoomed');
});

mainImage.addEventListener('mouseleave', function () {
  mainImage.classList.remove('zoomed');
  mainImage.style.transformOrigin = 'center';
});