let Players = 6
let playerCount = 1

playerNames = {}

sixGame = {
    "round1": [['6', '1'], ['2', '5'], ['3', '4']],
    "round2": [['1', '2'], ['3', '5'], ['4', '6']],
    "round3": [['1', '3'], ['2', '6'], ['4', '5']],
    "round4": [['1', '4'], ['2', '3'], ['5', '6']],
    "round5": [['1', '5'], ['2', '4'], ['3', '6']]
}



const inputElement = document.getElementById('myInput');
const submitButton = document.getElementById('submitButton');
const list = document.getElementById('list')
const form = document.querySelector('form')


form.onsubmit = () => handleSubmit(event)






function roundDisplay(roundNum) {

    const round = document.createElement('div')
    round.classList.add('round')

    for (let match = 0; match < Players / 2; match++) {
        const pOne = document.createElement('div')
        pOne.classList.add('card', `${sixGame[`round${roundNum}`][match][0]}`)

        const matchBox = document.createElement('div')
        matchBox.classList.add('matchBox')

        const vs = document.createElement('p')
        vs.textContent = "VS"

        const pTwo = document.createElement('div')
        pTwo.classList.add('card', `${sixGame[`round${roundNum}`][match][1]}`)

        matchBox.appendChild(pOne)
        matchBox.appendChild(vs)
        matchBox.appendChild(pTwo)
        round.append(matchBox)

    }
    document.body.appendChild(round)
}


function toggleRound() {
    round.classList.toggle('current')
}


function handleSubmit(event) {
    event.preventDefault()
    const userInput = document.getElementById('myInput');
    if (playerCount <= Players)
    {
        playerNames[`${playerCount++}`] = `${userInput.value.toUpperCase()}`
        const playerList = document.createElement('div')
        playerList.classList.add('listPlayer')
        playerList.textContent = `${userInput.value}`
        list.appendChild(playerList)
    }
    userInput.value = '';
  }


window.onload = () => {
    roundDisplay(1)
}

