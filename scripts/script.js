function hideCards () {
	const cards = document.getElementById('community-cards').children
	for (let card of cards) {
		const hasClass = card.classList[1] == 'in-deck'
		if (!hasClass) card.classList.add('in-deck')
	}
}

function showCards () {
	const cards = document.getElementById('community-cards').children
	for (let card of cards) {
		const hasClass = card.classList[1] == 'in-deck'
		if (hasClass) card.classList.remove('in-deck')
	}
}

/**
 * @param id
 * Functie om kaart mee om te draaien.
 * id wordt gebruikt om de juiste kaart te vinden.
 */
function toggleCard (id) {
	const card = document.getElementById(`card-${id}`)
	card.classList.toggle('in-deck')
}