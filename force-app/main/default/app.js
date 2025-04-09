/*console.log("Hello Ranger");
console.error("This is an Error");
console.warn("This is warning");
console.count();*/



/*for(let i = 0; i < 10; i++)
{
    console.log(i);
}
console.log('Value of i is: ' + i);*/

/*const thisIsConstant = 10;
thisIsConstant=11;
console.log(thisIsConstant);*/

//Object creation
let myDetails = {
    name : "Surya1",
    age : 201,
    gender : "Male1",
    fees : 20001
};

//for of loop


for (let test of Object.keys(myDetails))
{
    console.log('keys are' , test);
}

for (let test1 of Object.values(myDetails))
{
    console.log(test1);
}

for (let [key,value] of Object.entries(myDetails))
{
    console.log('key is ' + key + ' value is ' + value);
}

//for in loop
let myFavCars = ["BMW", "Audi", "TATA"];
for(let test2 in myFavCars)
{
    console.log(`the car index is ${parseInt(test2) + 1} and the value is ${myFavCars[test2]}`);
}

let myDetails1 = {
    name : "Surya12",
    age : 2012,
    gender : "Male12",
    fees : 200012
};


for (let detailsCar in myDetails1)
{
    console.log('detailsCar', detailsCar);
}


for (let detailsCar1 in myDetails1)
{
    console.log('detailsCar1', myDetails1[detailsCar1]);
}


//Map Creation
let mysimpleMap = new Map();
mysimpleMap.set("name", "Surya");
mysimpleMap.set("age", "28");
mysimpleMap.set("gender", "Male");
mysimpleMap.set("fees", "20000");
console.log('mysimpleMap' , mysimpleMap);

let myMap = new Map([
    ['name', 'Surya'],
]);
console.log('My Map is' + myMap);//With the plus sign, the Map/Set object is converted to its default string representation, which is typically [object Map].

let favPlaces = new Map([
    ["Jaipur", "Palace"],
    ["Pune", "Fort"],
    ["Goa", "Beaches"],
])
console.log('My favPlaces are', favPlaces);
favPlaces.set("Gorakhpur", "GorakhNath Temple");
console.log('My favPlaces are after adding new value', favPlaces);
console.log('My favPlaces of Gorakhpur City is', favPlaces.get("Gorakhpur"));

for(let maptrav of favPlaces)
{
    console.log(`map values are ${maptrav}`);
}

for(let [mapKey, mapValue] of favPlaces)
{
    console.log(`map key is ${mapKey} and map value is ${mapValue}`);
}

for(let maptrav in favPlaces)
{
    console.log(`map are ${maptrav}`);// this will not print anything as the for in use to work on index/keys not on value directly so better to use array or object if you are using for in.
}

//Set example.

let mySet = new Set();
mySet.add("Surya");
mySet.add("Disha");
mySet.add("Surya");
console.log('mySet are', mySet);
console.log('mySet are with plus sign'+ mySet);// With the plus sign, the Set/Map object is converted to its default string representation, which is typically [object Map]. 
console.log(`has set use: ${mySet.has("Surya")}`);

for(let setValues of mySet)
{
    
    if(setValues == "Disha"){
    console.log(`Set values are ${setValues}`);}
}



const greeting = "Hello Rangers";
const subStr = greeting.substring(6,15);
console.log(greeting.length);
console.log(subStr.toUpperCase());

console.log(subStr.split(""));
console.log(greeting.split(""));

const student = {
    name : "Adhya",
    age : 5,
    gender : "Female",
    fees : undefined,
    datesWhenAbsent: [2, 5, 17, 19],
}
console.log(student);
console.log('Student Details are: ' + Object.entries(student));
console.log('Student Object Keys: ' + Object.keys(student));
console.log('Student Object values: ' + Object.values(student));

//
console.log(student.name);
console.log(student["name"]);

delete student.fees;
console.log(student);
console.log("Adhya was absent on -", student.datesWhenAbsent);


//Assignment:

const game = {
    team1 : "India",
    team2 : "Australia",
    players: [
        ['Dhoni',
        'Sharma',
        ],
        ['Wade',
        'Commins'
        ],
    ]
}

let teamIndia = game.team1;
let teamAustralia = game.team2;
let player1= game.players[0];
let player2= game.players[1];
console.log('Team is '+ teamIndia + ' Player details are ' + player1);
console.log('Player 2 is ' + player2);

console.log('Game is on', game);
// object contains array and other object

const student1 = {
    name : "Surya",
    age : 36,
    gender : "Male",
    fees : undefined,
    datesWhenAbsent: [2, 5, 17, 19],
    address : {
        street : "2nd street",
        pincode : "12345",
        city : "abc",
    },
};

//array to store multiple student objects (student object and other objects as well)
const student2 =[student, {
    name : "Disha",
    age : 34,
    gender : "Female",
    datesWhenAbsent: [2, 5, 10, 19],
    address : {
        street : "22nd street",
        pincode : "123345",
        city : "abrc",
    },
}]

console.log('line number 170',JSON.stringify(student2));

// String concatenation
console.log("My Name is " + student.name);
console.log(`My Name is ${student.name}`); //using template literals

const rollNumbers = [11, 12, 13, 14];
console.log(rollNumbers);
rollNumbers.push(15);
console.log("after push " + rollNumbers);

rollNumbers.shift(14);
console.log("after pop " + rollNumbers);

rollNumbers[2] = 22;
console.log(rollNumbers);

//Functions Creation
function greet() {
    console.log("Hello Rangers");
}

greet();

//2nd way to define the function with variable name
const greet1 = function(){
    console.log("Hello Rangers");
}

greet1();

//3rd way to define the function with arrow keyword

const greet2 = () => {
    console.log("Hello Rangers");
}

greet2();

//************* */

const studentDetails = [];

const addStudent = (sname, sage) => {
    const student4 = {
        name: sname,
        age: sage
    }
    studentDetails.push(student4);
}

addStudent('John',32);

console.log(JSON.stringify(studentDetails));
console.log(`Total Students: ${studentDetails.length}`);

//Function return values

const sum = (a, b) =>
{
    return a + b;
}
console.log(sum(4, 5));

const sum1 = (a, b) => (a + b); //singlie line function do not require return statement
console.log(sum1(4, 5));

//assignment opertor

const x = 9;
const y = 19;
let z = x + y;
console.log(z);

//compound operator
let x1 = 10;
x1 = x1 + 8; // x1+=8
console.log(x1);

const x2 = 8;
const y2 = 8;
console.log(x2 == y2);// will not give the accurate result, it will also give true in case if y2 value is "8"
console.log(x2 <= y2);// will not give the accurate result, it will also give true in case if y2 value is "8"
console.log(x2 === y2);// will give the accurate result, it will  give true in case if y2 value is "8"

//Airthmetic operators

let x3 = 10;
let y3 = 11;
console.log(x3++);
console.log(x3);
console.log(++y3);
console.log(y3);


let x4 = 10;
let y4 = 11;
console.log(x4--);
console.log(x4);
console.log(--y4);
console.log(y4);

//for loop example
let customers = ["surya", "Disha"];
console.log(`Length of customer is : ${customers.length}`);
for(let s = 0; s < customers.length; s++ )
{
    console.log(s);
    console.log(customers[s]);
}

//2nd type of declaring a for loop

for(let customer of customers)
{
    console.log(`customers are ${customer}`);
    console.log(`customers index ${customer[0]}`);
}

// Object

const customerDetails = [
    {
        name : "Disha"
    },
    {
        name : "Surya"
    },
    {
        name : "Adhya"
    },
];
for(let customerdetail of customerDetails)
{
    console.log(`customers are ${JSON.stringify(customerdetail)}`);
    console.log('customer Name is : ' + customerdetail.name);
}

//for in loop
for(let studentname in student1)
{
    console.log(studentname); //print the key
    console.log(`${student1[studentname]}`); //print the values
}

//forEach loop

customerDetails.forEach(function(customer)
{
    console.log(customer.name);
})

const name1 = new String("Surya");
console.log(name1);

//Constructor Function.

function DoctorDetails(docName, DOJ, HospitalName)
{
    this.name = docName;
    this.DOJ = DOJ;
    this.hosName = HospitalName;
}

const docDetails = new DoctorDetails("Surya", "28-06-1987", "Fortis");
console.log(docDetails);
console.log(docDetails.name);
console.log(docDetails.DOJ);
console.log(docDetails.hosName);

//class having constructor and function.
class DoctorDetails1{
    constructor(docName, DOJ, HospitalName)
    {
    this.name = docName;
    this.DOJ = DOJ;
    this.hosName = HospitalName;
}
greet () {
    console.log(`Hello ${this.name}`);
    console.log(`Your Date of Joining is: ${this.DOJ}`);
    console.log(`And Hospital Name is: ${this.hosName}`);
}

}

const doctorins = new DoctorDetails1("Surya", "28-06-1987", "Fortis");
doctorins.greet();

//Function Declaration

console.log(func1(2, 3)); // with the concept of hoisting, we can call the function before its declaration and it will give the output.

function func1(number1, number2)
{
    let sum = number1 + number2;
    return sum;
}





//function expression, when storing the function into the variable it will be called as function expression.

//console.log(func2(2, 4)); //this will give the error "Cannot access 'func2' before initialization"

let func2 = function(number1, number2)
{
    let sum = number1 + number2;
    return sum;
}

console.log(func2(2,5)); 

//arrow functions

let func3 = (number1, number2) =>
{
    let sum = number1 + number2;
    return sum;
}

console.log(func2(2,5)); 


let func4 = (username) => {

   return `welcome ${username} to learn JS`;

}  


console.log(func4("Surya")); 

//function not accepting any parameter

let messagetry = () => "welcome";
console.log(messagetry());

//callback functions

function welcomeMe(name, callMe) //here in callMe parameter , we will pass another function.
{
    console.log(`Hello ${name}`);
    callMe();
}

function greetMe()
{
    console.log("Welcome");
}

welcomeMe("Surya",greetMe);

function greetMeonece()
{
    console.log("Welcome");
}

console.log("Waiting for 1 sec");

function welcomeMetwice(name, callMe) //here in callMe parameter , we will pass another function.
{
    console.log(`Hello ${name}`);
    callMe();
}
function greetMe()
{
    console.log("Welcome Studio");
}
//console.log("Waiting for 3 sec");
//setTimeout(welcomeMetwice("Surya",greetMe), 3000);

setTimeout(() => {welcomeMetwice("Amit",greetMe), 3000});


setTimeout(() => {
    welcomeMetwice("Amit", greetMe);}
    , 3000);


    console.log("Waiting for 1 sec");

setTimeout(() => {greetMe();} , 1000);


const fruits = ["Apple", "Orange", "Mango", "Grapes", "Pineapple"];
console.log('index of tet', fruits.indexOf("Orange")); // 1

fruits.splice(2,0,"Test");
console.log('after adding 1 element' , fruits);//["Apple", "Orange","Test", "Mango", "Grapes", "Pineapple"];

console.log('index of Test', fruits.indexOf("Test")); // 2
console.log('index of Test', fruits.indexOf("Mango")); // 3

fruits.splice(2,1);
console.log(fruits);//["Apple", "Orange", "Mango", "Grapes", "Pineapple"];

fruits.splice(0,2);
console.log(fruits);//["Apple", "Orange", "Mango", "Grapes", "Pineapple"];


//forEach() method of Array --> it will take callback function (()) and accept 3 parametets, 
/*forEach((currItem, index, originalAray) => {

})*/

let bankingTransaction = [5000, -7000, 9000, -4000, 2000];
console.log('bankingTransaction', bankingTransaction);

bankingTransaction.forEach((currItem, index, array) => {

    console.log('currItem', currItem);
    console.log('index', index);
    console.log('array', array);
    
}

)

//map() method

let bankingTransaction1 = [5000, -7000, 9000, -4000, 2000];
console.log('bankingTransaction', bankingTransaction1);

let updatedArray = bankingTransaction1.map((currItem) => {

    return currItem / 10 ;
})

console.log(`after update currItem arrays are : ${updatedArray}`);

//difference between map and forEach method is , map return the value but forEach don't.


//get all the deposit from array , get all the withdraw from array

let bankTransaction2= [5000, -7000, 9000, -4000, 2000];
console.log('bankTransaction', bankTransaction2);


let positiveTransactions = bankTransaction2.filter((currItem) => currItem > 0);
let negativeTransactions = bankTransaction2.filter((currItem) => currItem < 0);

console.log('Positive transactions:', positiveTransactions);
console.log('Negative transactions:', negativeTransactions);


let fruits1 = ["Apple", "Orange", "Mango", "Grapes", "Pineapple"];
let fruits2 = fruits1.find((currItem) => currItem.length > 3 );
console.log('after find fruits2:', fruits2);

let bankTransaction4= [5000, -7000, 9000, -4000, 2000];
let bankTransaction5 = bankTransaction4.find((currItem) => currItem > 2000 );
console.log('after find bankTransaction5:', bankTransaction5);

let string1 = 'Hello World';
let string2 = string1.toUpperCase();
console.log('string1', string1);
console.log('string2', string2);


let string3 = string1.charAt(0).toUpperCase() + string1.slice(1);

console.log('string3', string3); 


let myString = "Hello";
let charAtNegative = myString.charAt(-1);  // ''
let charAtBeyondEnd = myString.charAt(10);  // ''

console.log('charAtNegative' , charAtNegative); // ''
console.log('charAtBeyondEnd' , charAtBeyondEnd); // ''

let arrayString = "Hello";
let result = [...arrayString].join(",");
console.log(result);
let arrayupdated = [...arrayString];
console.log(arrayupdated);


//occurance of char

let arrayString1 = "Hello";
let result1 = [...arrayString1].join(",");
console.log('result1 value ', result1);
console.log('array string1 value ', arrayString1);
// Creating an object to store occurrences of each character
let occurrences = {};

// Loop through the result array and count each character's occurrences
for (let eachchar of arrayString1) {
    console.log('eachchar ',eachchar );
    console.log('occurrences[eachchar]  ', occurrences[eachchar] );
    occurrences[eachchar] = occurrences[eachchar] ? occurrences[eachchar] + 1 : 1;
}

for (let eachchar in occurrences) {
    console.log(`${eachchar} occurrence is ${occurrences[eachchar]}`);
}
//console.log(occurrences);


//this code is to convert first char of each world in uppercase
let inputString = "Hello World";
let outputString = inputString.split(",");
console.log('inputString', outputString);
let outputString1 = inputString.charAt(0).toUpperCase() + inputString.slice(1);
console.log('outputString1', outputString1);


//this code will show the occurance of each char of input string

let inputStringtest2 = "Hello World";

let occurrencestest2 = {}; // Object to store the count of each character
let testchar2;

// Traverse through each character in the string and count the occurrences
for (testchar2 of inputStringtest2) {
    console.log('testchar2:', testchar2); // Log the current character
    console.log('occurrencestest2[testchar2]:', occurrencestest2[testchar2]); // Log the current count

    // Update the count for each character
    occurrencestest2[testchar2] = occurrencestest2[testchar2] ? occurrencestest2[testchar2] + 1 : 1;
}

console.log('Character occurrences2:', occurrencestest2);
