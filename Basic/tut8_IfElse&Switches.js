console.log(`Tutorial 8`);

const age = 20;

let myAge = 21;


// double == will only check/compare values, while triple === will check/compare both values & type of data.
// != value not equal to, !== value & type not equal to

if (age === `20`) {
    console.log(`age is 20 😠, type: string`);
}
else if (age == 19) {
    console.log(`age is 19 😂`);
}
else if (age === 20) {
    console.log(`age is 20 😍, type: number`);
}
else {
    console.log(`age is neither 20 nor 19 😢`);
}

if (typeof myAge !== `undefined`) {
    console.log(`myAge is defined!`);
} else {
    console.log(`myAge is not defined!`);
}

let doesDrive = true;


if (myAge < 18) {
    console.log(`You are under-Age 😢`);
}
else if (doesDrive || myAge < 18) {
    console.log(`You can't Drive 😠`);

}
else if (doesDrive && myAge >= 18) {
    console.log(`You can Drive 🙂`);
}

// ternary operator
console.log(myAge == 21 ? `my age is 21` : `my age is not 21`)//myAge==='21'? `my age is 21`:`my age is not 21`
// (condition? if true display this: if false display this)

//switch

switch (myAge) {
    case 18:
        console.log(`You can't Drive 😠`);
        break;
    case 17:
        console.log(`You are under-Age 😢`);
        break;

    default:
        console.log(`You can't Drive 😠`);

        break;
}