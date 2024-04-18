async function fetchPokemon(n: number) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`)
    const pokemon = await response.json()
    return pokemon
}

async function fetchRandomPokemon() {
    const MAX_POKEMON = 1025
    const randomPokemonNumber = Math.floor(Math.random() * MAX_POKEMON)
    const pokemon = await fetchPokemon(randomPokemonNumber)
    return pokemon
}

async function main() {
    const randomPokemon = await fetchRandomPokemon()
    console.log(randomPokemon)
}

main()
