console.log("HEllo world")
var number = 5; // in-line comment 

var Myname = "Beau"

Myname=8
 
let ourName = "freecodecamp"

const pi = 3.14
  
var a;
var b=2;
a=7;
b=a;
console.log(a)

var a=5;
var b=10;
var c= "I am a";

a=a+1;
b=b+5;
c=c+ "String";

 var studlyCapVar;
 studlyCapVar="Hello love";
 console.log(studlyCapVar)

 
 var studlyCapVar1;
 studlyCapVar1="Hello love1";
 console.log(studlyCapVar1)

 var sum=10+10;
 console.log(sum) //sum

 var diff=10-1;
 console.log(diff) //subtracting

 var mul=2*5;
 console.log(mul) //multiplication

 var div=5/5;
 console.log(div)  //Division

 var a=2;
 a++; //incrmeneting
 console.log(a)

 var b=3;
 b--; //Decrementing
console.log(b)

var Decimal=5.8; //Floating numbers

var product= 2.0 *2.5;
console.log(product) //Product

var quotient= 4.4 /2.0; // divide decimals

var remainder = 11 % 3; //remainder

//compound and augmented addition/subtraction/multiplication/division
var a=3;
var b=17;
var c=12;

a += 3; // same for subtraction a-=3
b +=9; //same for multiplication b*=3
c +=3; //same for divison c /=3

//String variables
var fname="Abdullah";
var lname=" Nasir";
var fullname= fname+ lname;
console.log(fullname)

//Escaping Literal quotes in strings

var myStr="I am a\" double quoted\"string inside\" double quotes";
console.log(myStr)

//Sting with single quote
var str='I am a good boy';
console.log(str)

//Escape sequences 
var str="FirstLine\n\tSecondLine\nThirdLine";
console.log(str)

//Concatenating
var ourStr="I have started doing " + "JS finally";
console.log(ourStr)

//Concatenating2
var st="hello"
st += "maisum"
console.log(st)

//calling variable
var ourNam ="freecodecamp";
var ourst="Hello, our name is" + ourNam + ", how are you?";
console.log(ourst)

//Length of variables
var count=0;
var onePiece="Zoro";
count=onePiece.length;

console.log(count)

//Bracket Notation for strings
var first="Hello";
var secondLetter=first[1];
console.log(secondLetter)

//Bracket for last character
var firstName="Ada";
var lastLetter=firstName[firstName.length-1]

//WordBlanks

function wordBlank(myNoun, myAdj, myVerb, myAdverb){

var result= `The ${myAdj} ${myNoun} ${myVerb} to the house ${myAdverb}`
return result;
}

console.log(wordBlank("Dog","big","ran","quickly"));

//Arrays 
let ourArray= ["Abdullah",25];

//Nested arrays
let nestedArr=[["Quincy",25],["Zoro",30]];

//Accessing array data
let Arr= [10,20,30];
let data= Arr[1];
console.log(data)

//Changing the value of the array using index
let ourArrays=[10,20,30,40];
ourArrays[2]=45;
console.log(ourArrays)

//2D arrays
let matrix=[[1,2,3],[4,5,6],[7,8,9]];
let da=matrix[1][2];
console.log(da)
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
//Queue (Stand in line)
function nextInLine(arr,item){
    arr.push(item);// add item at last
    return arr.shift();
}

let testArr=[1,2,3,4,5];

console.log("Before: "+ JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: "+ JSON.stringify(testArr));

//Boolean Values
function boolean(){
    return true;
}
//Conditional logic with if statement
function trueOrFalse(isItTrue){
    if(isItTrue){
        return "YEs , true";
    }
    return "No , false";
}
let u=trueOrFalse(true);
console.log(u);

//Equality operator
function testEqual(val){
    if(val == 12){
        return "Equal";
    }
    return "Not equal";
}
let p=testEqual(10);
console.log(p);

//strict equality operator
//3 === 3 true
//3 === '3' false

//practice of equality operator
function practiceVal(a,b){
    if(a==10 && b==20){//used and operator
        return "Pass";
    }
    return "Fail";
}
console.log(practiceVal(3,20));

//Inequality operator (!=)
//Greater than (>)
//Greater than equal to (>=)
function testGreaterThan(val){
    if(val >= 20){
        return "Greater than 20";
    }
    if(val >= 10){
        return "Greater than 10";
    }
    return "less than 10";
}
console.log(testGreaterThan(2));

//Less than (<)
//Less than equal to (<=)    

//Logical AND operator
//if(val <=20 && val >=30)

//Logical OR operator
function TestOR(val1,val2){
    if(val1 >= 10 || val2 <=20 ){
        return "Got the result";
    }
    return "No result";
}
console.log(TestOR(2,30));