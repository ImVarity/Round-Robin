let Players = 6
let playerCount = 1

names = {}

sixGame = {
    "round1": [['6', '1'], ['2', '5'], ['3', '4']],
    "round2": [['1', '2'], ['3', '5'], ['4', '6']],
    "round3": [['1', '3'], ['2', '6'], ['4', '5']],
    "round4": [['1', '4'], ['2', '3'], ['5', '6']],
    "round5": [['1', '5'], ['2', '4'], ['3', '6']]
}


const body = document.querySelector('body')
const opener = document.getElementById('opener')
const inputElement = document.getElementById('myInput');
const list = document.getElementById('list')
const form = document.querySelector('form')
const arrow = document.createElement('button')



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


function removePlayer(e) {
    const removePlayer = e.target
    const name = removePlayer.textContent.toUpperCase()
    removePlayer.remove()
    playerCount--
    for (const key in name) {
        if (name.hasOwnProperty(key) && name[key] == name) {
            delete name[key]
            return
        }
    }

}



function handleSubmit(event) {
    event.preventDefault()
    const userInput = document.getElementById('myInput');
    if (playerCount <= Players) {
        names[`${playerCount++}`] = `${userInput.value.toUpperCase()}`
        const playerList = document.createElement('div')
        playerList.classList.add('listPlayer')
        playerList.addEventListener('click', removePlayer)
        playerList.textContent = `${userInput.value}`
        list.appendChild(playerList)
        console.log(names)
    }
    userInput.value = '';
  }



