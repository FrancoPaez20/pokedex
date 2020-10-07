let currentId = 1;
let name = document.getElementById('name');
let pokemonName = document.getElementById('pokemon_name');
let pokemonFront = document.getElementById('image_front');
let pokemonBack = document.getElementById('image_back');
let pokemonWeight = document.getElementById('pokemon_weight');
let pokemonHeight = document.getElementById('pokemon_height');
let statA = document.getElementById('stat_a');
let statB = document.getElementById('stat_b');
let statC = document.getElementById('stat_c');
let statD = document.getElementById('stat_d');
let statE = document.getElementById('stat_e');
let statF = document.getElementById('stat_f');

async function getPokemon (id){

	const respuesta = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
	const datos = await respuesta.json();
	console.log(datos)
	return datos;
}

async function printPokemon(id){

	const pokemon = await getPokemon(id);
	const pokemonImage = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
	name.textContent = pokemon.name;
	pokemonName.textContent = pokemon.name;
	pokemonFront.setAttribute('src', pokemon.sprites.front_default);
	pokemonFront.setAttribute('src', pokemonImage);
	pokemonFront.setAttribute('alt', pokemon.name);
	// pokemonBack.setAttribute('src', pokemon.sprites.back_default);
	// pokemonBack.setAttribute('alt', pokemon.name);
	pokemonWeight.textContent = `W: ${pokemon.weight / 10}kg`;
	pokemonHeight.textContent = `H: ${pokemon.height * 10}cm`;
	// pokemonStats.textContent = pokemon.stats[0].stat.name;
	statA.textContent = `${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}`;
	statB.textContent = `${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}`;
	statC.textContent = `${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}`;
	statD.textContent = `${pokemon.stats[3].stat.name}: ${pokemon.stats[3].base_stat}`;
	statE.textContent = `${pokemon.stats[4].stat.name}: ${pokemon.stats[4].base_stat}`;
	statF.textContent = `${pokemon.stats[5].stat.name}: ${pokemon.stats[5].base_stat}`;
	console.log(pokemon.stats[5].stat.base_stat)
}

async function printStats(id){


}

function next(){
	
	printPokemon(++currentId);
}

printPokemon(currentId);