import { Navbar } from '../../components/Navbar'
import useFetch from '../../hooks/useFetch'
import { CardsPokemons } from '../../components/CardsPokemons'
import { type PokemonDetail, type FetchData, type PokemonProp } from '../../types'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box } from '@mui/material'

const Home = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<PokemonProp[]>()
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[]>()
  const pokemonsUrl: FetchData = useFetch('https://pokeapi.co/api/v2/pokemon')

  const getData = async (): Promise<void> => {
    const promises = pokemons?.map(async (pokemon) => {
      const resp = await axios(pokemon.url)
      return (resp.data)
    })
    if (promises !== undefined) {
      const response = await Promise.all(promises)
      setPokemonDetails(response)
    }
  }
  console.log(pokemonDetails)

  useEffect(() => {
    setPokemons(pokemonsUrl.data?.results)
    getData()
  }, [pokemonsUrl])

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemonDetails?.map((pokemon, i) => <CardsPokemons {...pokemon} key={i}/>)}
      </Box>
    </>
  )
}

export default Home
