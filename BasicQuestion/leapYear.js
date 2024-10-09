const userInput = prompt("Enter a year:");

const year = Number(userInput);

if (!isNaN(year), Number.isInteger(year), year > 0) {
    
    if (year % 4 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
} else {
    console.log("Please enter a valid positive integer for a year.");
}