let time = document.getElementById("watches")
function clock(now) {
    now = new Date();
    let secs = now.getSeconds();
    let mins = now.getMinutes();
    let hs = now.getHours();
    let miliss = now.getMilliseconds();
    if (secs < 10) {
        secs = `0` + secs;
    }
    if (mins < 10) {
        mins = `0` + mins;
    }
    if (hs < 10) {
        hs = `0` + hs;
    }
    if (miliss < 10) {
        miliss = `00` + miliss;
    } else if (miliss < 100) {
        miliss = `0` + miliss;
    }
    time.innerHTML = hs + ':' + mins + ':' + secs + ':' + miliss;
}
setInterval(clock, 0);
clock();