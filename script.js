let Players = 6
let playerCount = 1
let currentRound = 1
let totalRounds = Players - 1

// names = {
//     "1": "GEORGE",
//     "2": "BOB",
//     "3": "RYAN",
//     "4": "DAN",
//     "5": "ANDREW",
//     "6": "JOSH",
// }

names = {}
wins = {}
loses = {}


sixGame = {
    "round1": [['6', '1'], ['2', '5'], ['3', '4']],
    "round2": [['1', '2'], ['3', '5'], ['4', '6']],
    "round3": [['1', '3'], ['2', '6'], ['4', '5']],
    "round4": [['1', '4'], ['2', '3'], ['5', '6']],
    "round5": [['1', '5'], ['2', '4'], ['3', '6']]
}




const body = document.querySelector('body')
const opener = document.getElementsByClassName('opener')
const inputElement = document.getElementById('myInput')
const list = document.getElementById('list')
const form = document.querySelector('form')
const arrow = document.querySelector('.nextPage')




form.onsubmit = () => handleSubmit(event)

arrow.addEventListener('click', () => roundDisplay(currentRound))




function setWinner(e) {

    let personTop;
    let personBottom;

    if (e.target.classList.item(1) == 'top')
    {
        personTop = e.target
        personBottom = e.target.nextSibling.nextSibling
    }
    else if (e.target.classList.item(1) == 'bottom')
    {
        personTop = e.target
        personBottom = e.target.previousSibling.previousSibling
    }


    let keyTop = `${personTop.classList.item(2)}`
    let keyBottom =`${personBottom.classList.item(2)}`

    if (!e.target.classList.contains('winner')) {
        e.target.classList.toggle('winner')
        updateWins(personTop, personBottom, keyTop, keyBottom, true)

    }
    else if (e.target.classList.contains('winner')) {
        e.target.classList.toggle('winner')
        updateWins(personTop, personBottom, keyTop, keyBottom, false)

    }

}






function updateWins(person, buddy, key, keyBuddy, selected) {
    const updatePerson = person.querySelector('.wins')
    const updateBuddy = buddy.querySelector('.loses')
    if (selected)
    {
        wins[key] += 1
        loses[keyBuddy] += 1
    }
    else
    {
        wins[key] -= 1
        loses[keyBuddy] -= 1
    }
    
    updatePerson.textContent = `${wins[key]}`
    updateBuddy.textContent = `${loses[keyBuddy]}`

    
}








function cardDisplay(player) {
    let key = `${player.classList.item(2)}`
    const name = document.createElement('div')
    const score = document.createElement('div')
    const winbox = document.createElement('div')
    const wins = document.createElement('div')
    const losebox = document.createElement('div')
    const loses = document.createElement('div')


    name.className = 'name'
    wins.className = 'wins'
    loses.className = 'loses'

    score.style.cssText = "display: flex; justify-content: space-around; align-items: center; width: 100%;"
    winbox.style.cssText = "display: flex; justify-content: center; flex-direction: column; align-items: center; font-size: 12px"
    losebox.style.cssText = "display: flex; justify-content: center; flex-direction: column; align-items: center; font-size: 12px"

    winbox.textContent = "WINS"
    wins.textContent = wins[key]
    losebox.textContent = "LOSES"
    loses.textContent = loses[key]



    name.textContent = names[key]


    player.appendChild(name)

    winbox.appendChild(wins)
    losebox.appendChild(loses)

    score.append(winbox)
    score.append(losebox)

    player.appendChild(score)



}



// still need to fix this
function showStats(e) {
    const score = e.target
}



function roundDisplay(roundNum) {
    toggleRound()

    const round = document.createElement('section')
    const nextBtn = document.createElement('button')
    round.classList.add('round', 'background')
    round.setAttribute('id', 'current')


    for (let match = 0; match < Players / 2; match++) {
        const pOne = document.createElement('div')
        const pTwo = document.createElement('div')
        const vs = document.createElement('p')

        pOne.classList.add('card', 'top', `${sixGame[`round${roundNum}`][match][0]}`)
        pTwo.classList.add('card', 'bottom', `${sixGame[`round${roundNum}`][match][1]}`)

        pOne.addEventListener('click', setWinner)
        pTwo.addEventListener('click', setWinner)

        const matchBox = document.createElement('div')
        matchBox.classList.add('matchBox')

        vs.textContent = "VS"

        matchBox.appendChild(pOne)
        matchBox.appendChild(vs)
        matchBox.appendChild(pTwo)
        round.append(matchBox)

        cardDisplay(pTwo)
        cardDisplay(pOne)
    }
    
    
    document.body.appendChild(round)

    nextPage()
}



function nextPage() {
    const current = document.getElementById('current')
    current.scrollIntoView({behavior: 'smooth'})
    currentRound++
    
}



function toggleRound() {
    const current = document.querySelectorAll('section')
    current.forEach((round) => 
    {
        if (round.id) 
            round.removeAttribute('id');
    })


}



function removePlayer(e) {
    const removePlayer = e.target
    const name = removePlayer.textContent.toUpperCase()
    removePlayer.remove()
    playerCount--
    for (const key in name) {
        if (name.hasOwnProperty(key) && name[key] == name) {
            delete name[key]
            delete wins[key]
            delete loses[key]
            return
        }
    }
}



function handleSubmit(event) {
    event.preventDefault()
    const userInput = document.getElementById('myInput');
    if (playerCount <= Players) {
        names[`${playerCount}`] = `${userInput.value.toUpperCase()}`
        wins[`${playerCount}`] = 0
        loses[`${playerCount++}`] = 0
        const playerList = document.createElement('div')
        playerList.classList.add('listPlayer')
        playerList.addEventListener('click', removePlayer)
        playerList.textContent = `${userInput.value}`
        list.appendChild(playerList)
    }
    userInput.value = '';
  }



