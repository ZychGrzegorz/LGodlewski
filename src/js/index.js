window.scrollBy({
  top: 0,
  left: 0,
  behavior: 'smooth',
});

const btnToggleMenu = document.querySelector('.navbar-toggler-right');
const menu = document.querySelector('.navbar-collapse');
btnToggleMenu.addEventListener('click', () => {
  menu.classList.toggle('show');
});
