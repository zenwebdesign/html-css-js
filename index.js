// alert('scriptul a rulat!')


const number1 = 12;
const number2 = 10;
console.log(number1 == number2);

let numar = 20
numar -=30
console.log(numar)
console.log("linie1")

const age=151


if(age<18){
    console.log("you are under aged")
} else {
    console.log("you are an adult")
}

const people = ["Adi" , "Mihai" , "Andreea" , "Ovidiu"];

for (i=0; i<people.length; i++)
{
    console.log(people[i]);
}

for (i=people.length; i>=0; i--)
{
    console.log(people[i]);
}


let number = 1;

while(number < 10)
{
    console.log(number);
    number++;
}


do
{
    number--;
    console.log(number);

} while(number > 1);


switch(number)
{
case 10:
    console.log("Number este 10");
    break;
case 2:
    console.log("Number esre 2");
    break;
    default:
        console.log("number ese de fapt " + number);
}


function displayPersonDetails(myName, age, email)
{
    console.log("My name is: " + myName);
    console.log("My age is: " + age);
    console.log("My email adress is: " + email);
}

displayPersonDetails("Adi", "20", "a@a.com");


function function1(callback)
    {
        console.log("Processing..");
        callback();
    }
function1(() => console.log("Functia a fost executata"));


// Clase

class person
{

    constructor(firstName, lastName, dateOfBirth)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
    calculateAge()
    {
        return new Date().getFullYEar() - this.dateOfBirth.getFullYEar();

    }
}


var p = new person("Adrian", "Andreea", new Date("11-11-2022"));
console.log(p.dateOfBirth);


var h1 = document.querySelector("h1");
console.log(h1.outerHTML);

var h2 = document.querySelector("#fifth-title");
console.log(h2.outerText);

var h3 = document.querySelector(".title");
console.log(h3.outerText);

var h4 = document.querySelectorAll(".title");
console.log(h4);

var query = document.getElementById("fifth-title");
console.log(query);

var query2 = document.getElementsByClassName("first-title");
console.log(query2);

var query3 = document.getElementById("fifth-title");
query3.append(" Buna ziua!")
console.log(query3.innerText);


var query4 = document.getElementById("fifth-title");
query4.innerHTML += "<p id='text'>Buna ziuaa</p>"
console.log(query4.innerHTML);
var hello = document.getElementById("text");
query4.removeChild(hello);

console.log("============");
 
// var query = document.getElementById("title");
// query.innerHTML += "<p>Buna ziua</p>"
// console.log(query.innerHTML);

var query = document.getElementById("title");
query.innerHTML += "<p id=text>Buna ziua</p>"
console.log(query.innerHTML);
var hello = document.getElementById("text")
// query.removeChild(hello)


hello.style.color = "red"


var submitButton = document.getElementById("btn-submit");
submitButton.addEventListener("click", function(e){
    console.log("button clicked");
});

var submitButton2 = document.getElementById("btn-submit");
submitButton2.addEventListener("click", onBtnClick);
function onBtnClick(e){
alert("Button has been clicked");
}
