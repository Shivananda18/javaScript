let name="Hello";
console.log("lenght of String ",name.length);
console.log(name[0]);


let specialName='hello this is java Script';
console.log(typeof(specialName));

//templete literals---> a way of embedded expression in String
// String interpolation---> to create String by doing substitution of placeholder ,example---> 'String text ${expression} String text` 
let obj={
    item :"book",
    price :20,
}
console.log("the cost of ",obj.item,"is",obj.price,"rupeess");//old statement
let output=`the cost of ${obj.item} is ${obj.price} rupees`;//`this is templete literals`, and this called String interpolation
console.log(output);

//escape charecter(\n)--> new line 
let user="T \n Shivananda";
console.log(user);
//  \t--->tab Space
let user1="Revana \t siddappa";
console.log(user1);
