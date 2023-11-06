import { cardSet } from "./readfile.js";
const nextCardBtn = document.createElement("button");
const flipBtn = document.createElement("button");
var cardFront;
var cardBack;
var cardBreak;
var cardCounter = 0;
function checkForSet() {
    if (cardSet.complete != true)
        return;
    clearInterval(checkSetInterval);
    nextCardBtn.textContent = "Next Card";
    document.body.appendChild(nextCardBtn);
    flipBtn.textContent = "Flip";
}
function nextCard() {
    cardFront = document.createElement("p");
    cardBack = document.createElement("p");
    cardBreak = document.createElement("hr");
    cardFront.textContent = cardSet.cards[cardCounter].front;
    cardBack.textContent = cardSet.cards[cardCounter].back;
    cardCounter++;
    document.body.appendChild(cardBreak);
    document.body.appendChild(cardFront);
    document.body.appendChild(flipBtn);
}
function flipCard() {
    document.body.appendChild(cardBack);
    document.body.appendChild(nextCardBtn);
}
nextCardBtn.addEventListener("click", nextCard);
flipBtn.addEventListener("click", flipCard);
const checkSetInterval = setInterval(checkForSet, 10);
