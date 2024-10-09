function rotateArray(arr, k) {
    
    k = k % arr.length;  
    
    // the rotation
    return arr.slice(-k).concat(arr.slice(0, -k));
}

let arr = [1, 2, 3, 4, 5];
let k = 2;
let rotatedArr = rotateArray(arr, k);
console.log(rotatedArr);  