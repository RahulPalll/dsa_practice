const findElementIndex = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findElementIndex(arr, "Hello"));
console.log(arr.indexOf("Hello"));