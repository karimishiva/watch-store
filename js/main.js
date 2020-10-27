const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.cont');
const bar = document.querySelector('.bar');
const links = document.querySelector('.links');

hamburger_menu.addEventListener('click', () => {
    container.classList.toggle('active');
    bar.classList.toggle('active');
    links.classList.toggle('active');
});




