function rightPlace(stringOne, char, stringTwo) {
  let result = stringOne.replace("_", char);
  if (result === stringTwo) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng", "I", "Strong");
