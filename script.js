// Script for navigation bar
let bar = document.getElementById('bar')
let close = document.getElementById('close')
let navbar = document.getElementById('navbar')

if (bar) {
  bar.addEventListener('click', () => {
    navbar.classList.add('active')
  })
}

if (close) {
  close.addEventListener('click', () => {
    navbar.classList.remove('active')
  })
}
