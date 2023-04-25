function rounding(number, precision) {
    if (precision > 15) {
        precision = 15
    }
    let result = number.toFixed(precision)
    result = parseFloat(result);
    console.log(result);
}

rounding(10.5, 3)