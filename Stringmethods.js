/*
let name3="     hello javaScript    "; 
 name4=name3.toUpperCase();
 console.log(name4);

 name5=name3.toLocaleLowerCase();
 console.log(name5);
console.log(name3.trim());
 //trim-->remove the whiteSpace

 //methods

 /*
 slice -->return part of String 
 str.slice(start,end?)--->return part of String and end index not include 
 */
/*
let str1="cwjvnv";
let str2="shivu";
console.log(str1.slice(0,4));
console.log(str1.concat(str2));
console.log(str2.concat(str1));//joins word with str1
let concat=str1+str2;
console.log(concat);//concatination

console.log(str2.replace("u","a"));// 'u' replace with 'a' Syntax-->ref.replace(seachval,newval)

let str3="this is javaScript";
console.log(str3.charAt(6));// syntax-->ref.charAt(idx)

*/

let fullName=prompt("enter your Full Name without spaces");
console.log("@"+fullName+fullName.length);//or

let fullName1=prompt("enter your full name without spaces");
let userName="@"+fullName1+fullName1.length;
console.log(userName);


