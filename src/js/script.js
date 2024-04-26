let burgerBtn
let burgerBtnOpen
let burgerBtnClose
let navMenu
let navMobileLinks
let footerDate

// let num = 0

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
	handleCurrentYear()
}

const prepareDOMElements = () => {
	burgerBtn = document.querySelector('.burger-btn')
	burgerBtnOpen = document.querySelector('.burger-btn__open')
	burgerBtnClose = document.querySelector('.burger-btn__close')
	navMenu = document.querySelector('.nav-mobile__items')
	navMobileLinks = document.querySelectorAll('.nav-mobile__item')
	footerDate = document.querySelector('.footer__date')
}

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', handleNav)
}

const handleNav = () => {
	navMenu.classList.toggle('nav-active')

	navMobileLinks.forEach(item => {
		item.addEventListener('click', () => {
			navMenu.classList.remove('nav-active')
			burgerBtnClose.classList.remove('burger-active')
			setTimeout(() => {
				burgerBtnOpen.classList.add('burger-active')
			}, 100)
		})
	})

	if (burgerBtnOpen.classList.contains('burger-active')) {
		burgerBtnOpen.classList.remove('burger-active')
		setTimeout(() => {
			burgerBtnClose.classList.add('burger-active')
		}, 100)
	} else {
		burgerBtnClose.classList.remove('burger-active')
		setTimeout(() => {
			burgerBtnOpen.classList.add('burger-active')
		}, 100)
	}
}

const handleCurrentYear = () => {
	footerDate.textContent = new Date().getFullYear()
}

addEventListener('DOMContentLoaded', main)
