import _ from 'lodash';
import './style.css';
import Icons from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/La-Ratatoillue.png'
import ratHead from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/icon..png'
import Menu from './menu';


let rebel = document.getElementById('rebel')
rebel.src = Icons

function header(){
    let content = document.getElementById('content')
    let subheading = document.createElement('div')
    let store = document.createElement('img')
    let description = document.createElement('p')

    description.innerHTML = 
    `Welcome to La ratatouiile we are proud and honered that you want to expierence the delicious<br>
     the wonderful flavors right in the heart of Paris. Now if you have not already heard about the rat in <br>
    the room or have not read the infamous food critic Igo's now highest reviewed resturant or simply new <br>
    to Paris we do things a little unorthodox compared to other resturants around the city and you will be <br>
    suprised on what you can expect. We do not judge nor discraminate about who can cook becuase as the famous <br>
    Gusteau once said <em> Anyone can cook `
  
   


    store.src = ratHead
    store.id = 'store'
    store.style.height = '200px'

    content.appendChild(subheading)
    content.appendChild(description)
    subheading.appendChild(store)

}
header();
// Button Control 
function buttonControl(){
    let home = document.getElementById('home')
    let menu = document.getElementById('menu')
    let about = document.getElementById('about')
    let services = document.getElementById('services')
    let book = document.getElementById('book')

    home.addEventListener('click', Menu)

}
buttonControl();