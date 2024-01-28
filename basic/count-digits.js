function countNumberOfDigits(num){
    let count =0;
   while(num>0){
    count++;
    num=Math.floor(num/10);

   }
   return count;
}

function numberOfDigits(num){
    let numLength = num.toString().length;
    return numLength;
}

console.log(countNumberOfDigits(6787));
console.log(numberOfDigits(6787));