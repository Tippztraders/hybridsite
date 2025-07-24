// Initialize Gallery Swiper
const gallerySwiper = new Swiper('.gallery-swiper', {
  loop: true,
  pagination: {
    el: '.gallery-swiper .swiper-pagination',
    clickable: true,
  },
  spaceBetween: 20,
  slidesPerView: 1,
});

// Video sources
const videoList = ['FGVIDS1.mp4']; // Add more if you want

// Insert videos into video swiper container
const videoContainer = document.getElementById('videos-container');
videoList.forEach(src => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `<video src="${src}" controls muted playsinline></video>`;
  videoContainer.appendChild(slide);
});

// Initialize Video Swiper
const videoSwiper = new Swiper('.video-swiper', {
  loop: true,
  pagination: {
    el: '.video-swiper .swiper-pagination',
    clickable: true,
  },
  spaceBetween: 20,
  slidesPerView: 1,
});

// Initialize Hero Swiper (if you add a hero slider later)
const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  pagination: {
    el: '.hero-swiper .swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
});

// Zoom on gallery image tap
document.querySelectorAll('.swiper-slide img').forEach(img => {
  img.addEventListener('click', () => {
    const fullView = document.getElementById('fullscreenGallery');
    const fullImage = document.getElementById('fullscreenImage');
    fullImage.src = img.src;
    fullView.style.display = 'flex';
  });
});

// Exit on tap
document.getElementById('fullscreenGallery').addEventListener('click', () => {
  document.getElementById('fullscreenGallery').style.display = 'none';
});


