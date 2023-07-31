let Players = 6
let playerCount = 1


names = {
    "1": "GEORGE",
    "2": "BOB",
    "3": "RYAN",
    "4": "DAN",
    "5": "ANDREW",
    "6": "JOSH",
}

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



arrow.addEventListener('click', () => roundDisplay(1))



function setWinner(e) {
    e.stopPropagation()
    // Adds win to winner, adds lose to loser
    if (!e.target.classList.contains('winner')) {
        e.target.classList.toggle('winner')
        if (e.target.classList.contains('top'))
        {
            updateWins(e.target, true)
            updateLoses(e.target.nextSibling.nextSibling, true)
        }
        else if (e.target.classList.contains('bottom'))
        {
            updateWins(e.target, true)
            updateLoses(e.target.previousSibling.previousSibling, true)
        }
    }
    // Removes win from winner, removes lose from loser
    else {
        e.target.classList.toggle('winner')
        if (e.target.classList.contains('top'))
        {
            updateWins(e.target, false)
            updateLoses(e.target.nextSibling.nextSibling, false)
        }
        else if (e.target.classList.contains('bottom'))
        {
            updateWins(e.target, false)
            updateLoses(e.target.previousSibling.previousSibling, false)
        }
    }

}


function updateWins(player, selected) {
    const wins = player.querySelector('.wins')
    if (selected)
        wins.textContent = (+wins.textContent) + 1
    else 
        wins.textContent = (+wins.textContent) - 1
}



function updateLoses(player, selected) {
    const loses = player.querySelector('.loses')
    if (selected) 
        loses.textContent = (+loses.textContent) + 1
    else
        loses.textContent = (+loses.textContent) - 1
}




function cardDisplay(player) {
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
    wins.textContent = 0
    losebox.textContent = "LOSES"
    loses.textContent = 0



    name.textContent = names[`${player.classList.item(2)}`]


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
    const next = document.createElement('button')
    next.classList.add('nextPage')
    round.classList.add('round')
    round.setAttribute('id', 'current')


    for (let match = 0; match < Players / 2; match++) {
        const pOne = document.createElement('div')
        pOne.classList.add('card', 'top', `${sixGame[`round${roundNum}`][match][0]}`)
        pOne.addEventListener('click', setWinner)
        cardDisplay(pOne)
        

        const matchBox = document.createElement('div')
        matchBox.classList.add('matchBox')

        const vs = document.createElement('p')
        vs.textContent = "VS"

        const pTwo = document.createElement('div')
        pTwo.classList.add('card', 'bottom', `${sixGame[`round${roundNum}`][match][1]}`)
        pTwo.addEventListener('click', setWinner)
        cardDisplay(pTwo)

        matchBox.appendChild(pOne)
        matchBox.appendChild(vs)
        matchBox.appendChild(pTwo)
        round.append(matchBox)

    }
    
    round.appendChild(next)
    document.body.appendChild(round)

    nextPage()
}


function nextPage() {
    const current = document.getElementById('current')
    current.scrollIntoView({behavior: 'smooth'})
    
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



