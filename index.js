let firstCard = 3
let secondCard = 5
let cards = [firstCard, secondCard]
//cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    if(sum <= 20){
        message = "Would you like to draw again?"
    }
    else if (sum === 21){
        message = "BLACKJACK!"
        hasBlackJack = true
    }
    else if (sum > 21) {
        message = "sorry,play again?"
        isAlive = false
    }
    messageEl.textContent=message
    sumEl.textContent= "Sum: "+sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard


    function startGame() {

            renderGame()
    }
    

}NewGame()
function renderGame() {
  console.log("Drawing a new card from the deck!")
  let card = 7
  sum += card
  startGame()
}

//2. Refer to the cards array when rendering out the cards

cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
sumEl.textContent = "Sum: " + sum
if (sum <= 20) {
    message = "Do you want to draw a new card?"
    }else if (sum ===21)
    message= "You've got Blackjack!"