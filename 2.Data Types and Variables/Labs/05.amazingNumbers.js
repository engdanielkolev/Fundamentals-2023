function amazingNumbers(number) {
  let numberStr = number.toString();
  let sum = 0;
  for (i = 0; i < numberStr.length; i++) {
    sum += Number(numberStr[i]);
  }
  let result = sum.toString().includes("9");

  console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}
amazingNumbers(999);
