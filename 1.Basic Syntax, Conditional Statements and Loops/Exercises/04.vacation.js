function vacation(countPeople, type, day) {

    let price = 0;
    let totalPrice = 0;

    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    if (countPeople >= 30) {
                        price = 8.45;
                        totalPrice = price * 0.85 * countPeople;
                    } else {
                        price = 8.45;
                        totalPrice = price * countPeople;
                    }
                    break;
                case 'Saturday':
                    if (countPeople >= 30) {
                        price = 9.80;
                        totalPrice = price * 0.85 * countPeople;
                    } else {
                        price = 9.80;
                        totalPrice = price * countPeople;
                    }
                    break;
                case 'Sunday':
                    if (countPeople >= 30) {
                        price = 10.46;
                        totalPrice = price * 0.85 * countPeople;
                    } else {
                        price = 10.46;
                        totalPrice = price * countPeople;
                    }
                    break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    if (countPeople >= 100) {
                        price = 10.90;;
                        totalPrice = price * (countPeople - 10) * countPeople;
                    } else {
                        price = 10.90;
                        totalPrice = price * countPeople;
                    }
                    break;
                case 'Saturday':
                    if (countPeople >= 100) {
                        price = 15.60;
                        totalPrice = price * (countPeople - 10) * countPeople;
                    } else {
                        price = 15.60;
                        totalPrice = price * countPeople;
                    }
                    break;
                case 'Sunday':
                    if (countPeople >= 100) {
                        price = 16;
                        totalPrice = price * (countPeople - 10) * countPeople;
                    } else {
                        price = 16;
                        totalPrice = price * countPeople;
                    }
                    break;
            }
            break
        case 'Regular':
            switch (day) {
                case 'Friday':
                    if (countPeople >= 10 && countPeople <= 20) {
                        price = 15;;
                        totalPrice = price * 0.95 * countPeople;
                    } else {
                        price = 15;
                        totalPrice = price * countPeople;
                    }
                    break;
                case 'Saturday':
                    if (countPeople >= 10 && countPeople <= 20) {
                        price = 20;
                        totalPrice = price * 0.95 * countPeople;
                    } else {
                        price = 20;
                        totalPrice = price * countPeople;
                    }
                    break;
                case 'Sunday':
                    if (countPeople >= 10 && countPeople <= 20) {
                        price = 22.50;
                        totalPrice = price * 0.95 * countPeople;
                    } else {
                        price = 22.50;
                        totalPrice = price * countPeople;
                    }
                    break;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday")