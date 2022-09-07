function toggleDeck () {
	const cards = document.getElementById('community-cards').children
	for (let card of cards) card.classList.toggle('in-deck')
}

function toggleCard (id) {
	const card = document.getElementById(`card-${id}`)
	card.classList.toggle('in-deck')
}