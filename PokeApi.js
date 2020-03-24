//Using "node-fetch" for nodejs
const fetch = require("node-fetch"); 
//Function to fetch the data of the related Pokemon
function fetchPokemon(pokemonName) {
    pokemonName =  pokemonName.toLowerCase()
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
    fetch(url)
    .then(response => response.json())
    .then((pokeData) =>{
        let type = []
        pokeData.types.forEach(element => {
          type.unshift(element["type"]["name"])
        });
        type.forEach(ele => process.stdout.write(ele + " "))
    })
    .catch(error => console.log("Data not found", error));
}
//Funcion Call
fetchPokemon("Pikachu")