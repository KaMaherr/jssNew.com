const slides = document.querySelector('.slides');
const slideArray = [...document.querySelectorAll('.slide')];
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
const dots = [...document.querySelectorAll('.dot')];
let currentIndex = 0;

function updateSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideArray.length;
  updateSlide(currentIndex);
}

let timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds

prevArrow.addEventListener('click', () => {
  clearInterval(timer);
  currentIndex = (currentIndex - 1 + slideArray.length) % slideArray.length;
  updateSlide(currentIndex);
  timer = setInterval(nextSlide, 5000);
});

nextArrow.addEventListener('click', () => {
  clearInterval(timer);
  nextSlide();
  timer = setInterval(nextSlide, 5000);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(timer);
    currentIndex = i;
    updateSlide(currentIndex);
    timer = setInterval(nextSlide, 5000);
  });
});