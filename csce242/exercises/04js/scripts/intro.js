document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello, World!";
    e.target.innerHTML = "Done!";
}

document.getElementById("Link").onclick = (e) => {
    e.preventDefault(); //dont go to links destination
    e.target.classList.add("cool-link");
}   

document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}

document.getElementById("txt-num-days").onchange = (e) => {
    const numDays = parseInt(e.target.value);
    const pMessage = document.getElementById("p-plant-health");
    pMessage.innerHTML = numDays;

    if (numDays <= 2) {
        pMessage.innerHTML = `Let your plant rest! It's only been ${numDays} day(s) since you watered it.`;
        
    }
    else if (numDays <= 5) {
        pMessage.innerHTML = `Time to water your plant! It's been ${numDays} days since you watered it.`;
        
    }
    else if (numDays <= 7) {
        pMessage.innerHTML = `Oh no your plant is dying! It's been ${numDays} days since you watered it.`;
    }
    else {
        pMessage.innerHTML = `Your plant is dead! It's been ${numDays} days since you watered it.`;
    }
}

//Counting 
let countInterval;
let count = 0;
const pCount = document.getElementById("p-count");
const btnStart = document.getElementById("btn-start");
const btnPause = document.getElementById("btn-pause");
const btnStop = document.getElementById("btn-stop");
btnPause.disabled = true;
btnStop.disabled = true;

btnStart.onclick = () => 
{
    countInterval = setInterval(()=>{
        pCount.innerHTML = ++count;
    },500);
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
};

btnPause.onclick = () => 
{
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = false;
};

btnStop.onclick = () => 
{
    count = 0;
    pCount.innerHTML = "";
    clearInterval(countInterval);
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnStop.disabled = true;
};

//Date Display
setInterval(() => {
const pDisplay = document.getElementById("date-display");
const today = new Date();
const seconds = today.getSeconds();
pDisplay.innerHTML = seconds;

}, 1000);