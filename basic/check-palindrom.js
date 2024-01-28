function checkPalindrom(x) {
  let str = x.toString();
  let y = "";
  for (let i = str.length - 1; i >= 0; i--) {
    y = y + str[i];
  }
  if (y == x) {
    return true;
  } else {
    return false;
  }
}

function palindrom(x) {
  if (x < 0) {
    return false;
  }
  let newNumber = x;
  let reverseNumber = "";
  while (x > 0) {
    reverseNumber += x % 10;
    x = Math.floor(x / 10);
  }
  reverseNumber = +reverseNumber;

  return reverseNumber === newNumber;
}

let isPalindrome = function (x) {
  let copyNum = x,
    reverseNum = 0;

  while (copyNum > 0) {
    const lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }

  return x === reverseNum;
};

console.log(checkPalindrom("666"));
console.log(palindrom(666));
