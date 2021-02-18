// Loops
let array=[1,2,3,4,5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);    
    
}

let x = 990;
while (x<1000) {
    console.log(x);
    x++;
    
}

let k=0;
do {
    if (k===5) {
        break;    //break
    }
    console.log(k);
    k++;
} while (k<10);
console.log(`done!`)

let z=0;
do {
    z++;
    if (z===5) {
        continue;    //break
    }
    console.log(z);
} while (z<10);
console.log(`done!`);

let arr=[12,23,34,45,56];
arr.forEach(function(element) { //iteration you can also use these parameters function(element, index, array)
    console.log(element);
    
});


arr.forEach(function(element, index, array) { //iteration
    console.log(element, index, array);
    
});

let obj = {
    name: `Muhammad Saeed`,
    father_name: `Abdul Qadeer`,
    gender: `male`,
    operating_system: `ubuntu`,
    cell_no: 111244622
}

for (const key in obj) {
    console.log(`The ${key} of object is: ${obj[key]}`);
}