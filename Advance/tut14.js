//DOM selectors

// console.log(document.all);

// 1. single element selector
// 2. multi element selector

// -------------------Single element selector-----------------------

let element = document.getElementById(`form`); // will give element having id form 
element = element.className; // will update the previous element value and then store's the class name of element with id form


element = document.getElementById("heading");
element.style.color = 'red';
element.innerText = `Asalamualikum Pakistan`;
element.innerHTML = `<p> How Are you?</p>`;


console.log(element);
console.log(element.innerText);

//----------------QuerySelector----------------------

let sel = document.querySelector(`#form`);
console.log(sel); // will give first form id element from document


//----------------------multi element selector-----------------------

let elems = document.getElementsByClassName(`child`);
console.log(`By class name ` + elems);
console.log(elems[0]);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = `darkorange`;
});


elems = document.getElementsByClassName(`container`);
console.log(`By class name ` + elems);
console.log(`By class name ` + elems[0].getElementsByClassName(`child`));

elems = document.getElementsByTagName(`div`);
console.log(`By tag name` + elems);
