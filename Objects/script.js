//Dot Notation
//Bracket Notation
//Using Variables to Access Object Properties
let ourDog = {
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything!"],
    "obj hello" : "hi" //if you want to access using bracket notation, you have to use quotes for the key name if it has spaces or special characters
}
ourDog.name = "Happy Camper"; //you can also update the value of an existing property using dot notation
console.log(ourDog.name);
console.log(ourDog["obj hello"]);

let testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
}
testObj[12] = "Elway"; //you can also update the value of an existing property using bracket notation
console.log(testObj[12]);
let playerNumber = 16;
let player=testObj[playerNumber];
console.log(player);

//Question
let student = {
    name: "Abdullah",
    age: 20,
    course: "Software Engineering",
    marks: [75,88,92,60,95]
}
console.log(student.name);
console.log(student["course"]);
console.log(student.marks[student.marks.length-1])
student.age=25;
console.log(student.age);
let key="course";
let courseName=student[key];
console.log(courseName);    