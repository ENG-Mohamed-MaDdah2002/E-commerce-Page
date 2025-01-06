let year = new Date().getFullYear()
let Month = new Date().getMonth()
let day = new Date().getDay()

let hour = new Date().getHours()
let minute = new Date().getMinutes()

setInterval(() => {
    let date = `Date: <${year}-${Month}-${day} > < time: ${hour}:${minute}>`

    let timeDate = document.getElementById('timeDate')
    timeDate.innerHTML = date
}, 1);