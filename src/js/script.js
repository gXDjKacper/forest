const root = document.documentElement
const nav = document.querySelector('.nav')
root.style.setProperty('--nav-height', `${nav.offsetHeight}px`)
const burgerBtn = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav__items')
const navLinks = document.querySelectorAll('.nav__item')
const footerDate = document.querySelector('.footer__date')

const handleNav = () => {
	navMenu.classList.toggle('nav-active')
	burgerBtn.classList.toggle('is-active')
	const isOpened = JSON.parse(burgerBtn.getAttribute('aria-expanded'))
	burgerBtn.setAttribute('aria-expanded', !isOpened)
}

const handleCurrentYear = () => {
	footerDate.textContent = new Date().getFullYear()
}

navLinks.forEach(item => {
	item.addEventListener('click', handleNav)
})
burgerBtn.addEventListener('click', handleNav)
handleCurrentYear()
