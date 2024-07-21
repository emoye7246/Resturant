import { Chefs } from "./classes"
import colette from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/colette.png'
import Linguini from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/linguini.png'
import remy from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/remy.png'


export default function About(){
    let content = document.getElementById('content')
    content.innerHTML = ' '

    let chefsPage = document.createElement('h1')
    chefsPage.innerHTML = `Meet our Chefs`
    content.appendChild(chefsPage)

    let Colette = new Chefs (

        `${colette}`, 
        `Colette`,
        `Meet Our wonderful chef Colette Tatou, The wife of our server Linguini One and if not the most gifted Chef in all of 
        Paris, she is no stranger to speaking her mind and no stranger to created such delicious
        and tasty cusines. Starting off as a cook at the for renown restrurant Gesteaus, she was 
        a cook on the most infamous night, when the world discovered Remy. She not only knows 
        how to manage humans in the kicthen but also species of all sorts. `
    )

    let linguini = new Chefs (

        `${Linguini}`, 
        `Linguine`,
        `Meet our Unorthodox and quite unique Server Linguini. Son of the famous Chef Gesteau, former owner of Gestaus inhereted from
        his father, and Co-Owner of La Ratatouille this server has seen it all in the world of cuilinary. From humble beginnings
        Linguini started as a cleaner for the famous Kitchen of Gestaus and then suddely taking the city by storm which was once thought
        his cooking. It would soon turn out that he was being controlled and yes you read that correctly controlled by his right hand
        counterpart and our head chef Remy. `
    )

    let Remy = new Chefs (
        `${remy}`,
        `Remy`,
        `Meet our Head Chef Remy, now this Chef's apperance might take you by surprise but do not be quick to judge as this chef 
        has been named the greatest chef in Paris today. Sneaking into Gusteaus Kicthen and finding control of the kicthen with the help 
        of his vessel Linginui this chef single handley reamped the juice and name of the Former Gusteaus resturant. Gusteau is Remy's
        hero and was inspired by Gusteaus famous words <em>Anyone can cook</em> well Remy certaintly proves that point and is our favorite.`
    )
 
    Colette.displayChefs()
    linguini.displayChefs()
    Remy.displayChefs()
}