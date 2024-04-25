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

function add() {
    console.log("add clicked")
}