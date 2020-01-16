const burger = document.querySelector('.nav__burger');
const nav = document.querySelector('.nav__navigation');


burger.addEventListener('click', () => {
    nav.classList.toggle('nav__navigation--active')
})