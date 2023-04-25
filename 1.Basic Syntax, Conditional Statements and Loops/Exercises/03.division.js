function division(number) {
    let isNotDivisible = true;

    if (number % 10 === 0) {
        console.log(`The number is divisible by ${10}`);
        isNotDivisible = false;
    } else if (number % 7 === 0) {
        console.log(`The number is divisible by ${7}`);
        isNotDivisible = false;
    } else if (number % 6 === 0) {
        console.log(`The number is divisible by ${6}`);
        isNotDivisible = false;
    } else if (number % 3 === 0) {
        console.log(`The number is divisible by ${3}`);
        isNotDivisible = false;
    } else if (number % 2 === 0) {
        console.log(`The number is divisible by ${2}`);
        isNotDivisible = false;
    }

    if (isNotDivisible) {
        console.log('Not divisible');
    }
}
division(1643)