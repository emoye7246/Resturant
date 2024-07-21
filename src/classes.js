export let appetizersSection = document.createElement('div')
appetizersSection.id = 'AppSection'

export let EntreSection = document.createElement('div')
EntreSection.id = 'EntreSection'

export let DessertSection = document.createElement('div')
DessertSection.id = 'DessertSection'

export class Food {


    constructor(image, description, foodName, price){
        this.image = image, 
        this.description = description, 
        this.foodName = foodName, 
        this.price = price
    }

    displayFood(section){

        let content = document.getElementById('content')

        let placeMent = document.createElement('div')
        placeMent.id = `placement`

        let images = document.createElement('img')
        let descriptions = document.createElement('div')
        let foodNames = document.createElement('div')
        let prices = document.createElement('div')

        images.src = `${this.image}`
        images.style.height = '170px'
        images.style.width = '300px'

        descriptions.innerHTML = `${this.description}`
        descriptions.style.height = `200px`
        descriptions.style.width = `300px`

        foodNames.innerHTML = `${this.foodName}`

        prices.innerHTML = `${this.price}`

        content.appendChild(section)

        section.appendChild(placeMent)
        
        placeMent.appendChild(images)
        placeMent.appendChild(descriptions)
        placeMent.appendChild(foodNames)
        placeMent.appendChild(prices)

    }

    
    // im making two more divs for sepereation
    
}