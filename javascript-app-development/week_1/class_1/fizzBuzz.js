// FizzBuzz

// If # is divisible by 3, print fizz
// If # is divisible by 5, print buzz
// By 3 and 5, print fizzBuzz
// If neither, then print the number

let number = 17;

// if (number % 3 === 0 && number % 5 === 0) {
//     console.log('fizzBuzz');
// } else if (number % 3 === 0) {
//     console.log('fizz');
// } else if (number % 5 === 0) {
//     console.log('buzz');
// } else {
//     console.log(number);
// }


// Another way - to reduce runtime
let result = "";

if (number % 3 === 0) {
    result += 'fizz';
}
if (number % 5 === 0) {
    result += 'buzz';
}
else {
    result = number;
}

console.log(result)