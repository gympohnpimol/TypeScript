//1
let student = {
    name: "Gym",
    age: 29,
    degree: "Master",
    isSingle: true,
    info: {
        address: "Chiang Mai",
        postcode: 50210
    }
};
//2
let student2 = Object.assign({}, student);
student2.degree = "null";
//3
for (let key in student2){
    console.log(key);
    console.log(student2[key]);
}
//4
student["isActive"] = true;
//5
delete student["isActive"];

// console.log(student);