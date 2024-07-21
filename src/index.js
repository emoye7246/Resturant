import _ from 'lodash';
import './style.css';
import Icons from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/La-Ratatoillue.png'
import Menu from './menu';
import { header } from '../hompage';
import About from './about';



let content = document.getElementById('content')


let rebel = document.getElementById('rebel')
rebel.src = Icons

// Button Control 
// Looks really sloppy 
// Why did i need classes

    let home = document.getElementById('home')
    let menu = document.getElementById('menu')
    let about = document.getElementById('about')



    
    home.addEventListener('click', () => {
        content.innerHTML = ' '
        header()

    })

    menu.addEventListener('click', Menu)

    about.addEventListener('click', About)




header()