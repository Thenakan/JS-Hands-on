function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}


let celsiusValue = 25;
let fahrenheitValue = celsiusToFahrenheit(celsiusValue);
console.log(`${celsiusValue}°C is equal to ${fahrenheitValue}°F`);