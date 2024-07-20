import { Food } from "./classes"
import olive from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/oliveTapenade.png'
import { appetizersSection } from "./classes"

// image sources


export default function Menu(){
    let content = document.getElementById("content")
    content.innerHTML = ' '
    appetizersSection.innerHTML = ' '

    let menu = document.createElement('h1')
    menu.innerHTML = 'Menu'
    content.appendChild(menu)

    let appetizers = document.createElement('h2')
    appetizers.innerHTML = 'Appetizers'
    content.appendChild(appetizers)

    let food1 = new Food (
       `${olive}`,
       `This amazing dish was perfeceted and made fresh by our wonderful chefs and is a popular dish 
       amongst the many customers throughout Paris and great for anyone who would love to try something new`,
       `Olive Tapenade`,
       `$ 24.99`
    )
    let food2 = new Food (
        `${olive}`,
        `This amazing dish was perfeceted and made fresh by our wonderful chefs and is a popular dish 
        amongst the many customers throughout Paris and great for anyone who would love to try something new`,
        `Olive Tapenade`,
        `$ 24.99`
     )


     food1.displayFood()
     food2.displayFood()
     food2.displayFood()
     food2.displayFood()
     food2.displayFood()
     food2.displayFood()





    // Header, image, description, foodName, price
}
// ok