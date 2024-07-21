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
        images.style.height = '150px'
        images.style.width = '300px'

        descriptions.innerHTML = `${this.description}`
        descriptions.style.fontFamily = `hello`
        descriptions.style.height = `125px`
        descriptions.style.width = `300px`
        descriptions.style.paddingBottom = `40px`

        foodNames.innerHTML = `${this.foodName}`
        foodNames.style.fontSize = `20px`

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
export class Chefs {
    constructor(image, name, bio){
        this.image = image, 
        this.name = name,
        this.bio = bio
    }

    displayChefs(){
        
        let content = document.getElementById('content')
        let placeChefs = document.createElement('div')
        let chefContent = document.createElement('div')
        chefContent.id = 'chefContent'
        placeChefs.id = 'placeChefs'
        content.appendChild(placeChefs)
        
        let chefs = document.createElement('h1')
        content.appendChild(chefs)

        let names = document.createElement ('div')
        names.id = 'Bio'
        names.innerHTML = `${this.name}`
        

        let images = document.createElement('img')
        images.src = `${this.image}`
        images.style.height = `400px`
        images.style.width = `400px`

        let bios = document.createElement('div')
        bios.innerHTML = `${this.bio}`
        bios.style.width = `400px`
        bios.style.height = `400px`


        placeChefs.appendChild(images)
        placeChefs.appendChild(chefContent)

        chefContent.appendChild(names)
        chefContent.appendChild(bios)

        
    }
}