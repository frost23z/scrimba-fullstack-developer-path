const player = {
	name: "Gamer",
	chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const playerEl = document.getElementById("player-el")

playerEl.textContent = `${player.name}: $${player.chips}`

function getRandomCard() {
	const randomNumber = Math.floor(Math.random() * 13) + 1
	if (randomNumber > 10) {
		return 10
	} else if (randomNumber === 1) {
		return 11
	} else {
		return randomNumber
	}
}

document.getElementById("start-game-btn").addEventListener("click", () => {
	isAlive = true
	const firstCard = getRandomCard()
	const secondCard = getRandomCard()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	renderGame()
})

function renderGame() {
	cardsEl.textContent = "Cards: "
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += `${cards[i]} `
	}

	sumEl.textContent = `Sum: ${sum}`
	if (sum <= 20) {
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		message = "You've got Blackjack!"
		hasBlackJack = true
	} else {
		message = "You're out of the game!"
		isAlive = false
	}
	messageEl.textContent = message
}

document.getElementById("new-card-btn").addEventListener("click", () => {
	if (isAlive === true && hasBlackJack === false) {
		const card = getRandomCard()
		sum += card
		cards.push(card)
		renderGame()
	}
})
