export class Food {


    constructor(header, image, description, foodName, price){
        this.header = header,
        this.image = image, 
        this.description = description, 
        this.foodName = foodName, 
        this.price = price
    }

    displayFood(){

        let content = document.getElementById('content')
        let headers = document.createElement('h1')
        let images = document.createElement('img')
        let descriptions = document.createElement('div')
        let foodNames = document.createElement('div')
        let prices = document.createElement('div')

        headers.innerHTML = `${this.header}`
        images.src = `${this.image}`
        descriptions.innerHTML = `${this.description}`
        foodNames.innerHTML = `${this.foodName}`
        prices.innerHTML = `${this.price}`

        content.appendChild(headers)
        content.appendChild(images)
        content.appendChild(descriptions)
        content.appendChild(foodNames)
        content.appendChild(prices)


    }
    
}