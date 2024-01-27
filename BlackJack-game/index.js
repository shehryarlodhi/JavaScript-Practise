let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let hasblackjack = false;
let isalive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let cards = [firstCard, secondCard];
let player = {
    name: "Shehryar Lodhi",
    chips: 150
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    renderGame();
}

function getRandomCard() {
    let random_card = Math.floor(Math.random() * 13);
    if (random_card === 1){
        return 11;
    }
    else if(random_card > 10){
        return 10;
    }
    else{
        return random_card;
    }
    return random_card;
}

function renderGame() {
    if(sum <= 20){
        message = "Do you want to draw a new card??";
        messageEl.textContent = message;
    }
    else if(sum === 21){
        message = "Nice! You've got Blackjack!";
        messageEl.textContent = message;
        hasblackjack = true;
    }
    else{   
        message = "Oops..! You're out of the game!";
        messageEl.textContent = message;
        isalive = false;
    }

    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
        sumEl.textContent = "Sum: " + sum;
    }
    

}
function newCard() {
    if (isalive === true && hasblackjack === false){
        let newcard = getRandomCard();
        cards.push(newcard);
        sum = sum + newcard;
        renderGame();
    }
}

