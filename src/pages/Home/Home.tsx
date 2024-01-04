import { Navbar } from '../../components/Navbar'
import useFetch from '../../hooks/useFetch'
import { CardsPokemons } from '../../components/CardsPokemons'
import { type PokemonDetail, type FetchData } from '../../types'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Grid } from '@mui/material'

const Home = (): JSX.Element => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[]>()
  const pokemonsUrl: FetchData = useFetch('https://pokeapi.co/api/v2/pokemon')
  console.log(pokemonsUrl)
  const getData = async (): Promise<void> => {
    const promises = pokemonsUrl.data?.results?.map(async (pokemon) => {
      const resp = await axios(pokemon.url)
      return (resp.data)
    })
    if (promises !== undefined) {
      const response = await Promise.all(promises)
      setPokemonDetails(response)
    }
  }

  useEffect(() => {
    getData()
  }, [pokemonsUrl])

  return (
    <>
      <Navbar />
      <Box display='flex' mt={10}>
        <Grid container spacing={2}>
          {pokemonDetails?.map((pokemon, i) => <CardsPokemons {...pokemon} key={i}/>)}
        </Grid>
        <Box>
          FilterInput
        </Box>
      </Box>
    </>
  )
}

export default Home
