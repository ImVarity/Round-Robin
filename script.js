let game;
names = {}
wins = {}
losses = {}
ties = {}

crossTableData = {}


let Players;
let playerCount = 1
let currentRound = 1
let totalRounds = Players - 1



fourGame = {
    "round1": [['1', '4'], ['2', '3']],
    "round2": [['4', '3'], ['1', '2']],
    "round3": [['2', '4'], ['3', '1']]
}
sixGame = {
    "round1": [['6', '1'], ['5', '2'], ['3', '4']],
    "round2": [['1', '2'], ['5', '3'], ['4', '6']],
    "round3": [['3', '1'], ['2', '6'], ['4', '5']],
    "round4": [['1', '4'], ['3', '2'], ['6', '5']],
    "round5": [['5', '1'], ['2', '4'], ['6', '3']] 
}

// check for whites and black
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
const form = document.querySelector('form')
const arrow = document.getElementById('next')



form.onsubmit = () => handleSubmit(event)
arrow.addEventListener('click', () => roundDisplay(currentRound))




function setWinner(e) {

    let person;
    let buddy;

    if (e.target.classList.item(1) == 'top')
    {
        person = e.target
        buddy = e.target.nextSibling.nextSibling
    }
    else if (e.target.classList.item(1) == 'bottom')
    {
        person = e.target
        buddy = e.target.previousSibling.previousSibling
    }


    let keyTop = `${person.classList.item(2)}`
    let keyBottom =`${buddy.classList.item(2)}`

    // Clicked a card which created a tie
    if ((!person.classList.contains('winner') && buddy.classList.contains('winner'))){
        e.target.classList.toggle('winner')
        checkTie(person, keyTop, buddy, keyBottom, true)
        handleTie(person, buddy, keyTop, keyBottom, true)
    }

    // Already was a tie and unclicked a clard
    else if ((person.classList.contains('tie') && buddy.classList.contains('tie'))) {
        e.target.classList.toggle('winner')
        checkTie(person, keyTop, buddy, keyBottom, false)
        handleTie(person, buddy, keyTop, keyBottom, false)
    }
    
    // Clicked a card that was unselected
    else if (!e.target.classList.contains('winner')) {
        e.target.classList.toggle('winner')
        updateWins(person, buddy, keyTop, keyBottom, true)

    }
    // Clicked a card that was selected
    else if (e.target.classList.contains('winner')) {
        e.target.classList.toggle('winner')
        updateWins(person, buddy, keyTop, keyBottom, false)
    }



}

function updateWins(person, buddy, key, keyBuddy, selected) {
    const updatePerson = person.querySelector('.wins')
    const updateBuddy = buddy.querySelector('.losses')
    if (selected)
    {
        wins[key] += 1
        losses[keyBuddy] += 1
    }
    else
    {
        wins[key] -= 1
        losses[keyBuddy] -= 1
    }
    
    updatePerson.textContent = `${wins[key]}`
    updateBuddy.textContent = `${losses[keyBuddy]}`

    
}


function handleTie(person, buddy, key, keyBuddy, tie) {

    if (tie) {
        const personLosses = person.querySelector('.losses')
        const buddyWins = buddy.querySelector('.wins')
        const personTies = person.querySelector('.ties')
        const buddyTies = buddy.querySelector('.ties')
    
        losses[key] -= 1
        wins[keyBuddy] -= 1
        ties[key] += 0.5
        ties[keyBuddy] += 0.5
        
        personLosses.textContent = `${losses[key]}`
        buddyWins.textContent = `${wins[keyBuddy]}`
        personTies.textContent = `${ties[key]}`
        buddyTies.textContent = `${ties[keyBuddy]}`

    }
    
    else {
        const personLosses = person.querySelector('.losses')
        const buddyWins = buddy.querySelector('.wins')
        const personTies = person.querySelector('.ties')
        const buddyTies = buddy.querySelector('.ties')
    
        losses[key] += 1
        wins[keyBuddy] += 1
        ties[key] -= 0.5
        ties[keyBuddy] -= 0.5
        
        personLosses.textContent = `${losses[key]}`
        buddyWins.textContent = `${wins[keyBuddy]}`
        personTies.textContent = `${ties[key]}`
        buddyTies.textContent = `${ties[keyBuddy]}`
    }
}




function checkTie(person, key, buddy, keyBuddy, selected) {

    person.classList.toggle('tie')
    buddy.classList.toggle('tie')
    if (selected) {
        crossTableData[`${names[`${key}`]}`].push('0.5')
        crossTableData[`${names[`${keyBuddy}`]}`].push('0.5')
    }




        

}

function cardDisplay(player) {
    let key = `${player.classList.item(2)}`
    const name = document.createElement('div')
    const score = document.createElement('div')
    const winbox = document.createElement('div')
    const winCount = document.createElement('div')
    const losebox = document.createElement('div')
    const lossCount = document.createElement('div')
    const tiebox = document.createElement('div')
    const tieCount = document.createElement('div')

    name.addEventListener('click', e => e.stopPropagation())
    winbox.addEventListener('click', e => e.stopPropagation())
    winCount.addEventListener('click', e => e.stopPropagation())
    losebox.addEventListener('click', e => e.stopPropagation())
    lossCount.addEventListener('click', e => e.stopPropagation())
    tiebox.addEventListener('click', e => e.stopPropagation())
    tieCount.addEventListener('click', e => e.stopPropagation())


    winbox.style.cssText = "pointer-events: none;"
    losebox.style.cssText = "pointer-events: none;"
    winCount.style.cssText = "pointer-events: none;"
    lossCount.style.cssText = "pointer-events: none;"
    score.style.cssText = "pointer-events: none;"
    tiebox.style.cssText = "pointer-events: none;"
    tieCount.style.cssText = "pointer-events: none;"


    name.className = 'name'
    winCount.className = 'wins'
    lossCount.className = 'losses'
    tieCount.className = 'ties'

    score.style.cssText = "display: flex; justify-content: space-around; align-items: center; width: 100%;"
    winbox.style.cssText = "display: flex; justify-content: center; flex-direction: column; align-items: center; font-size: 12px"
    losebox.style.cssText = "display: flex; justify-content: center; flex-direction: column; align-items: center; font-size: 12px"
    tiebox.style.cssText = "display: flex; justify-content: center; flex-direction: column; align-items: center; font-size: 12px"

    winbox.textContent = "WINS"
    winCount.textContent = wins[`${key}`]
    losebox.textContent = "LOSS"
    lossCount.textContent = losses[`${key}`]
    tiebox.textContent = "DRAW"
    tieCount.textContent = ties[`${key}`]


    name.textContent = names[key]


    player.appendChild(name)


    winbox.appendChild(winCount)
    losebox.appendChild(lossCount)
    tiebox.appendChild(tieCount)


    score.append(winbox)
    score.append(tiebox)
    score.append(losebox)

    player.appendChild(score)



}



function roundDisplay(roundNum) {

    console.log(crossTableData)

    toggleRound()

    let nextRoundBtn = document.getElementById('next')

    if (roundNum == (Object.keys(names).length - 1)){
        nextRoundBtn = document.createElement('button')
        nextRoundBtn.classList.add('statButton')
        nextRoundBtn.addEventListener('click', endScreen)
        nextRoundBtn.textContent = "⬇"
    }

    const title = document.createElement('div')
    const whiteTitle = document.createElement('div')
    const blackTitle = document.createElement('div')
    const round = document.createElement('section')

    whiteTitle.className = "white"
    blackTitle.className = "black"

    whiteTitle.textContent = "WHITE"
    blackTitle.textContent = "BLACK"

    title.className = "roundTitle"
    title.textContent = `ROUND ${roundNum}`

    round.classList.add('round', 'background')
    round.setAttribute('id', 'current')

    round.appendChild(nextRoundBtn)
    round.appendChild(title)
    round.appendChild(whiteTitle)


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

    }
    round.appendChild(blackTitle)
    document.body.appendChild(round)
    randomBackground(round)
    nextPage()
}



function endScreen() {
    toggleRound()
    const endScreen = document.createElement('section')
    endScreen.classList.add('round', 'statBackground')
    endScreen.setAttribute('id', 'current')
    const statBox = document.createElement('div')
    statBox.className = "statBox"
    const title = document.createElement('div')
    title.className = "statTitle"
    title.textContent = "STATISTICS"

    let winner = []
    let winCount = 0
    let lossCount;

    for (let key = 1; key <= Players; key++) {
        let nameText = names[`${key}`]
        let winsText = wins[`${key}`]
        let lossesText = losses[`${key}`]

        const card = document.createElement('div')
        const crown = document.createElement('div')
        const playerName = document.createElement('div')
        const playerWins = document.createElement('div')
        const playerLosses = document.createElement('div')


        playerName.textContent = `${nameText}`
        playerWins.textContent = `${winsText}`
        playerLosses.textContent = `${lossesText}`


        playerWins.style.cssText = "color: gold;"
        playerLosses.style.cssText = "color: red;"

        card.classList.add('statCard')


        if (winsText > winCount) {
            winCount = winsText
            lossCount = lossesText
            if (winner.length > 0) {
                const current = statBox.querySelector('.crown')
                current.classList.remove('crown')
            }
            winner = []
            crown.classList.add('crown')
            winner.push(card)
        }
        else if (winsText == winCount) {
            if (lossesText > lossCount) {
                if (winner.length > 0) {
                    const current = statBox.querySelector('.crown')
                    current.classList.remove('crown')
                }
                winner = []
                crown.classList.add('crown')
                winner.push(card)
            }
        }



        card.appendChild(crown)
        card.appendChild(playerName)
        card.appendChild(playerWins)
        card.appendChild(playerLosses)
        

        statBox.appendChild(card)

    }
    endScreen.appendChild(title)
    endScreen.appendChild(statBox)
    document.body.appendChild(endScreen)
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



function handleSubmit(event) {
    event.preventDefault()
    const userInput = document.getElementById('myInput');
    const playerList = document.createElement('div')

    names[`${playerCount}`] = `${userInput.value.toUpperCase()}`
    wins[`${playerCount}`] = 0
    losses[`${playerCount}`] = 0
    ties[`${playerCount++}`] = 0
    crossTableData[`${userInput.value.toUpperCase()}`] = []

    playerList.classList.add('listPlayer')
    playerList.addEventListener('click', removePlayer)
    playerList.textContent = `${userInput.value}`



    list.appendChild(playerList)
    userInput.value = ''



    switch(Object.keys(names).length) {
        case 4:
            Players = Object.keys(names).length
            game = fourGame
            break;
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
      }

    
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
            delete losses[key]
            return
        }
    }
}



function randomBackground(page) {
    const backgroundImageList = [
        'imgs/nocolorcat.jpeg',
        'imgs/catvcat.jpeg',
        'imgs/catdog.jpeg',
        'imgs/catstare.jpeg'
      ]
    

    const randomImageIndex = Math.floor(Math.random() * backgroundImageList.length)
    const randomBackgroundImage = `url(${backgroundImageList[randomImageIndex]})`
    page.style.backgroundImage = randomBackgroundImage
}

