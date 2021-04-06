//DOM selectors

// console.log(document.all);

// 1. single element selector
// 2. multi element selector

// -------------------Single element selector-----------------------

let element = document.getElementById(`form`); // will give element having id form 
element = element.className; // will print the class name of the element

element = document.getElementById("heading");
element= element.childNodes;// will give child nodes of element
element= element.parentNode;// will give parent nodes of element
element.style.color = 'red';
element.innerText = `Asalamualikum Pakistan`;
element.innerHTML = `<p> How Are you?</p>`;


console.log(element);
console.log(element.innerText);

//----------------QuerySelector----------------------

let sel = document.querySelector(`#form`);// will give the first element from html document having id form
let sel = document.querySelector(`.form`);// will give the first element from html document having class child
let sel = document.querySelector(`div`); // will give the first div element from html document
console.log(sel); 


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
