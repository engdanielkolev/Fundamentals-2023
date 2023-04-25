function sumOdds(numberOdds) {
    let counterOdds = 0;
    let sum = 0;
    let i = 1;
    while (counterOdds !== numberOdds) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            counterOdds++;
        }
        i++;
    }
    console.log(`Sum: ${sum}`);
}
sumOdds(5)