let burgerBtn
let burgerBtnOpen
let burgerBtnClose
let navMenu
let navMobileLinks
let footerDate
let username
let surname
let email
let textarea
let contactBtn
let popup
let popupInfo
let popupBtn
let bodyShadow

let num = 0

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
	username = document.querySelector('#name')
	surname = document.querySelector('#surname')
	email = document.querySelector('#email')
	textarea = document.querySelector('#msg')
	contactBtn = document.querySelector('.contact__btn')
	popup = document.querySelector('.contact__popup')
	popupInfo = document.querySelector('.contact__popup-info')
	popupBtn = document.querySelector('.contact__popup-btn')
	bodyShadow = document.querySelector('.body-shadow')
}

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', handleNav)
	contactBtn.addEventListener('click', e => {
		e.preventDefault()

		checkForm([username, surname, email, textarea])
		checkMail(email)
		checkErrors()
	})
	popupBtn.addEventListener('click', closePopup)
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

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.contact__error-info')
	formBox.classList.add('error')
	errorMsg.textContent = `Wpisz ${msg.toLowerCase()}`
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'prawidłowy adres e-mail')
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-box')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		popup.classList.add('show-popup')
		bodyShadow.classList.add('body-shadow-active')
		document.body.classList.add('body-sticky')
	}
}

const closePopup = () => {
	popup.classList.remove('show-popup')
	bodyShadow.classList.remove('body-shadow-active')
	document.body.classList.remove('body-sticky')
	username.value = ''
	surname.value = ''
	email.value = ''
	textarea.value = ''
}

addEventListener('DOMContentLoaded', main)
