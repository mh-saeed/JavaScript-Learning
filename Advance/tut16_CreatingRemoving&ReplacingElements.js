let element = document.createElement(`li`); // will create element

let text = document.createTextNode(` Text using Text node`); //creating text
element.appendChild(text);// appending text in element's body

element.className = `createdli`;// assigning class to element
element.id = `childlicreated`;// assigning id to element
element.setAttribute(`title`, `mytitle`);// assigning attributes to element


// element.innerText=  `Hello `; // we can also set text in an element using this
//element.innerHTML= `<b>Hello World!<b/>`; //if we want to create text with an element 
console.log(element);



let ul = document.querySelector(`ul.list`);// selecting ul with class 'list'
ul.appendChild(element);// appending an element in ul
console.log(ul);

let element2 = document.createElement(`h3`);// creating an h3 element
element2.id = `elem2`;// assigning id
element2.className = `elem2Class`; //assigning class

let h3text = document.createTextNode(` This is h3 text`); // creating text
element2.appendChild(h3text);// appending text

element.replaceWith(element2);//replacing element with element2

let myullist = document.getElementById(`mylist`);// selecting an element with id 'mylist'
myullist.replaceChild(element, document.getElementById(`fli`));// first arg is replacing element and 2nd arg is replaced child

myullist.removeChild(document.getElementById(`lchild`));// removing element with id 'lchild', which is child of myullist
console.log(myullist);

let pr = element2.getAttribute(`id`);// will print value of id, can be aslo used for other attributes 
pr = element2.hasAttribute(`class`);// will print true/false
pr = element2.hasAttribute(`href`);// will print true/false
console.log(pr);


/* --------------------QUIZ/TASK------------------------- */
let harry = document.createElement(`a`);
let text3 = document.createTextNode(`Go to Harry.com`);
harry.setAttribute(`href`, `https://codewithharry.com`);
harry.setAttribute(`target`, `_blank`);

harry.appendChild(text3);

myullist.appendChild(harry);