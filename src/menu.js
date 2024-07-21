import { Food } from "./classes"
import olive from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/oliveTapenade.png'
import CrouqeMonsieur from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/Crouqe-Monsieur.jpg'
import Souffle from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/soufflè.jpg'
import Ratatouille from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/Ratatouille.jpg'
import Frites from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/Frites.jpg'
import Lobster from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/Lobster-Thermoid.jpg'
import { appetizersSection } from "./classes"
import { EntreSection } from "./classes"
import { DessertSection } from "./classes"

// image sources


export default function Menu(){
    let content = document.getElementById("content")
    content.innerHTML = ' '
    appetizersSection.innerHTML = ' '
    EntreSection.innerHTML = ' '
    DessertSection.innerHTML = ' '

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
        `${Souffle}`,
        `Our cheese Souffe is one to die for a beautiful choice to get started and prepare your belly for our 
        other delicious and unique entres, not too mention its our head chefs favorite since he knows what good cheese is `,
        ` Cheesy Souffe`,
        `$ 14.99`
     )
     
    let food3 = new Food (
        `${CrouqeMonsieur}`,
        `If you are a connoisseur of great sandwhiches then I would advise you to reward your tastebuds 
        with our wonderful handmade Croque Monsieur made with thin sliced meat of your choice when you dine in
        complimented with a creamy cheese in between our delicious french toast`,
        'Crouqe Monsieur',
        `$ 12.99`
    )


     food1.displayFood(appetizersSection)
     food2.displayFood(appetizersSection)
     food3.displayFood(appetizersSection)
  


    let entres = document.createElement('h2')
    entres.innerHTML = `Entres`
    content.appendChild(entres)

    let lobsterThermidor = new Food (

        `${Lobster}`,
        `This seafood dish is always served fresh and is one of the main dishes 
        that keeps our guest coming back fromm time to time, this dish is made with lobster meat 
        cooked in rich wine sauce stuffed back into the lobster shell and browned its tastier than it sounds`, 
        `Lobster Thermidor `, 
        `$ 34.99`

    )

    let ratatouille = new Food (
        `${Ratatouille}`, 
        `The main event and the one you came for, with so much history this dish brings the past and present 
        together in one bite. This childhood cuisine came was brought back into light with the help of <em> Igo's <em> , 
        The finest food critic in Paris, review after dining in the final days of the Famous Guesteau's resturant. 
        Words dont describe it enough you must let your tastebuds tell the story `,
        `Ratatouille`, 
        `$ 54.99`

    )

    let frites = new Food (
        `${Frites}`, 
        `Our steak Frites our the perfect cuisine for you and your love one on a beautiful night 
        in Paris. Whether you are visiting or a local you can enjoy our beautifully seared and cooked to perfection 
        Steak along with the prefected Golden Brown Frites`, 
        `Steak Frites`, 
        `$ 64.99 `
    )

    lobsterThermidor.displayFood(EntreSection)
    ratatouille.displayFood(EntreSection)
    frites.displayFood(EntreSection)

    // Header, image, description, foodName, price
}
// ok