document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel-track');
  const btnLeft = document.querySelector('.carousel-arrow.left');
  const btnRight = document.querySelector('.carousel-arrow.right');

  // Only add listeners if elements exist
  if (btnLeft && btnRight && track) {
    btnLeft.addEventListener('click', () => {
      track.scrollBy({ left: -200, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
      track.scrollBy({ left: 200, behavior: 'smooth' });
    });
  }

  const navToggle = document.getElementById("navToggle");
  const navMenuList = document.querySelector("#navMenu ul");

  if (navToggle && navMenuList) {
    navToggle.addEventListener("click", () => {
      navMenuList.classList.toggle("show");
    });
  }
});
