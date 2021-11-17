const menuArea = document.querySelector('.navbar');
const menuMobile = document.querySelector('.menu-mobile');


window.onscroll = () => {
    menuArea.classList.remove('active')
}

menuMobile.onclick = () => {
    menuArea.classList.toggle('active');
}