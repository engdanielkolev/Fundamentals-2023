function echo(parameter) {
  if (typeof parameter === "string") {
    console.log("string");
    console.log(parameter);
  } else if (typeof parameter === "number") {
    console.log("number");
    console.log(parameter);
  } else {
    console.log(typeof(parameter));
    console.log("Parameter is not suitable for printing");
  }
}
echo("Hello, JavaScript!");
