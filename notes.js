//04/24
//Create two functions, add3Points() and remove1Point(), and have them
//add/remove points to/from the myPoints variable

function add3Points() {
    myPoints += 3
}

function remove1Points() {
    myPoints -+1
}

add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()
//Call the function to that the line below logs out 10
console.log(myPoints)

//Try to predict what each of the lines will log out
console.log("2" +2)//22
console.log(11+7)//18
console.log(6 +"5")//65
console.log("My points:" +5 +9)//"my points 59"
console.log(2+2)//4
console.log("11" + "14")//1114

//When the user clicks the purchase button, render out
//"Something went wrong, please try again" in the paragraph
//that has the id="error"

let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent= "Something went wrong please"
}

//example
let num1 = 8
let num2 = 2
document.getElementId("num1-el").textContent = num1
document.getElementId("num2-el").textContent = num2

//Create four functions: add(), subtract(), divide(), multiply()
//Call the corect function when the user clicks on one of the buttons
//Perform the given calculation using num1 and num2
//Render the result of the calculation in the paragraph with id="sum-el"

//E.g. if the user clicks on the "Plus" button, you should render
//"Sun: 10" (since 8 +2 =10) inside the paragraph woth the id= "sum-el"


let sumEl = document.getElementById("sum-el")
function add() {
    let result = num1+ num2
    console.log("add clicked")
}



// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation useing num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
// e.g if the user clicks on the "plus", you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
// let num1 = 8
// let num2 = 2
// document.getElementId("num1-el").textContent = num1
// document.getElementId("num2-el").textContent = num2
// let sumEl = document.getElementId("sum-el")
// function add(){
//     let result = num1 + num2
//     sumEl.textContent = "Sum: " + result
// }
// function subtract(){
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result
// }
// function divide(){
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result
// }
// function multiply(){
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// }



//04/25

//Create two variables, firstCard and secondCard.
//Set their values to a random number between 2-11

let firstCard = 7
let secondCard = 4

let sum = firstCard + secondCard
console.log(sum)
//Create a variable, sum, and set it to the sum of the two cards

if(sum < 21)  {
    console.log("Do you want to draw another card?")
} else if (sum === 21) {
    console.log(BlackJack)
} else if (sum > 21) {
    console.log ("You're out of the game")
}


//Check if the person is old enough to enter the nightclub (21)
//LOg a suitable message to the console in both cases

let age = 22

//if less than 21 -> "You can not enter the club!"
//else            -> "Welcome"


if (age <= 21) {
    console.log("you can't enter the club!")

}else {
    console.log("Welcome!")
}


//Check if the person is eligible for a birthday card from the King! (100)

let age = 100

//if less than 100      -> "Not eligible"
//else if exactly 100   -> "Here is your bday card from the King!"
//else                  -> ?Not eligible, you have already gotten one"

if (age < 100) {
    console.log("not eligible")

}else if (age === 100){
    console.log("Here is your card")

}else {
    console.log("Not eligible, you have already gotten one")
}


let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard

function startGame() {
    
if(sum < 20)  {
    console.log("Do you want to draw another card?")
} else if (sum === 21) {
    console.log(BlackJack)
} else if (sum > 21) {
    console.log ("You're out of the game")
}else {
    message ="You're out of the game"
    itsAlive = false
}

}