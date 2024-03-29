const pokeContainer = document.getElementById(
  'poke-container'
) as HTMLDivElement;
const pokemonCount = 151;

const colors = {
  fire: '#fddfdf',
  grass: '#defde0',
  electric: '#fcf7de',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const mainTypes = Object.keys(colors);

type PokemonData = {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      ['official-artwork']: {
        front_default: string;
      };
    };
  };
};

const createPokemonCard = (pokemon: PokemonData) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');
  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((item) => pokeTypes.indexOf(item) > -1);
  const color: string = type !== undefined ? colors[type] : null;
  const image = pokemon.sprites.other['official-artwork'].front_default;

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
    <div class="img-container">
      <img
        src=${image}
        alt="${name}"
      />
    </div>
    <div class="info">
      <div class="number"># ${id}</div>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
    `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  pokeContainer?.appendChild(pokemonEl);
};

const getPokemon = async (id: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);
  }
};

fetchPokemons();
