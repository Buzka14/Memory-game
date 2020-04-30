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
    
    cardArray.sort(() => 0.5 - Math.random()) 
    
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
    
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId) 
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert ('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert ('Try again!')
        }
        
        cardsChosen = []
        cardsChosenId = []
        
        resultDisplay.textContent = cardsWon.length 
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations! You Won!"
        }
    }

    createBoard()
});
