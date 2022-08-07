import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {
  const { isLoading, pokemons, nextPage } = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( getPokemons() )

  }, [])
  
  return (
    <div>
      <span>Loading: {isLoading ? 'true' : 'false'}</span>

      <ul>
        {
          pokemons.map(({ name })=> (
            <li key={name}>{name}</li>
          ))
        }
      </ul>
      <button
      disabled={ isLoading }
      onClick={() => dispatch( getPokemons( nextPage ) )}
      >Next</button>
    </div>
  )
}
