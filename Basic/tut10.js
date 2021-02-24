// Functions and Scopes

// function with rest parameter
function welcome(...name) {
    console.log(
        `"Once again, I welcome ${name} to my house. Come freely. Go safely; and leave something of the happiness you bring. "`
    );
}
let myName = `Muhammad Saeed`;
welcome(myName, ` Haris bint irfan`, ` Mohammad Hassan &`, ` Muhammad Moiz`);

// function with multiple parameters
function greeting(name, thank) {
    console.log(
        `"Once again, I welcome ${name} to my house. Come freely. Go safely; and leave something of the happiness you bring.${thank} "`
    );
}
greeting(myName, `Thanks for coming ❤️`);

// if we do not 2nd passes argument while calling the function then the value for 2nd arg will be the declared value parameter . // function with obj literals

function greet1(name, thank = `Thank You`) {
    let greet =
        `"Once again, I welcome ${name} to my house. Come freely. Go safely; and leave something of the happiness you bring.${thank} "`;
    return greet;
}
console.log(greet1(`Saeed Khan`));

function sum(...theArgs) { // addition function (...restOperator)
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}
console.log(sum(5, 7, 10, 11));

// declaring function in variable

const func = function (name) { //annonymous function
    console.log(name);
}
func(`Muhammad Saeed`);

// function in Object

let myObj = {
    name: `Mr Saeed Khan`,
    os: `Ubuntu`,
    games: function () {
        return `GTA V & COD: Warzone`;
    }
};
console.log(myObj.games());

let arr = [`Saeed`, `Haris`, `Hassan`, `Moiz`];
arr.forEach(function (element, index) {
    console.log(element, index)

});

// Scope

//  let/const has block level scope!
// var has function level scope!

if (1) {
    let m = 1; // only accessible in block
    console.log(m);
}
// console.log(m); // will generate error: "Uncaught ReferenceError: m is not defined" because m is declared using let and let has block level scope

// var has global scope in block e..g if condition
// var has function level scope(mean it will not be accessible ot of function) in function body


if (1) {
    var n = 10; // gloabal scope 
    console.log(n);
}
console.log(n);

function num(name) {

    let n = 12; // only accessible in block
    var t = 100;
    console.log(`Number in function body is: `, n);
    return `My name is ${name}`;

}
console.log(num(`Muhammad Saeed`), n);
//console.log(t); // will generate error: "Uncaught ReferenceError: t is not defined"


// Recommended is to use let and const !!!