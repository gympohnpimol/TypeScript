//1
let arr1 = ["Apple", "Cat", "Zoo", "Bird", "Dog"];
console.log(arr1.sort())
//2
let arr2 = [123, 132, 423, 423, 12345, 5343, 53, 10904, 64];
console.log(arr2.filter(item => {
    return Number(String(item)[0] == "1");
}))
//3
let arr3 = ["Apple", "Mango", "Cat", "Banana"];
arr3.splice(2, 1);
arr3.splice(2, 0, "Orange");
console.log(arr3);
//4
console.log(arr1.map(item => item.length));
//5
console.log(arr2.filter(item => item < 100));
//6
console.log(arr3.find(item => item == "Banana"));
console.log(arr3.findIndex(item => item == "Banana"));
//7
arr1.forEach((item) => {console.log(`${item}  has a lenght as ${item.length}`);});


