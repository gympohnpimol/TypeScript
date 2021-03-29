let str: String;
str = "Hello World";
//1
console.log(str.startsWith("Hello"));
console.log(str.startsWith("World"));
//----
console.log(str.endsWith("Hello"));
console.log(str.endsWith("World"));

//2
let str2: String;
str2 = "Computer";
console.log(str2.substring(3,6));

let str3: String;
str3 = "Death Race";
console.log(str3.slice(0, 6));

let str4: String;
str4 = "Republican";
console.log(str4.substr(2,6));