const times = document.getElementById('times')
const bars = document.getElementById('bars')
const navLinks = document.getElementById('nav-links')

times.addEventListener('click', () => {
    navLinks.style.right = '-200px'
})

bars.addEventListener('click', () => {
    navLinks.style.right = '0'
})