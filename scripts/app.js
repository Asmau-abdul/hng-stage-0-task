
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


// HOME PAGE CURRENT TIME
let userTime = document.querySelector('#user-time')
function updateTime(){
    userTime.innerHTML = `Current time (in ms): ${Date.now()}`
}

updateTime()
setInterval(updateTime, 1000)
// END OF HOME PAGE CURRENT TIME


// CONTACTC US PAGE
