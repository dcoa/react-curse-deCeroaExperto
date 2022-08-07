import { pokemonAPI } from "../../../api/pokemonAPI"
import { setPokemons, startLoadingPokemons } from "./pokemonSice"

//Thunks son funciones que manejan funciones asincronas y 
// al ejecutarse llaman una accion
export const getPokemons = ( page = 0 ) => {
  return async (dispatch, getState) => {
    dispatch( startLoadingPokemons() )

    // TODO: peticion http
  //  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)
  //  const data = await resp.json()

  const { data } = await pokemonAPI.get(`pokemon?limit=10&offset=${ page * 10 }`)

    dispatch( setPokemons({ pokemons: data.results, nextPage: page + 1 }) )
  }
}