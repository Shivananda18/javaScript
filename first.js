console.log("hello javascript");
 let name="shivu";
  let name1="pradeep";
  // let is used to declare variable in block scope

  // const is used to declare variable in block scope and it is constant variable
  const y=BigInt(554);
 
//var is used to declare variable in function scope or like static variable

//object creation using object varible
var student={
    Name:"shivu",
    age:22,
    email :"shivu@example.com"

} 



// type of outputs
age=student.age+1;
console.log(age)+1;
anything=student.Name.toLocaleUpperCase();
console.log(anything);
student.email=student.email.replace("shivu@example.com", "shiva@example.com");
console.log(student["email"]);
student.Name="pradeep";
Name=student.Name.replace("pradeep","giri");
console.log(Name);