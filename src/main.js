// Header menu
const btnBurger = document.getElementsByClassName('header-burger')[0];
const menu = document.getElementsByClassName('header-menu')[0];

btnBurger.addEventListener('click', function (event) {
  event.stopPropagation();
  menu.classList.toggle('header-menu-open');
  btnBurger.classList.toggle('header-burger-open');
});

document.addEventListener('click', event => {
  if (
    !menu.contains(event.target) &&
    menu.classList.contains('header-menu-open')
  ) {
    menu.classList.remove('header-menu-open');
    btnBurger.classList.remove('header-burger-open');
  }
});
//
