// console.log("Hello world");

// let randomNumber = Math.random(); 

// if (randomNumber < 0.50) {

//     console.log("Condition was Met");
//     console.log(randomNumber);

// }


// it will randomize any number greater that 0.5
// if (randomNumber >= 0.5) {

//     console.log('Condition was Met');
//     console.log(randomNumber);

// }
// const so it doesnt change, chosing a day of the week, it wont run the code unless it matches the variable 
// const dayOfWeek = 'saturday';
// if (dayOfWeek === 'Monday') {

// console.log("Yay its Monday");


// } else if (dayOfWeek === 'Friday'){

//     console.log("yay its friday");
// }else if (dayOfWeek === 'saturday') {
//     console.log("You have the correct day from the variable");
// }

// const so it doesnt change, chosing an age number, it wont run the code unless it matches the variable 
// const age = prompt("Enter An Age");

// if (age < 5) {

//     console.log("Hey, you're a baby!");

// } else if (age < 10) {

//     console.log("Hey, you're just a kid!");
// } else if (age < 35) {

//     console.log("You're getting older.");
// }
// // IF ALL OTHER CONDITIONS FAIL - ELSE.
// else {

//     console.log("You are over the age of 35.");
// }

// const fruit = 'Peach';

// // passing the varaible to the arguament perimeter, and case statement is a lot more cleaner, have a defualt if all cases bomb out.
// switch (fruit) {

//     case 'Oranges':
//         console.log("Oranges are $0.59 a pound");
//         break;
//     case 'Bananas':
//         console.log("Bananas are $0.10 a pound");
//         break;
//     case 'Avocados':
//         console.log("Advocados are expensive");   
//         break; 
//     case 'Papayas':
//         console.log("Papayas are $0.70 a pound");
//         break;
//     default:
//         console.log("Last Resort If All Conditions Fail");

// }

// The password must be 6 characters long, and if password cannot be found that it comes back with -1
// const password = prompt("Enter in a new password");

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password");
//     } else {
//         console.log("Password Cant Have Spaces");
//     }
// } else {
//     console.log("Password is too short");
// }
// DEC statement with a name 
function singSong() {
// doesnt do anything til you call it 
    console.log("DO");
    console.log("RE");
    console.log("ME");
}
// calling the function, calling the function 3 times 
singSong()
singSong()
singSong()

function greet(firstName) {
// adding an expression by adding the dollar sign 
    console.log(`Hey There, ${firstName}`)
}

greet('Boomer');

// you can pass mutliple objects in the argument perimeter 
function greet1(firstName,lastName) {

    console.log(`Hey There, ${firstName} ${lastName}`)
}

greet1('Boomer','Sooner');
