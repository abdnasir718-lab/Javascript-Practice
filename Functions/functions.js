 //Push() Adds element to the end of the array
 let ourArrs=["Stimpson",10];
 console.log(ourArrs)
 ourArrs.push(["happy","joy"]);
 console.log(ourArrs)

 //Pop() Remove LAst elemnet
 let mat=[1,2,3];
 mat.pop()
 console.log(mat)

 //shift() Removes the first element

let shifArr=["Stimpsons","J",["cats"]];
shifArr.shift();
console.log(shifArr)

//unshift() add an first element
let unshiftArr=["Stimpsons","C",["Hello"]];
unshiftArr.unshift("happy");
console.log(unshiftArr)

//List
let myList=[["cereal",3],["milk",2],["bananas",3],["juice",2]]  

//Functions
function ourFunction(){
    console.log("Hey");
}
ourFunction();

//Passing values to function with arguments 
function ourReuseFunction(a,b){
    console.log(a-b);
}
ourReuseFunction(10,4);

//Global Scope and functions (we declare it outside the fucntion,we can also define a variable without a let or var)

var myGlobal =10;

function fun1(){
    oopsGlobals=5;//variable without let or var
}
function fun2(){
    let output="";
if (typeof myGlobal != "undefined"){
    output += "myGlobal: " + myGlobal ;
}
if (typeof oopsGlobals != "undefined"){
    output += "\nOopsGlobal: " + oopsGlobals
}
console.log(output);
}
fun1();
fun2();

//Local scope 
function myLocalScope(){
    let myVar=5;
    console.log(myVar);
}
 myLocalScope();

 //Local and global within function
 let outerWear= "T-Shirt";//global variable

 function myOutfit(){
    let outerWear="Sweater";//local variable 
    return outerWear;
 }
console.log(myOutfit());
console.log(outerWear);

//Return value from function
function minusSeven(num){
    return num-7;
}
console.log(minusSeven(10));

//Assignment with return value

function processArg(num){
    return (num+3) / 5;
}
let processed=processArg(7);
console.log(processed)