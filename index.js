function isPrimaryNumber(number) {
    // Primary number can't be less than 2
    if (number <= 1) {
        return false;
    }

    // Primary number can't be even
    if (number % 2 === 0) {
        return false;
    }

    for (let i = 3; i < number; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const fibonacci = (function () {
    const cache = new Map();

    return function fibonacci(number) {
        if (number <= 1) {
            return 1;
        }

        if (!cache.has(number)) {
            const result = fibonacci(number - 1) + fibonacci(number - 2);
            cache.set(number, result);
        }

        return cache.get(number);
    };
})();

function nextPrimaryFibonacci(number) {
    for (let i = 1;; i++) {
        const fibNumber = fibonacci(i);
        const isPrimary = isPrimaryNumber(fibNumber);

        // Log info about current iteration of looking for next prime and fibonacci number
        console.log('fib', fibNumber, number);

        if (fibNumber > number && isPrimary) {
            return fibNumber;
        }

        console.warn('bumping to ', fibNumber);
    }
}

const nextNum = nextPrimaryFibonacci(20);
console.warn('Next prime fib ', nextNum);
