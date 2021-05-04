console.log(`Exersice`);
/*
Create a div and inject it into page which contains a heading.
Whenever someone clicks on the div, it should be converted into a editable item.
Whenever user clicks away (blur), save the notes in local storage.
*/

let elem = document.getElementById('editableDiv');
let elem2 = document.getElementById(`textArea`);
let x = 0;

elem.addEventListener(`click`, addTextArea)
elem2.addEventListener(`blur`, storeInLocalStorage)

function addTextArea(e) {
    elem.classList.add(`hidden`);
    elem2.classList.remove(`hidden`);
}
function storeInLocalStorage(e) {
    localStorage.setItem(`Value${++x}`, elem2.value);
}

