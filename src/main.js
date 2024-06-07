// Header menu
const btnBurger = document.getElementsByClassName('header-burger')[0];
const menu = document.getElementsByClassName('header-menu')[0];
const menuLinks = document.getElementsByClassName('header-nav-link');
const menuLinksArray = Array.from(menuLinks);

menuLinksArray.forEach(link => {
  link.addEventListener('click', function (event) {
    document.body.classList.remove('body-prevent-scroll');
    menu.classList.remove('header-menu-open');
    btnBurger.classList.remove('header-burger-open');
  });
});

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
//

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

// Header hide when scroll
let lastScroll = 0;
const defaultOffset = 60;
const header = document.querySelector('.header');

const scrollPosition = () =>
  window.scrollY || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    header.classList.add('hide');
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove('hide');
  }

  lastScroll = scrollPosition();
});
//

// Header active nav-item

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.header-nav-item a');
const offset = 100;

const getActiveSection = () => {
  let activeSection = null;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= offset && rect.bottom >= offset) {
      activeSection = section;
    }
  });
  return activeSection;
};

const setActiveNavLink = () => {
  const activeSection = getActiveSection();
  if (activeSection) {
    const activeId = activeSection.getAttribute('id').toLowerCase();
    navLinks.forEach(link => {
      const href = link.getAttribute('href').slice(1).toLowerCase();
      if (href === activeId) {
        link.parentElement.classList.add('header-nav-item-active');
      } else {
        link.parentElement.classList.remove('header-nav-item-active');
      }
    });
  } else {
    navLinks.forEach(link => {
      link.parentElement.classList.remove('header-nav-item-active');
    });
  }
};

window.addEventListener('DOMContentLoaded', setActiveNavLink);
window.addEventListener('scroll', setActiveNavLink);
//
// catalog

const btnCatalog = document.getElementsByClassName('catalog-btn')[0];
const imgCatalog5 = document.getElementsByClassName('catalog-item')[4];
const imgCatalog6 = document.getElementsByClassName('catalog-item')[5];

btnCatalog.addEventListener('click', function (event) {
  imgCatalog5.classList.remove('catalog-item-hide');
  imgCatalog6.classList.remove('catalog-item-hide');
  btnCatalog.classList.add('catalog-btn-none');
});
