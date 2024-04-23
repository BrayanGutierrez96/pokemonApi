import pokemons from "./data.js";
import { trueno, fire, water} from "./data.js"

/* console.log(pokemons); */
const card = document.querySelector(".cards")

for(let i =0; i<pokemons.length; i ++){
    const currentHtml = card.innerHTML
    card.innerHTML = `<div class="cards__card">
    <div class="cards__img-container"><img class="image-card" src=${pokemons[i].imgUrl} alt=""></div>
    <h2 class="cards__name-card">${pokemons[i].name}</h2>
    <p class="cards__paragraph-card">${pokemons[i].description}</p>
    <button class="btn" type="button">Lanzar poder</button>
    </div>
    </div>`
    card.innerHTML = currentHtml + card.innerHTML
    const btn = card.querySelector(".btn");

    // Asigna el evento click al botón específico
    btn.addEventListener("click", () => {
        // Ejecuta el método específico del Pokémon
        if (pokemons instanceof trueno) {
            pokemons.impacTrueno();
        } else if (pokemons instanceof fire) {
            pokemons.lanzarFuego();
        } else if (pokemons instanceof water) {
            pokemons.lanzarAgua();
        }
    });
}
/* 
const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    sharizar.lanzarFuego();
}) */