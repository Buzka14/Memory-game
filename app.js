document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'ajax',
            img: 'images/ajax.png'
        },
        {
            name: 'ajax',
            img: 'images/ajax.png'
        },
        {
            name: 'bdortmund',
            img: 'images/bdortmund.png'
        },
        {
            name: 'bdortmund',
            img: 'images/bdortmund.png'
        },
        {
            name: 'inter',
            img: 'images/inter.png'
        },
        {
            name: 'inter',
            img: 'images/inter.png'
        },
        {
            name: 'lpool',
            img: 'images/lpool.png'
        },
        {
            name: 'lpool',
            img: 'images/lpool.png'
        },
        {
            name: 'manutd',
            img: 'images/manutd.png'
        },
        {
            name: 'manutd',
            img: 'images/manutd.png'
        },
        {
            name: 'rmadrid',
            img: 'images/rmadrid.png'
        },
        {
            name: 'rmadrid',
            img: 'images/rmadrid.png'
        }
    ]

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];


    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)

        }
    }

    function checkForMatch(){
        var cards = document.querySelector('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosenId[0] === cardsChosenId[1]){
            alert ('You found a match!')
            cards [optionOneId].setAttribute('scr','images/white.png')
            cards [optionTwoId].setAttribute('scr', 'images/white.png')
            cardsWon.push.cardsChosen
        } else {
            cards[optionOneId].setAttribute('scr', 'images/blank.png')
            cards[optionTwoId].setAttribute('scr', 'images/blank.png')
            alert ('Try again!')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length 
        if (cardsWon.length === cardsArray.length/2){
            resultDisplay.textContent = "Congratulations! You Win!"
        }

    }

    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('scr', cardArray[cardId].img)
        if (cardsChoosen === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    
    createBoard()
















})