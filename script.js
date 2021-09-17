document.addEventListener("DOMContentLoaded", () => {

let cardList = [
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
];
cardList.sort(function() {
    return (0.5-Math.random());
});

let flippedCards = [];
let flippedCardsIds = [];

const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
const attemptsDisplay = document.querySelector("#attempts");
const messageDisplay = document.querySelector("#message");
const Button = document.querySelector(".button");
const btntxt = document.querySelector("#buttontxt")
Button.addEventListener("click", btn);
let btn_flag = 0;

messages = ["", " You found a match, Keep going! ", " Memorise and Try again! ", " Congrats! You found them all ", " Welcome to The Memory Game "];
let score = 0;
let attempts = 0;
messageDisplay.textContent=messages[4];

function btn() {
    if (btn_flag === 0) {
        createGrid();
        btn_flag=1;
        btntxt.textContent = "Restart Game";
    } else if (btn_flag===1) {
        window.location.reload();
    }
}

function createGrid() {
    for (let i=0; i<12; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.jpg");
        card.setAttribute("id", i);
        card.setAttribute("style", "width:25%");
        card.addEventListener("click", flip);
        grid.appendChild(card);
    }
}

function validation() {
    const cards = document.querySelectorAll("img");
    let firstSel = flippedCards[0].name;
    let secondSel = flippedCards[1].name;

    if (flippedCards.length == 3) {
        cards[flippedCardsIds[2]].setAttribute("src", "images/blank.jpg")
    }

    if (firstSel == secondSel) {
        messageDisplay.textContent = messages[1];
        cards[flippedCardsIds[0]].setAttribute("src", "images/white.png");
        cards[flippedCardsIds[1]].setAttribute("src", "images/white.png");
        score ++;
    } else {
        messageDisplay.textContent = messages[2];
        attempts++;
        cards[flippedCardsIds[0]].addEventListener("click", flip);
        cards[flippedCardsIds[1]].addEventListener("click", flip);
        cards[flippedCardsIds[0]].setAttribute("src", "images/blank.jpg");
        cards[flippedCardsIds[1]].setAttribute("src", "images/blank.jpg");
    }

    scoreDisplay.textContent = score;
    attemptsDisplay.textContent = attempts;
    flippedCards =[];
    flippedCardsIds=[];
    if (score === cardList.length/2){
        messageDisplay.textContent = messages[3];
    }
}

function flip() {
    let cardID = this.getAttribute("id");
    this.setAttribute("src", cardList[cardID].img)
    this.removeEventListener("click", flip);
    flippedCards.push(cardList[cardID]);
    flippedCardsIds.push(cardID);
    
    if (flippedCards.length == 2) {
        setTimeout(validation,500);
    } else {
        messageDisplay.textContent = messages[0]
    }
}
});