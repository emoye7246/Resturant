import _ from 'lodash';
import './style.css';
import Icons from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/La-Ratatoillue.png'
import Menu from './menu';
import { header } from '../hompage';



let content = document.getElementById('content')


let rebel = document.getElementById('rebel')
rebel.src = Icons

// Button Control 
// Looks really sloppy 
// Why did i need classes

    let home = document.getElementById('home')
    let menu = document.getElementById('menu')
    let about = document.getElementById('about')
    let services = document.getElementById('services')
    let book = document.getElementById('book')


    menu.addEventListener('click', () => {
        content.innerHTML = ' '
        Menu()
    })
    
    home.addEventListener('click', () => {
        content.innerHTML = ' '
        header()

    })

header()