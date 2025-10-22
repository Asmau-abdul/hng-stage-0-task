// FOR NAVIGATION BAR
let menuIcon = document.querySelector('.menuIcon')
let leftArrowIcon = document.querySelector('.leftArrowIcon')

let navMenu = document.querySelector('.navMenu')

menuIcon.addEventListener('click', () => {
    menuIcon.style.display = 'none'
    leftArrowIcon.style.display = 'inline'
    navMenu.style.display = 'grid'
})

leftArrowIcon.addEventListener('click', () => {
    document.location.reload()
})
// END OF NAVIDATIN BAR

function validateForm(){
    const fullname = document.querySelector('#fullname')
    const fullnameError = document.querySelector('#fullnameError')

    const email = document.querySelector('#email')
    const emailError = document.querySelector('#emailError')

    const subject = document.querySelector('#subject')
    const subjectError = document.querySelector('#subjectError')
    
    const message = document.querySelector('#message')
    const messageError = document.querySelector('#messageError')

    const successMessage = document.querySelector('.successMessage')

    const isValid = true

    if(fullname.value.trim() == ''){
        fullnameError.innerText = 'Invalid input'
        isValid = false
    }else{
        fullnameError.innerText = ''
    }

    if(subject.value.trim() == ''){
        subjectError.innerText = 'Invalid input'
        isValid = false
    }else{
        subjectError.innerText = ''
    }

    if(message.value.trim() == ''){
        messageError.innerText = 'Message should be 10 or more characters'
        isValid = false
    }if(message.value.length < 10){
        messageError.innerText = 'Message should be 10 or more characters'
        isValid = false
    }else{
        messageError.innerText = ''
    }

    if(isValid){
        if(window.confirm('Are you sure you want to submit?')){
            successMessage.innerText = 'Form Validation Successful!!!'
        }
    }
}

let contactForm = document.querySelector('.contactForm')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})
