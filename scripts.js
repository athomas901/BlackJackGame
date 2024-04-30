
let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard

//Write the conditional according to these rules:

//if less than or equal to 20 -> "Do you want to draw a new card?"
//else if exactly 21 -> "Woohoo! You've got BlackJack!"
//else -> "You're out of the game!"

if (sum <= 20) {
    console.log("Do you want to draw a new card?")

} else if (sum ===21) {
    console.log("You've got BlackJack")
}else {
    console.log("You're out of the game!")
    isAlive =false
}

//04/29
//1. Create a variable called isAlive and assign it to true

let isAlive = True



//2. Flip its value to false in the appropiate code block

let isAlive = False

console.log(4 === 3)// False
console.log(5 > 2) //True
console.log(12 > 12)//False
console.log(3 < 0) //False
console.log(3 >= 3)//True
console.log(11 <= 11) //True
console.log(3 <= 2) //False

let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

//Declare a variable called message and assign its value to an empty string
let message = ""

//Reassign the message variable  to the string we're logging out

if (sum <= 20) {
    message = "Do you want to draw a new card"
}else if (sum ===21) {
    message ="Wohoo! You've got Blackjack!"
    hasBlackJack = true
}else {
    message = "You're out of the game!"
    isAlive = false
}

//log it out
console.log(message)