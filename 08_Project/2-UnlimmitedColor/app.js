// Random Color Generator

const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

console.log(randomColor());

let intervalID;

const changeBackgroundColor = function () {
    document.body.style.backgroundColor = randomColor();
}

const startChangeColor = function () {
    if (!intervalID) {
        console.log("Color is changing");
        intervalID = setInterval(changeBackgroundColor, 1000);
    }
}

const stopChangeColor = function () {
    console.log("Color change is stopped");
    clearInterval(intervalID);
    intervalID = null;
}


document.querySelector('#start').
    addEventListener('click', startChangeColor);

document.querySelector('#stop').
    addEventListener('click', stopChangeColor);
