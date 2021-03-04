// Define card suits& value, global as used throughout programme
const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
]
// create deck class& export to script.js file
export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }
    // returns number of cards in current deck
    get numberOfCards() {
        return this.cards.length
    }
    // removes card from display
    pop() {
        return this.cards.shift()
    }
    // adds card to the deck
    push(card) {
        this.cards.push(card)
    }
    // after each game, the deck is shuffled
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

// create card class& attach suits& values via a constructor
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    // call color function, use ternary operator to apply color black or red 
    get color() {
        return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
    }

    // call index.html document, target card div elements, attach colors
    getHTML() {
        const cardDiv = document.createElement("div")
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
    }
}

// create fresh deck function, after each game, fresh deck is called
function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}