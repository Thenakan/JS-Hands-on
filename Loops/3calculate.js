function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}


let number = 5;
let fact = factorial(number);
console.log(`The factorial of ${number} is ${fact}`);
