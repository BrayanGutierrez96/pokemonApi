export class Pokemon{
    constructor(name,imgUrl,description ){
        this.name = name;
        this.imgUrl = imgUrl
        this.description = description;
        
    }
}
export class trueno extends Pokemon{
    constructor(name, imgUrl, description){
        super(name, imgUrl, description)
    }
    impacTrueno(){
        alert("¡RAYOOOS!")
    }
}
export class fire extends Pokemon {
    constructor(name, imgUrl, description){
        super(name, imgUrl, description)
    }
    lanzarFuego(){
        alert("¡FUEGOOOO!")
    }
}
export class water extends Pokemon {
    constructor(name,imgUrl, description){
        super(name, imgUrl, description)
    }
    lanzarAgua(){
        alert("¡AGUUUUAAA!")
    }
}

const pikachu = new trueno("pikachu", "./assets/R.png", "ratón de trueno")
const sharizar = new fire("Sharizar", "./assets/sharizar.jpg", "Dragon de fuego")
const bulbazur = new water("Bulbazur", "./assets/bulbasur.jpg", "Tortuga de agua")
const pokemons = [{}]
pokemons.shift()
pokemons.push(pikachu,sharizar,bulbazur)

export default pokemons