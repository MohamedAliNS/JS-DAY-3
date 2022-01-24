// Question 1: For the given JSON iterate over all for loops (for, for in, for of, forEach)
// Array used on JSON to execute using for loop
// For in loop
let a = ['{"name":"Mohamed", "age":25, "phone": 7001290887,}'];
    for (let i in a) 
     console.log(i,a[i]);
      // For loop
let b = ['{"name":"Raja", "age":28, "phone": 9840031444,}'];
for (let i=0; i<b.length; i++) 
        console.log(b[i]);
//     // For each loop
    let c = ['{"name":"Ram", "age":26, "phone": 9840031555,}'];
c.forEach (i => console.log(i));
// // For of loop
let d = ['{"name":"Ravi", "age":27, "phone": 9840031420,}'];
for (let i of d) 
    console.log(i);



