import { Food } from "./classes"

export default function Menu(){
    let content = document.getElementById("content")
    content.innerHTML = ' '
    
    let food1 = new Food (
       `Appetizers`, 


    )
    content.appendChild(food1.displayFood())
    // Header, image, description, foodName, price
}
// ok