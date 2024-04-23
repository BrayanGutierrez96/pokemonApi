import pokemons from "./data.js";

/* console.log(pokemons); */
const card = document.querySelector(".cards")

for (let i = 0; i < pokemons.length; i++) {
    const currentHtml = card.innerHTML
    card.innerHTML = `<div class="cards__card">
    <div class="cards__img-container"><img class="image-card" src=${pokemons[i].imgUrl} alt=""></div>
    <h2 class="cards__name-card">${pokemons[i].name}</h2>
    <p class="cards__paragraph-card">${pokemons[i].description}</p>
    <button id="${pokemons[i].name}" class="btn" type="button">Lanzar poder</button>
    </div>
    </div>`
    card.innerHTML = currentHtml + card.innerHTML
    const btn = card.querySelector(`#${pokemons[i].name}`)
    console.log(btn);
    btn.addEventListener("click",()=>{
        console.log("click");
        pokemons[i].lanzarPoder()
    })
}

const btn = [...card.querySelectorAll(".btn")];



/* console.log(btn);
btn.forEach(() => {
    btn.addEventListener("click", () => {

    })
}) */
