 class Pokemon{
    constructor(name,imgUrl,description ){
        this.name = name;
        this.imgUrl = imgUrl
        this.description = description;
        
    }lanzarPoder(){
        alert("¡Poder lanzado!")
    }
}
 class thunder extends Pokemon{
    constructor(name, imgUrl, description){
        super(name, imgUrl, description)
    }
    lanzarPoder(){
        alert("¡TRUENOOOOOS!")
    }
}
 class fire extends Pokemon {
    constructor(name, imgUrl, description){
        super(name, imgUrl, description)
    }
    lanzarPoder(){
        alert("¡FUEGOOOO!")
    }
}
 
class water extends Pokemon {
    constructor(name,imgUrl, description){
        super(name, imgUrl, description)
    }
    lanzarPoder(){
        alert("¡AGUUUUAAA!")
    }
}

const pikachu = new thunder("pikachu", "./assets/R.png", "ratón de trueno")
const sharizar = new fire("Sharizar", "./assets/sharizar.jpg", "Dragon de fuego")
const bulbasur = new water("Bulbasur", "./assets/bulbasur.jpg", "Tortuga de agua")
const pokemons = []
pokemons.push(pikachu,sharizar,bulbasur)

export default pokemons