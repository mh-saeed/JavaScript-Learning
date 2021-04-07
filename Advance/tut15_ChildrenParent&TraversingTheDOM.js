//Children, Parent, & Traversing The DOM

let element = document;
element = element.querySelector(`.container`);

console.log(element.childNodes); // will give a object having all elements including text and comments within slected element.
console.log(element.childNodes[5].nodeName); // To access specific child node
console.log(element.childNodes[5].nodeType); // To access specific child node

/* Node Types
 1=Element
 2=Attribute
 3=Text Node
 8=Comment
 9=Document
 10=DocType
 */

console.log(element.children); // will give a object having all elements within the slected element

console.log(element.children[0].children);// accessing child which is with in a child

console.log(element.children[0].children[0].children);// accessing child which is with in a child

console.log(element.firstChild);//to access first child with in the selcted element
console.log(element.firstElementChild);//to access first elementchild with in the selcted element

console.log(element.lastChild);//to access last child with in the selcted element
console.log(element.lastElementChild);//to access last element child with in the selcted element

console.log(element.childElementCount);//to count child element with in the selcted element

let elem = document.querySelector(`.list`);
console.log(elem.parentNode);
console.log(elem.firstElementChild.nextSibling); // will give next sibling of seleted element
console.log(elem.firstElementChild.nextElementSibling);// will give only next element sibling of selected element
console.log(elem.firstElementChild.nextElementSibling.nextElementSibling);// we can also do chainig to access more siblings