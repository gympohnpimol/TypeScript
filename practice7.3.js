function getRandomNumberBetween(min, max) {
    return (Math.random() * (max - min + 1) + min).toFixed(2);
}
console.log(getRandomNumberBetween(1, 10));
