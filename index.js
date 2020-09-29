const container = document.getElementById('parallax');

window.addEventListener('scroll', function () {
    const offset = window.pageYOffset;
    container.style.backgroundPositionY = offset * 0.5 + "px"
})

const hamburger = document.querySelector('.hamburger-menu')
const navLinks = document.querySelector('.navbar__right')
const links = document.querySelectorAll('.navbar__right li')
const navBar = document.querySelector('.navbar')

const img = document.querySelector('.character__card')
const characterDetails = document.querySelector('character__details')


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open')
    navLinks.classList.toggle('open')
    navBar.classList.toggle('open')
    links.forEach(link => {
        link.classList.toggle('fade')
    })
})

navLinks.addEventListener('click', function () {
    hamburger.classList.toggle('open')
    navLinks.classList.toggle('open')
    links.forEach(link => {
        link.classList.toggle('fade')
    })
})

