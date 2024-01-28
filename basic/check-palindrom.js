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

console.log(checkPalindrom("666"));
// console.log(palindrom("666"));
