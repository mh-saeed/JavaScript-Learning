console.log(`Hello World`);
let elem = document.getElementById(`search`);
elem.addEventListener(`click`, fun1);
elem.addEventListener(`dblclick`, fun2);

let elem2 = document.getElementById(`button`);
elem2.addEventListener(`mousedown`, fun3);
elem2.addEventListener(`mouseover`, fun4);

document.querySelector('.child').addEventListener(`mouseenter`, fun5);
document.querySelector('.child').addEventListener(`mouseleave`, fun6);
document.querySelector('.container').addEventListener(`mousemove`, fun7);


function fun1(e) {
    console.log(`Cliked on Search Button`, e);
    e.preventDefault();//preventDefault() method cancels the event if it is cancelable e.g Clicking on a "Submit" button, prevent it from submitting a form.
}
function fun2(e) {
    console.log(`Double Cliked on Search Button`, e);
    e.preventDefault();
}
function fun3(e) {
    console.log(`mouse down on Search Button`, e);
    e.preventDefault();
}
function fun4(e) {
    console.log(`mouse over on Search Button`, e);
    e.preventDefault();
}
function fun5(e) {
    console.log(`mouse enter`, e);
    e.preventDefault();
}
function fun6(e) {
    console.log(`mouse leave`, e);
    e.preventDefault();
}
function fun7(e) {
    console.log(`mouse move `, e);
    console.log(e.offsetY, e.offsetX);

}
