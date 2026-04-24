let current = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  current++;

  if (current >= slides.length) {
    current = 0;
  }

  showSlide(current);
}

function prevSlide() {
  current--;

  if (current < 0) {
    current = slides.length - 1;
  }

  showSlide(current);
}

function goToSlide(index) {
  current = index;
  showSlide(current);
}

/* autoplay 4s */
setInterval(() => {
  nextSlide();
}, 4000);
