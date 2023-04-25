function monthPrinter(digit) {

    if (digit < 1 || digit > 12) {
        console.log('Error!');
    } else if (digit === 1) {
        console.log('January');
    } else if (digit === 2) {
        console.log('February');
    } else if (digit === 3) {
        console.log('March');
    } else if (digit === 4) {
        console.log('April');
    } else if (digit === 5) {
        console.log('May');
    } else if (digit === 6) {
        console.log('June');
    } else if (digit === 7) {
        console.log('July');
    } else if (digit === 8) {
        console.log('August');
    } else if (digit === 9) {
        console.log('September');
    } else if (digit === 10) {
        console.log('October');
    } else if (digit === 11) {
        console.log('November');
    } else if (digit === 12) {
        console.log('December');
    }
}
monthPrinter(4)