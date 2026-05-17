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
//Question
let objStudent = {
    name: "Abdullah Nasir",
    age: 21,
    courses: ["COAL","LA","MVC"],
    greet (){
        console.log(`Hi, I am ${this.name} and I'm studying ${this.courses.length} courses`);
    }
}
objStudent.university = "FAST NUCES";
objStudent.greet();

for (let key in objStudent){
    console.log(`Student Properties:  ${key} : ${objStudent[key]}` )
}

//Question 
let bankAccount = {
    owner: "Abdullah",
    balance: 1000,
    transactions: [],
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(`Deposited: ${amount}`);
    },
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            this.transactions.push(`Withdrawn: ${amount}`);
        }
    },
    getStatement() {
        console.log("--- Statement ---");
        for (let transaction of this.transactions) {
            console.log(transaction);
        }
    }
};

bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.withdraw(2000);
bankAccount.getStatement();

//Libarary Question
let Library = {
    name: "DHA Library",
    books: [
    { title: "Atomic Habits", author: "James Clear",    isAvailable: true },
    { title: "1984",          author: "George Orwell",  isAvailable: true },
    { title: "Alchemist",     author: "Paulo Coelho",   isAvailable: false }
    ],
    listBooks(){
        for(let book of this.books){
            console.log(`Title: ${book.title} & Availabilty: ${book.isAvailable}`)
        }
    },
    borrowBook(title){
        for (let book of this.books){
            if(book.title == title){
                book.isAvailable=false;
                console.log(`Book title found : ${book.title}`)
            }
            else if(book.title != title){
                console.log(`Sorry, ${book.title} not found.`)
            }
            else{
                console.log(`Book not found`)
            }
        }
    }

}
Library.listBooks();
Library.borrowBook(1984);

//Arrays of Objects
let todos = [
    {
        id:1,
        text: `Hello World`,
        isCompleted: true
    },
    {
        id:2,
        text: `Meeting with the boss`,
        isCompleted: true
    },
    {
        id:3,
        text: `Dentist appt`,
        isCompleted: false
    }

]
console.log(todos[1].text)
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);