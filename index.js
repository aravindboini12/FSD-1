console.log("javascript is connected")
document.write("printing the javaScript using document.write")
variables

var a="aravind"
console.log(a)
let b=10
console.log(b)
const c1="constant"
console.log(c1)

//re-initailzation 

var name="aravind"
name="surya"
console.log(name)

let num1=77
num1=23
console.log(num1)

const c="constant"
c="not a constant" //throws the error
console.log(c)

//re-declaration
var a=77
var a=65
console.log(a)

let str1 = "double quotes";
console.log(str1);
console.log(typeof(str1));

let str2 = 'single quotes';
console.log(str2);
console.log(typeof(str2));
let str3 = `template literals`;
console.log(str3);
console.log(typeof(str3));

let num = 10.345678;
console.log(num , typeof(num));

let bool = true;
console.log(bool , typeof(bool));

let A;
console.log(A , typeof(A));

let B = null;
console.log(B , typeof(B));