let x=10;
for(let i=1;i<=x;i++){
    console.log("hello");
}
let sum=100;
 
 for(let i=1;i<=sum;i++){
    console.log("sum : ",sum);

 }//while loop
 let i=1;
 while(i<=100){
console.log("i : ",i);
i++;
 }
//do while loops 
let y=0;
 do{
    console.log("javaScript1");
    y++;
 }while(y<=50);
 
 //for-of-loop---> it is used to get the value from string ,arrays,set and map

 let user="shivu";
 let size=0;
for(let name of user){
console.log("letters of user name is ",name);
size++;
console.log("String size of ",size);
}



//for-in-loop---> it is used to get  keys from (property names) of an object 
/*
for(let key or ref in refName){
do some work
}
*/
//obejct 
let student={
    name:"shivu",
    age:23,
    collage:"BIET",
    cgpa:7.0,
}
for(let user/*=Anything*/ in student){//student is reference of object
console.log("student  : ",user,"is :" , student[user]);//to get ht e keys or values or ref
}


//practice quetions 1

for(let num=0;num<=100; num++){
    if(num%2!==0){
console.log("num : ",num);
}
}

//practice question 2

let gamenumber="20";
let usernumber=prompt("guess  the number : ");

while(usernumber!==gamenumber){
usernumber=prompt("you enter the wrong  number. guess again : ");
}
console.log("congrates");