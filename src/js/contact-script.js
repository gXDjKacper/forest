const username = document.querySelector('#name')
const surname = document.querySelector('#surname')
const email = document.querySelector('#email')
const textarea = document.querySelector('#msg')
const contactBtn = document.querySelector('.contact__btn')
const popup = document.querySelector('.contact__popup')
const popupInfo = document.querySelector('.contact__popup-info')
const popupBtn = document.querySelector('.contact__popup-btn')
const bodyShadow = document.querySelector('.body-shadow')

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
		el.value==='' ? showError(el, el.placeholder) : clearError(el)
	})
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	re.test(email.value) ? clearError(email) : showError(email, 'prawidłowy adres email')	
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-box')
	let errorCount = 0

	;allInputs.forEach(el => {
		el.classList.contains('error') && errorCount++
	})

	if (errorCount === 0) {
		popup.classList.toggle('show-popup')
		bodyShadow.classList.toggle('body-shadow-active')
		document.body.classList.toggle('body-sticky')
	}
}

const closePopup = () => {
	popup.classList.toggle('show-popup')
	bodyShadow.classList.toggle('body-shadow-active')
	document.body.classList.toggle('body-sticky')
	;[username, surname, email, textarea].forEach(el => (el.value = ''))
}

contactBtn.addEventListener('click', e => {
	e.preventDefault()

	checkForm([username, surname, email, textarea])
	checkMail(email)
	checkErrors()
})
popupBtn.addEventListener('click', closePopup)
