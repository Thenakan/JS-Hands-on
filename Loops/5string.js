function reverseString(str) {
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}


let inputString = "Hello, World!";
let result = reverseString(inputString);
console.log(`The reversed string is: "${result}"`);
