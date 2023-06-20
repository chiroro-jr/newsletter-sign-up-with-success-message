const successContent = document.querySelector('.success')
const subscribeContent = document.querySelector('.subscribe')
const subscribeForm = document.querySelector('.subscribe-form')
const dismissButton = document.querySelector('.dismiss-btn')
const emailInput = document.querySelector('.email-input')
const subscribeButton = document.querySelector('.subscribe-btn')
const submittedEmail = document.querySelector('.submitted-email')

const INPUT_DELAY_MS = 0

emailInput.addEventListener(
    'keydown',
    debounceMS(() => {
        if (!emailInput.validity.valid || emailInput.value === '') {
            // disable subscribe button
            subscribeButton.disabled = true
        } else {
            // enable subscribe button
            subscribeButton.disabled = false
        }
    }, INPUT_DELAY_MS)
)

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // set the text content of the submitted email element
    submittedEmail.textContent = emailInput.value

    // hide subscribe content
    subscribeContent.classList.add('hidden')

    // show success content
    successContent.classList.remove('hidden')
    successContent.classList.add('flex')
})

dismissButton.addEventListener('click', () => {
    // reload page
    location.reload()
})

// prevent checking for email input validity on every keystroke
function debounceMS(func, delay) {
    let timeoutId
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args)
        }, delay)
    }
}
