let game;
names = {}
wins = {}
loses = {}

copy = []



let Players;
let playerCount = 1
let currentRound = 1
let totalRounds = Players - 1


sixGame = {
    "round1": [['6', '1'], ['2', '5'], ['3', '4']],
    "round2": [['1', '2'], ['3', '5'], ['4', '6']],
    "round3": [['1', '3'], ['2', '6'], ['4', '5']],
    "round4": [['1', '4'], ['2', '3'], ['5', '6']],
    "round5": [['1', '5'], ['2', '4'], ['3', '6']]
}


eightGame = {
    "round1": [['1', '8'], ['2', '7'], ['3', '6'], ['4', '5']],
    "round2": [['8', '5'], ['6', '4'], ['7', '3'], ['1', '2']],
    "round3": [['2', '8'], ['3', '1'], ['4', '7'], ['5', '6']],
    "round4": [['8', '6'], ['7', '5'], ['1', '4'], ['2', '3']],
    "round5": [['3', '8'], ['4', '2'], ['5', '1'], ['6', '7']],
    "round6": [['8', '7'], ['1', '6'], ['2', '5'], ['3', '4']],
    "round7": [['4', '8'], ['5', '3'], ['6', '2'], ['7', '1']],
}



tenGame = {
    "round1": [['1', '10'], ['2', '9'], ['3', '8'], ['4', '7'], ['5', '6']],
    "round2": [['10', '6'], ['7', '5'], ['8', '4'], ['9', '3'], ['1', '2']],
    "round3": [['2', '10'], ['3', '1'], ['4', '9'], ['5', '8'], ['6', '7']],
    "round4": [['10', '7'], ['8', '6'], ['9', '5'], ['1', '4'], ['2', '3']],
    "round5": [['3', '10'], ['4', '2'], ['5', '1'], ['6', '9'], ['7', '8']],
    "round6": [['10', '8'], ['9', '7'], ['1', '6'], ['2', '5'], ['3', '4']],
    "round7": [['4', '10'], ['5', '3'], ['6', '2'], ['7', '1'], ['8', '9']],
    "round8": [['10', '9'], ['1', '8'], ['2', '7'], ['3', '6'], ['4', '5']],
    "round9": [['5', '10'], ['6', '4'], ['7', '3'], ['8', '2'], ['9', '1']]
    
    
}





const body = document.querySelector('body')
const opener = document.getElementsByClassName('opener')
const inputElement = document.getElementById('myInput')
const list = document.getElementById('list')
const form = document.querySelector('form')
const arrow = document.getElementById('next')






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





function endScreen() {
    const endScreen = document.createElement('section')
    endScreen.classList.add('round')
    
    for (let i = 1; i < Players; i++) {
        let nameText = names[`${i}`]
        let winsText = wins[`${i}`]
        let losesText = loses[`${i}`]


        const card = document.createElement('div')
        const name = document.createElement('div')
        const wins = document.createElement('div')
        const loses = document.createElement('div')

        name.textContent = nameText
        wins.textContent = winsText
        loses.textContent = losesText



        card.classList = "card"


        card.appendChild(name)
        card.appendChild(wins)
        card.appendChild(loses)



        endScreen.appendChild(card)

    }


    document.body.appendChild(endScreen)

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
    losebox.textContent = "LOSES"



    name.textContent = names[key]


    player.appendChild(name)

    winbox.appendChild(wins)
    losebox.appendChild(loses)

    score.append(winbox)
    score.append(losebox)

    player.appendChild(score)



}



function roundDisplay(roundNum) {

    const nextRoundBtn = document.getElementById('next')


    toggleRound()

    const round = document.createElement('section')
    round.appendChild(nextRoundBtn)

    round.classList.add('round', 'background')
    round.setAttribute('id', 'current')


    for (let match = 0; match < Players / 2; match++) {
        const pOne = document.createElement('div')
        const pTwo = document.createElement('div')
        const vs = document.createElement('p')

        pOne.classList.add('card', 'top', `${game[`round${roundNum}`][match][0]}`)
        pTwo.classList.add('card', 'bottom', `${game[`round${roundNum}`][match][1]}`)

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
        copy.push(pOne, pTwo)


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
    current.forEach((round) => {
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
    names[`${playerCount}`] = `${userInput.value.toUpperCase()}`
    wins[`${playerCount}`] = 0
    loses[`${playerCount++}`] = 0
    const playerList = document.createElement('div')
    playerList.classList.add('listPlayer')
    playerList.addEventListener('click', removePlayer)
    playerList.textContent = `${userInput.value}`
    list.appendChild(playerList)
    userInput.value = '';
    switch(Object.keys(names).length) {
        case 6:
            Players = Object.keys(names).length
            game = sixGame
            break;
        case 8:
            Players = Object.keys(names).length
            game = eightGame
            break;
        case 10:
            Players = Object.keys(names).length
            game = tenGame
            break;
        default:
            console.log("keep going")
      }

    
  }






