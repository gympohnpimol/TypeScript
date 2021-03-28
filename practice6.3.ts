//6.3
//1
let text1: string;
text1 = "microsoft excel";
console.log(text1.toUpperCase());
// ans: MICROSOFT EXCEL

//2
let text2: string;
text2 = "GOOGLE AND APPLE";
console.log(text2.toLowerCase());
// ans: google and apple

//3
let text3, t1: string;
text3 = "hello world";
t1 = text3[0].toUpperCase() + text3.substr(1,5) + text3[6].toUpperCase() + text3.substr(7);
console.log(t1);
// ans: Hello World