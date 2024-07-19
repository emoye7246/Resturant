import ratHead from '/Users/elijahmoye/Desktop/resturant/Resturant/src/images/icon..png'


export function header(){
    let subheading = document.createElement('div')
    let store = document.createElement('img')
    let description = document.createElement('p')

    description.innerHTML = 
    `Welcome to La Ratatoullie we are proud and honored that you want to expierence the delicious<br>
    the wonderful flavors right in the heart of Paris. Now if you have not already heard about the rat in <br>
    the room or have not read the infamous food critic Igo's now highest reviewed resturant or simply new <br>
    to Paris we do things a little unorthodox compared to other resturants around the city and you will be <br>
    suprised on what you can expect. We do not judge nor discraminate about who can cook becuase as the famous <br>
    Gusteau once said <em> Anyone can cook `

    // description.style.fontSize = '20px'
  
   


    store.src = ratHead
    store.id = 'store'
    store.style.height = '200px'

    content.appendChild(subheading)
    content.appendChild(description)
    subheading.appendChild(store)

}