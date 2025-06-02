const track = document.querySelector('.carousel-track');
const btnLeft = document.querySelector('.carousel-arrow.left');
const btnRight = document.querySelector('.carousel-arrow.right');

btnLeft.addEventListener('click', () => {
  track.scrollBy({ left: -200, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  track.scrollBy({ left: 200, behavior: 'smooth' });
});


document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenuList = document.querySelector("#navMenu ul");

  navToggle.addEventListener("click", () => {
    navMenuList.classList.toggle("show");
  });
});

