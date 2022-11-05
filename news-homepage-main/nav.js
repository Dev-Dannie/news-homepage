const navBtn = document.getElementById('nav-icon')
const navLinks = document.querySelector('.nav-links')
const closeBtn = document.getElementById('close-btn')

navBtn.addEventListener('click', () => {
  navLinks.classList.toggle('display-nav')
})

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('display-nav')
})