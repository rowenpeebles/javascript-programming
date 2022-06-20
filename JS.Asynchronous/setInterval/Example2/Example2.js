// Display time every 5 seconds

function showTime() {
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
}

let display = setInterval(showTime, 5000);
