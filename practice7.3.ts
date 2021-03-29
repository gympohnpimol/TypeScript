function getRandom(min,max){
    return (Math.random()*(max-min+1)+min).toFixed(2);
}
console.log(getRandom(1,10))