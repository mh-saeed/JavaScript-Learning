let elem = document.getElementById(`search`);

elem.addEventListener(`click`, function (e) {

    elem.style.color = `Green`;
    let x = document.getElementById("myText");
    var defaultVal = x.defaultValue;
    var currentVal = x.value;

    defaultVal == currentVal
        ? (location.href = defaultVal)
        : (location.href = currentVal);
});

let elem2 = document.getElementById(`heading`);

elem2.addEventListener(`click`, function (e) {

    let clicked = e.target;
    clicked = e.target.className; // will give class name
    clicked = e.target.classList; // will give all classes names
    clicked = e.target.id; // will give id

    clicked = e.offsetX; // will print loction of clicked area
    clicked = e.offsetY; // will print loction of clicked area
    clicked = e.clientX; // will print loction of clicked area
    clicked = e.clientY; // will print loction of clicked area

    console.log(`CLICKED`);
    console.log(clicked);
});
