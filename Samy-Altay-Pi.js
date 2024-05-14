 function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Schritt 1:
let arr = new Array(100);

// Schritt 2:
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * (999 - 2 + 1)) + 2;
}

// Schritt 3:
let primeNumbers = arr.filter(isPrime);

// Schritt 4: 
primeNumbers.sort((a, b) => a - b);

// Ausgabe 
console.log(primeNumbers); 