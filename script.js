names = {}
wins = {}
losses = {}
ties = {}



let game;
let tableDataGrid;
let loc;
let Players;
let playerCount = 1
let currentRound = 1
let totalRounds = Players - 1



// GAMES

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
twelveGame = {
    "round1":  [['1' , '12'], ['2', '11'], ['3', '10'], ['4', '9' ], ['5', '8' ], ['6', '7'  ]],
    "round2":  [['12', '7' ], ['8', '6' ], ['9', '5' ], ['10', '4'], ['11', '3'], ['1', '2'  ]],
    "round3":  [['2' , '12'], ['3', '1' ], ['4', '11'], ['5', '10'], ['6', '9' ], ['7', '8'  ]],
    "round4":  [['12', '8' ], ['9', '7' ], ['10', '6'], ['11', '5'], ['1', '4' ], ['2', '3'  ]],
    "round5":  [['3' , '12'], ['4', '2' ], ['5', '1' ], ['6', '11'], ['7', '10'], ['8', '9'  ]],
    "round6":  [['12', '9' ], ['10', '8'], ['11', '7'], ['1', '6' ], ['2', '5' ], ['3', '4'  ]],
    "round7":  [['4' , '12'], ['5', '3' ], ['6', '2' ], ['7', '1' ], ['8', '11'], ['9', '10' ]],
    "round8":  [['12', '10'], ['11', '9'], ['1', '8' ], ['2', '7' ], ['3', '6' ], ['4', '5'  ]],
    "round9":  [['5' , '12'], ['6', '4' ], ['7', '3' ], ['8', '2' ], ['9', '1' ], ['10', '11']],
    "round10": [['12', '11'], ['1', '10'], ['2', '9' ], ['3', '8' ], ['4', '7' ], ['5', '6'  ]],
    "round11": [['6' , '12'], ['7', '5' ], ['8', '4' ], ['9', '3' ], ['10', '2'], ['11', '1' ]]

}
fourteenGame = {
    "round1":   [['1' , '14' ], ['2', '13' ], ['3', '12'], ['4', '11'], ['5', '10'], ['6', '9'  ], ['7', '8'  ]],
    "round2":   [['14' , '8' ], ['9', '7'  ], ['10', '6'], ['11', '5'], ['12', '4'], ['13', '3' ], ['1', '2'  ]],
    "round3":   [['2' , '14' ], ['3', '1'  ], ['4', '13'], ['5', '12'], ['6', '11'], ['7', '10' ], ['8', '9'  ]],
    "round4":   [['14' , '9' ], ['10', '8' ], ['11', '7'], ['12', '6'], ['13', '5'], ['1', '4'  ], ['2', '3'  ]],
    "round5":   [['3' , '14' ], ['4', '2'  ], ['5', '1' ], ['6', '13'], ['7', '12'], ['8', '11' ], ['9', '10' ]],
    "round6":   [['14' , '10'], ['11', '9' ], ['12', '8'], ['13', '7'], ['1', '6' ], ['2', '5'  ], ['3', '4'  ]],
    "round7":   [['4' , '14' ], ['5', '3'  ], ['6', '2' ], ['7', '1' ], ['8', '13'], ['9', '12' ], ['10', '11']],
    "round8":   [['14' , '11'], ['12', '10'], ['13', '9'], ['1', '8' ], ['2', '7' ], ['3', '6'  ], ['4', '5'  ]],
    "round9":   [['5' , '14' ], ['6', '4'  ], ['7', '3' ], ['8', '2' ], ['9', '1' ], ['10', '13'], ['11', '12']],
    "round10":  [['14' , '12'], ['13', '11'], ['1', '10'], ['2', '9' ], ['3', '8' ], ['4', '7'  ], ['5', '6'  ]],
    "round11":  [['6' , '14' ], ['7', '5'  ], ['8', '4' ], ['9', '3' ], ['10', '2'], ['11', '1' ], ['12', '13']],
    "round12":  [['14' , '13'], ['1', '12' ], ['2', '11'], ['3', '10'], ['4', '9' ], ['5', '8'  ], ['6', '7'  ]],
    "round13":  [['7' , '14' ], ['8', '6'  ], ['9', '5' ], ['10', '4'], ['11', '3'], ['12', '2' ], ['13', '1' ]],

}

const container = document.querySelector('.container')
const statContainer = document.querySelector('.statContainer')
const timeloc = document.querySelector('.date-loc')
const date = document.querySelector('.date')




const arrow = document.getElementById('next')
const body = document.querySelector('body')
const form = document.querySelector('.input-data')
const place = document.querySelector('.locationForm')



form.onsubmit = () => handleSubmit(event)
place.onsubmit = () => handleSubmitLocation(event)
arrow.addEventListener('click', () => roundDisplay(currentRound))
getDate()



// ROUND FUNCTIONS

function roundDisplay(roundNum) {
    checkOddPlayers()
    fillTableData()
    toggleRound()

    arrow.remove()

    const passArrow = document.createElement('button')
    const title = document.createElement('div')
    const whiteTitle = document.createElement('div')
    const blackTitle = document.createElement('div')
    const round = document.createElement('section')
    
    passArrow.classList.add('statButton')
    passArrow.textContent = "⬇"

    whiteTitle.className = "white"
    blackTitle.className = "black"

    whiteTitle.textContent = "WHITE"
    blackTitle.textContent = "BLACK"

    title.className = "roundTitle"
    title.textContent = `ROUND ${roundNum}`

    round.classList.add('round', 'background')
    round.setAttribute('id', 'current')

    round.appendChild(passArrow)
    round.appendChild(title)
    round.appendChild(whiteTitle)


    for (let match = 0; match < Players / 2; match++) {
        
        const pOne = document.createElement('div')
        const pTwo = document.createElement('div')
        const vs = document.createElement('p')

        let pOnekey = `${game[`round${roundNum}`][match][0]}`
        let pTwokey = `${game[`round${roundNum}`][match][1]}`
        pOne.classList.add('card', 'top', pOnekey)
        pTwo.classList.add('card', 'bottom', pTwokey)

        pOne.addEventListener('click', setWinner)
        pTwo.addEventListener('click', setWinner)

        const matchBox = document.createElement('div')
        matchBox.classList.add('matchBox')

        vs.textContent = "VS"

        matchBox.appendChild(pOne)
        matchBox.appendChild(vs)
        matchBox.appendChild(pTwo)
        round.append(matchBox)
        
        if (names[pOnekey] == 'BYE'){
            pOne.removeEventListener("click", setWinner);
            pTwo.removeEventListener('click', setWinner)
            pOne.classList.add('BYE')
            cardDisplay(pTwo)
            cardDisplayBye(pOne)
        }
            
        else if (names[pTwokey] == 'BYE'){
            pTwo.removeEventListener('click', setWinner);
            pOne.removeEventListener('click', setWinner)
            pTwo.classList.add('BYE')
            cardDisplay(pOne)
            cardDisplayBye(pTwo)
        }
        else {
            cardDisplay(pOne)
            cardDisplay(pTwo)
        }
            
        if (pTwo.classList.contains('BYE')) {
            pOne.classList.add('winner')
            updateWins(pOne, pTwo, pOnekey, pTwokey, true)
        }
            
        else if (pOne.classList.contains('BYE')) {
            pTwo.classList.add('winner')
            updateWins(pTwo, pOne, pTwo.classList.item(2), pOne.classList.item(2), true)
        }

    }
    passArrow.addEventListener('click', () => allowPassage(round))
    round.appendChild(blackTitle)
    document.body.insertBefore(round, container)
    randomBackground(round)
    nextPage()
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



function cardDisplayBye(player) {
    let key = `${player.classList.item(2)}`
    const name = document.createElement('div')
    const score = document.createElement('div')
    const losebox = document.createElement('div')
    const lossCount = document.createElement('div')

    name.addEventListener('click', e => e.stopPropagation())
    losebox.addEventListener('click', e => e.stopPropagation())
    lossCount.addEventListener('click', e => e.stopPropagation())

    losebox.style.cssText = "pointer-events: none;"
    lossCount.style.cssText = "pointer-events: none;"
    score.style.cssText = "pointer-events: none;"

    name.className = 'name'
    lossCount.className = 'losses'

    score.style.cssText = "display: flex; justify-content: space-around; align-items: center; width: 100%;"
    losebox.style.cssText = "display: flex; justify-content: center; flex-direction: column; align-items: center; font-size: 12px"

    losebox.textContent = "LOSS"

    name.textContent = names[key]

    player.appendChild(name)
    losebox.appendChild(lossCount)
    score.append(losebox)
    player.appendChild(score)
}



function endScreen() {
    fillTableData()
    createTable()
    toggleRound()
    const endScreen = document.createElement('section')
    endScreen.classList.add('round', 'statBackground')
    endScreen.setAttribute('id', 'current')
    const statBox = document.createElement('div')
    statBox.className = "statBox"
    const title = document.createElement('div')
    title.className = "statTitle"
    title.textContent = "Podium"


    let winners = []

    for (let key = 1; key <= Players; key++) {

        let winsText = wins[`${key}`]
        winners.push(`${winsText}`)

    }



    const topThree = calculatePosition()
        
    adjustPosition(topThree)

    let goldKey = topThree.indexOf(1) + 1
    let silverKey = topThree.indexOf(2) + 1
    let bronzeKey = topThree.indexOf(3) + 1

    const podiumKeys = [bronzeKey, goldKey, silverKey]

    for (let key = 0; key < 3; key++) {

        let nameText = names[`${podiumKeys[key]}`]
        let winsText = wins[`${podiumKeys[key]}`]
        let lossesText = losses[`${podiumKeys[key]}`]
        let tiesText = ties[`${podiumKeys[key]}`]


        const card = document.createElement('div')
        const playerName = document.createElement('div')
        const playerWins = document.createElement('div')
        const playerLosses = document.createElement('div')
        const playerTies = document.createElement('div')
        const placement = document.createElement('div')


        playerName.textContent = `${nameText}`
        playerWins.textContent = `${winsText}`
        playerLosses.textContent = `${lossesText}`
        playerTies.textContent = `${tiesText}`
        placement.textContent = '3rd'


        if (key == 1){
            card.style.cssText = "margin-bottom: 300px"
            const crown = document.createElement('div')
            crown.style.cssText = "margin-bottom: 100px"
            crown.className = "crown"
            card.appendChild(crown)
            placement.textContent = '1st'

        }
        if (key == 2)
        {
            card.style.cssText = "margin-bottom: 150px"
            placement.textContent = '2nd'

        }

        playerWins.style.cssText = "color: gold;"
        playerLosses.style.cssText = "color: red;"
        playerTies.style.cssText = "color: green;"
        placement.style.cssText = "margin-top: 30px; font-size: 30px; font-weight: bold;"

        card.classList.add('statCard')

        // Add if want scores under podium cards
        card.appendChild(playerName)
        card.appendChild(placement)
        // card.appendChild(playerWins)
        // card.appendChild(playerLosses)
        // card.appendChild(playerTies)
        

        statBox.appendChild(card)

    }


    endScreen.appendChild(title)
    endScreen.appendChild(statBox)
    document.body.insertBefore(endScreen, container)
    nextPage()

}



function nextPage() {
    const current = document.getElementById('current')
    current.scrollIntoView({behavior: 'smooth'})
}



function allowPassage(round) {

    const matches = round.querySelectorAll('.matchBox')
    const deleteBtn = round.querySelector('.statButton')

    let minToPass = 0

    for (let i = 0; i < matches.length; i++) {

        let match = matches[i]
        const cards = match.querySelectorAll('.card')
        
        if (cards[0].classList.contains('winner') || cards[1].classList.contains('winner'))
            minToPass++

    }

    if (minToPass >= Players / 2){
        if (currentRound == Players -1) {
            deleteBtn.remove()
            lockCards()
            endScreen()
        }    
        else {
            deleteBtn.remove()
            lockCards()
            roundDisplay(++currentRound)
        }
            
    }
}



function toggleRound() {
    const current = document.querySelectorAll('section')
    current.forEach((round) => {
        if (round.id) 
            round.removeAttribute('id');
    })

}



function lockCards() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => card.removeEventListener('click', setWinner))
}



// SCORE HANDLERS

function setWinner(e) {

    let person = this
    let buddy;

    if (this.classList.item(1) == 'top')
        buddy = this.nextSibling.nextSibling
    else if (this.classList.item(1) == 'bottom') 
        buddy = person.previousSibling.previousSibling

    let key = `${this.classList.item(2)}`
    let keyBuddy =`${buddy.classList.item(2)}`

    // Clicked a card which created a tie
    if ((!person.classList.contains('winner') && buddy.classList.contains('winner')))
        handleTie(person, buddy, key, keyBuddy, true)

    // Already was a tie and unclicked a clard
    else if ((person.classList.contains('tie') && buddy.classList.contains('tie')))
        handleTie(person, buddy, key, keyBuddy, false)
    
    // Clicked a card that was unselected
    else if (!this.classList.contains('winner')) {
        this.classList.toggle('winner')
        updateWins(person, buddy, key, keyBuddy, true)
    }
    // Clicked a card that was selected
    else if (this.classList.contains('winner')) {
        this.classList.toggle('winner')
        updateWins(person, buddy, key, keyBuddy, false)
    }



}



function updateWins(person, buddy, key, keyBuddy, selected) {
    
    const updatePerson = person.querySelector('.wins')
    const updateBuddy = buddy.querySelector('.losses')
    if (selected) {
        wins[key] += 1
        losses[keyBuddy] += 1
    }
    else {
        wins[key] -= 1
        losses[keyBuddy] -= 1
    }
    
    updatePerson.textContent = `${wins[key]}`
    updateBuddy.textContent = `${losses[keyBuddy]}`
}



function handleTie(person, buddy, key, keyBuddy, tie) {
    person.classList.toggle('winner')
    person.classList.toggle('tie')
    buddy.classList.toggle('tie')

    const personLosses = person.querySelector('.losses')
    const buddyWins = buddy.querySelector('.wins')
    const personTies = person.querySelector('.ties')
    const buddyTies = buddy.querySelector('.ties')

    if (tie) {

        losses[key] -= 1
        wins[keyBuddy] -= 1
        ties[key] += 0.5
        ties[keyBuddy] += 0.5
    }
    
    else {
    
        losses[key] += 1
        wins[keyBuddy] += 1
        ties[key] -= 0.5
        ties[keyBuddy] -= 0.5
    }

    personLosses.textContent = `${losses[key]}`
    buddyWins.textContent = `${wins[keyBuddy]}`
    personTies.textContent = `${ties[key]}`
    buddyTies.textContent = `${ties[keyBuddy]}`
}



// CROSSTABLE FUNCTIONS

function fillTableData() {

    const matches = document.querySelectorAll('.matchBox')

    for (let i = Math.abs(matches.length - Players / 2); i < matches.length; i++) {

        let match = matches[i]
        
        const cards = match.querySelectorAll('.card')
        
        let person = cards[0]
        let buddy = cards[1]

        const personKey = person.classList.item(2)
        const buddyKey = buddy.classList.item(2)

        let personScore;
        let buddyScore;

        if (person.classList.contains('winner') && person.classList.contains('tie')) {
            personScore = '1/2'
            buddyScore = '1/2'
        }
        else if (person.classList.contains('winner')) {
            personScore = '1'
            buddyScore = '0'
        }
        else if (!person.classList.contains('winner')) {
            personScore = '0'
            buddyScore = '1'
        }

        tableDataGrid[+personKey - 1][+buddyKey - 1] = personScore
        tableDataGrid[+buddyKey - 1][+personKey - 1] = buddyScore

    }
    createTable()

}



function createGrid(rows, cols) {
    const nestedList = new Array(rows)
  
    for (let i = 0; i < rows; i++) {
      nestedList[i] = new Array(cols)
    }
    for (let j = 0; j < rows; j++) {

        nestedList[j][j] = "X"
    }  
    return nestedList;
}



function createTableHeader() {
    const header = document.createElement('div')
    const empty = document.createElement('div')
    const playerHeader = document.createElement('div')
    const totalHeader = document.createElement('div')
    const positionHeader = document.createElement('div')



    header.className = 'row'
    empty.className = 'statNumber'
    playerHeader.className = 'statName'
    totalHeader.className = 'statTotal'
    positionHeader.className = 'statPosition'

    playerHeader.textContent = "Player"
    totalHeader.textContent = 'Total'
    positionHeader.textContent = "Position"
    

    header.appendChild(empty)
    header.appendChild(playerHeader)


    for (let i = 0; i < Players; i++) {
        const numberHeader = document.createElement('div')
        numberHeader.className = 'statNumber'
        numberHeader.textContent = `${i + 1}`

        header.appendChild(numberHeader)
    }

    header.appendChild(totalHeader)
    header.appendChild(positionHeader)
    statContainer.appendChild(header)

}



function createTable() {

    statContainer.innerHTML = ''

    createTableHeader()

    for (let i = 0; i < Players; i++) {

        const number = document.createElement('div')
        const name = document.createElement('div')
        const row = document.createElement('div')

        number.className = 'statNumber'
        number.textContent = `${i + 1}`

        name.className = 'statName'
        name.textContent = `${names[`${i + 1}`]}`
        
        row.className = "row"

        row.appendChild(number)
        row.appendChild(name)

        for (let j = 0; j < Players; j++) {
            const box = document.createElement('div')

            box.className = 'box'
            box.textContent = tableDataGrid[i][j]

            row.appendChild(box)

        }

        const total = document.createElement('div')
        const position = document.createElement('div')

        total.className = 'statTotal'
        total.textContent = `${calculateTotal(i)}`

        const positions = calculatePosition()
        
        // Remove if want duplicate positions
        // adjustPosition(positions)

        
        position.className = 'statPosition'
        position.textContent = `${positionName(positions[i])}`


        row.appendChild(total)
        row.appendChild(position)
        statContainer.appendChild(row)

        
    }
    container.appendChild(statContainer)

}



function positionName(position) {
    const positionName = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th']
    return positionName[`${position - 1}`]
}



function calculateTotal(row) {
    let total = 0

    for (const num of tableDataGrid[row]) {
        if (num == '1/2')
            total += 0.5
        if (+num < 3)
            total += +num
    }
    return total
}



function calculatePosition() {

    let positions = []
    let match = []

    for (let i = 0; i < Players; i++) {
        positions.push(calculateTotal(i))
        match.push(calculateTotal(i))
        
    }

    positions.sort((a, b) => b - a)

    for (let i = 0; i < Players; i++) {
        match[i] = positions.indexOf(match[i]) + 1
    }

    return match

}



function adjustPosition(list) {

    let copy = JSON.parse(JSON.stringify(list))
    copy.sort()
    let duplicates = {}

    for (i = 1; i <= list.length; i++) {
        duplicates[`${[i]}`] = []
    }

    for (i = 1; i <= list.length; i++) {
        if (copy[i] == copy[i - 1]) {  
            if (duplicates[`${copy[i]}`].length > 0)
                duplicates[`${copy[i]}`].push(duplicates[`${copy[i]}`][duplicates[`${copy[i]}`].length - 1] + 1)
            else
                duplicates[`${copy[i]}`].push(copy[i] + 1)
        }
    }

    for (i = 1; i <= list.length; i++) {
        if (duplicates[i].length > 0) {
            for (const num of duplicates[i]) {
                list[list.indexOf(i)] = num
            }
        }
    }

}



function getDate() {

    conversion = {
        "Jan": 1,
        "Feb": 2,
        "Mar": 3,
        "Apr": 4,
        "May": 5,
        "Jun": 6,
        "Jul": 7,
        "Aug": 8,
        "Sep": 9,
        "Oct": 10,
        "Nov": 11,
        "Dec": 12
    }

    var checkDate = new Date()
    var utcDate = new Date(checkDate.toUTCString());
    utcDate.setHours(utcDate.getHours() - 12);
    var usDate = new Date(utcDate);
    let currentDate = usDate.toString()
    let month = currentDate.slice(4, 7)
    let day = currentDate.slice(8, 10)
    let year = currentDate.slice(13, 15)
    let time = currentDate.slice(16, 21)

    if (day < 10)
        day = day.slice(1, 2)

    month = conversion[month]


    if (time.slice(0, 2) > 12)
        time  = time.slice(0, 2) - 12 + time.slice(2) + " pm"
    else
        time = time.slice(1) + " am"

    var fixedDate = month + "-" + day + "-" + year + " | " + time

    date.textContent = fixedDate

}


// PLAYER SUBMISSION FUNCTIONS

function handleSubmit(event) {
    event.preventDefault()
    const userInput = document.getElementById('myInput')
    const playerList = document.createElement('div')

    names[`${playerCount}`] = `${userInput.value.toUpperCase()}`
    wins[`${playerCount}`] = 0
    losses[`${playerCount}`] = 0
    ties[`${playerCount++}`] = 0

    playerList.classList.add('listPlayer')
    playerList.addEventListener('click', removePlayer)
    playerList.textContent = `${userInput.value}`

    list.appendChild(playerList)
    userInput.value = ''


    switch(Object.keys(names).length) {
        case 4:
            Players = Object.keys(names).length
            game = fourGame
            tableDataGrid = createGrid(4, 4)
            break;
        case 5:
            setBye()
            Players = Object.keys(names).length + 1
            game = sixGame
            tableDataGrid = createGrid(6, 6)
            break;
        case 6:
            Players = Object.keys(names).length
            game = sixGame
            tableDataGrid = createGrid(6, 6)
            break;
        case 7:
            setBye()
            Players = Object.keys(names).length + 1
            game = eightGame
            tableDataGrid = createGrid(8, 8)
            break;
        case 8:
            Players = Object.keys(names).length
            game = eightGame
            tableDataGrid = createGrid(8, 8)
            break;
        case 9:
            setBye()
            Players = Object.keys(names).length + 1
            game = tenGame
            tableDataGrid = createGrid(10, 10)
            break;
        case 10:
            Players = Object.keys(names).length
            game = tenGame
            tableDataGrid = createGrid(10, 10)
            break;
        case 11:
            setBye()
            Players = Object.keys(names).length + 1
            game = twelveGame
            tableDataGrid = createGrid(12, 12)
            break;
        case 12:
            Players = Object.keys(names).length
            game = twelveGame
            tableDataGrid = createGrid(12, 12)
            break;
        case 13:
            setBye()
            Players = Object.keys(names).length + 1
            game = fourteenGame
            tableDataGrid = createGrid(14, 14)
            break;
        case 14:
            Players = Object.keys(names).length
            game = fourteenGame
            tableDataGrid = createGrid(14, 14)
            break;
        
      }

    
}



function handleSubmitLocation(event) {
    event.preventDefault()
    const userInput = document.getElementById('location-input')
    const inputWrappingLoc = document.querySelector('.inputWrapperLoc')
    const locForm = document.querySelector('.locationForm')
    const textReplacement = document.createElement('div')
    const textBelow = document.createElement('div')
    loc = `${userInput.value}`
    textReplacement.textContent = `${userInput.value}`
    textBelow.textContent = `${userInput.value}`
    timeloc.style.cssText = "justify-content: space-between;"
    locForm.innerHTML = ''
    locForm.appendChild(textReplacement)
    timeloc.appendChild(textBelow)

    // remove if still want box
    //inputWrappingLoc.style.cssText = "box-shadow: none; backdrop-filter: none; background: transparent;"
}



function setBye() {
    names[`${playerCount}`] = 'BYE'
    wins[`${playerCount}`] = 0
    losses[`${playerCount}`] = 0
    ties[`${playerCount}`] = 0
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



function checkOddPlayers() {
    if (Players % 2 != 0)
        Players--
}



// EXTRA


function randomBackground(page) {
    const backgroundImageList = [
        'imgs/catvcat.jpeg',
        'imgs/catblank.jpeg',
        'imgs/catclose.jpeg',
        'imgs/catshort.jpeg',
        'imgs/catsnow.jpeg'
      ]
    
    const randomImageIndex = Math.floor(Math.random() * backgroundImageList.length)
    const randomBackgroundImage = `url(${backgroundImageList[randomImageIndex]})`
    page.style.backgroundImage = randomBackgroundImage
}

