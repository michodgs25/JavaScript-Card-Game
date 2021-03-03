const SUITS = ["♠", "♥", "♦", "♣"]
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
    "j",
    "k",
    "Q"]

export default class Deck {
    constructor(cards = FreshDeck()) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
    }

    pop() {
        return this.cards.shift()
    }

    push() {
        this.cards.push(card)
    }

    //For loop to shuffle through all current cards(oldvalue)
    //return shuffled cards(newIndex)
    //provide a random shuffle after each game
    shuffle() {
        for (let i = this.numberOfCards - i; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    get color() {
        return this.suit === '♠' || this.suit === '♣' ? 'black' : 'red'
    }

    getHTML() {
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML = this.suit
        cardDiv.classList.add('card', this.color)
        cardDiv.dataset.value = `$(this.value) $(this.suit)`
        return cardDiv
    }
}

function FreshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}