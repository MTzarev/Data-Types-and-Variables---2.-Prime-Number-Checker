function primeNumberChecker(num) {
    let isTrue = false;
    if (num < 2) {
        isTrue = false
    } else {
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                isTrue = false
            } else {
                isTrue = true
            }
        }
    }
    console.log(isTrue);
}

primeNumberChecker(7);
//primeNumberChecker(8);
//primeNumberChecker(81);