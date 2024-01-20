function primeNumberChecker(num) {
    let isPrime = true;
    if (num < 2) {
        isPrime = false;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;

        }
    }
    console.log(isPrime);
}

//primeNumberChecker(7);
//primeNumberChecker(8);
primeNumberChecker(81);
