// Header menu
const btnBurger = document.getElementsByClassName('header-burger')[0];
const menu = document.getElementsByClassName('header-menu')[0];

btnBurger.addEventListener('click', function (event) {
  event.stopPropagation();
  document.body.classList.toggle('body-prevent-scroll');
  menu.classList.toggle('header-menu-open');
  btnBurger.classList.toggle('header-burger-open');
});

document.addEventListener('click', event => {
  if (
    !menu.contains(event.target) &&
    menu.classList.contains('header-menu-open')
  ) {
    document.body.classList.remove('body-prevent-scroll');
    menu.classList.remove('header-menu-open');
    btnBurger.classList.remove('header-burger-open');
  }
});
//

// Sections animation
let blocks = document.querySelectorAll('.section-animation');

function checkBlocksVisibility() {
  let windowHeight = window.innerHeight;

  blocks.forEach(block => {
    let blockPosition = block.getBoundingClientRect().top;

    if (blockPosition < windowHeight - 100) {
      block.style.opacity = '1';
      block.style.transform = 'translateY(0)';
    }
  });
}

checkBlocksVisibility();

window.addEventListener('scroll', checkBlocksVisibility);
// Smooth scroll to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  });
});
//
