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
//
