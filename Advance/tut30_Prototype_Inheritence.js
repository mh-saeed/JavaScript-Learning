let animal = {
    eats: true
    };
    let rabbit = {
    jumps: true
    };
    rabbit.__proto__ = animal; // (*)
    // we can find both properties in rabbit now:
    console.log( rabbit.jumps ); // true
    console.log( rabbit ); // true
    console.log( rabbit.eats ); // true (**)