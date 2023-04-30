function primeNumberCheck(number) {
  let counter = 2;
  let noPrime = 0;
  while (number > counter) {
    if (number % counter == 0) {
      console.log("false");
      noPrime = true;
      break;
    }
    counter++;
  }
  if (!noPrime) {
    console.log("true");
  }
}
primeNumberCheck(7);
