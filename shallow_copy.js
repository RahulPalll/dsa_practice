const findElement = (arr, target) => {
    for (let x of arr){
        if (x === target){
            return true;
        }
    }
    return false;
}

console.log(findElement(arr, "Hello"));
console.log(findElement(arr, "H"));
console.log(arr.includes("Hello"));