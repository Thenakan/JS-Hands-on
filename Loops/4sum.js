function sumOfFirstNNumbers(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}


let userInput = prompt("Enter a number:");
let n = parseInt(userInput);   

if (!isNaN(n) && n > 0) {
    let sum = sumOfFirstNNumbers(n);
    console.log(`The sum of the first ${n} numbers is ${sum}`);
} else {
    console.log("Please enter a valid positive integer.");
}
