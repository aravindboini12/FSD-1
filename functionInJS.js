// function isPalindrome(str){
//     let revStr="";
//     for(let i=str.length-1;i>=0;i--){
//         revStr +=str[i];
//     }
//     if(str==revStr){
//         console.log("Palindrome");
//     }
//     else{
//         console.log("Not a Palindrome");
//     }
// }

// isPalindrome("madam")

// let a=function(){
//     console.log("this is anonymus funtions executimg using function expression")
// }
// a()

// IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )();

//arrow function
// let x=_=>{console.log("this arrow function");};
// x();

// let x=()=>{console.log("this arrow function");};
// x();

// let x=_=>console.log("this arrow function");
// x();

// implicit and exlicity
// function demo(name){
//     return name //!explicity
// }
// console.log("my name is ",demo("Aravind"));

let name=(names)=> names;
console.log(name("surya"));//implicit return