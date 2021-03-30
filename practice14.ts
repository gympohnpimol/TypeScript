//1
let ractangle = (a, b) => a * b;
console.log(ractangle(2, 5))
//2
let isPrime = num =>{
    if (num <= 1){
        return false
    }
    if (num <= 3){
        return true
    }
    if (num % 2 == 0 || num % 3 == 0){
        return false
    }

    let i = 5;
    while ( i * i <= num){
        if (num % i == 0 || num % (i + 2) == 0){
            return false
        }
        i++
    }
    return true
}
console.log(isPrime(1))