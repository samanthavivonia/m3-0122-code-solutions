import React from "react";
import ReactDOM from "react-dom";
import Carousel from './carousel'

let pokemon = [
  {
    id: 0,
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  {
    id: 1,
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png"
  },
  {
    id: 2,
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png"
  },
  {
    id: 3,
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png"
  },
  {
    id: 4,
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    id: 5,
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  }
]

ReactDOM.render(
  <Carousel images={pokemon}/>,
  document.querySelector('#root')
);
