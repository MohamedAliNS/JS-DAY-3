// Question 1: For the given JSON iterate over all for loops (for, for in, for of, forEach)
// Array used on JSON to execute using for loop
// For in loop
let a = [{
    "name":"Raja Mohamed", 
    "age":"25", 
    "DOB":"15th January 1997",
}];
    for (let i in a) {
        console.log(i,a[i]);
    }
//     // For loop
let b = [{
    "name":"Raja Mohamed", 
    "age":"25", 
    "DOB":"15th January 1997",
}];
for (let i=0; i<b.length; i++) {
        console.log(b[i]);
} 
    // For each loop
    let c = [{
        "name":"Raja Mohamed", 
        "age":"25", 
        "DOB":"15th January 1997",
    }];
c.forEach (i => console.log(i));
// For of loop
let d = [{
    "name":"Raja Mohamed", 
    "age":"25", 
    "DOB":"15th January 1997",
}];
for (let i of d) {
    console.log(i);
}