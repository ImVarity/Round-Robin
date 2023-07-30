let Players = 6


sixGame = {
    "round1": [['6', '1'], ['2', '5'], ['3', '4']],
    "round2": [['1', '2'], ['3', '5'], ['4', '6']],
    "round3": [['1', '3'], ['2', '6'], ['4', '5']],
    "round4": [['1', '4'], ['2', '3'], ['5', '6']],
    "round5": [['1', '5'], ['2', '4'], ['3', '6']]
}





function roundDisplay(roundNum) {

    const round = document.createElement('div')
    round.classList.add('round', 'current')

    for (let match = 0; match < 3; match++) {
        const pOne = document.createElement('div')
        pOne.textContent = "WHAT"
        pOne.classList.add('card', `${sixGame[`round${roundNum}`][match][0]}`)
        const pTwo = document.createElement('div')
        pTwo.textContent = "WHAT"
        pTwo.classList.add('card', `${sixGame[`round${roundNum}`][match][1]}`)


        round.appendChild(pOne)
        round.appendChild(pTwo)
    }

    document.body.appendChild(round)
}







window.onload = () => roundDisplay(1)

