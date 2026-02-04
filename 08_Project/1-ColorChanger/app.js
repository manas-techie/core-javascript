const buttons = document.querySelectorAll('.button');
console.log(buttons); //NodeList of all buttons

buttons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        console.log(e); //Event object
        console.log(e.target); //Targeting the element where event happened

        const bgColor = e.target.id;
        console.log(bgColor);

        document.body.style.backgroundColor = bgColor;

    })
})