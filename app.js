let userTime = document.querySelector('#user-time')
function updateTime(){
    userTime.innerHTML = `Current time (in ms): ${Date.now()}`
}

updateTime()
setInterval(updateTime, 1000)