import { Navbar } from '../../components/Navbar'
import useFetch from '../../hooks/useFetch'
import { CardsPokemons } from '../../components/CardsPokemons'
import { type PokemonDetail, type FetchData } from '../../types'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Grid } from '@mui/material'
import { FilterPokemon } from '../../components/FilterPokemon'

const Home = (): JSX.Element => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail[]>()
  const pokemonsUrl: FetchData = useFetch('https://pokeapi.co/api/v2/pokemon')
  const pokemonsType: FetchData = useFetch('https://pokeapi.co/api/v2/type')
  console.log(pokemonsType)
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
      <Box>
      </Box>
      <Box display='flex' mt={10}>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={2}>
            {pokemonDetails?.map((pokemon, i) => <CardsPokemons {...pokemon} key={i}/>)}
          </Grid>
        </Box>
        <Box sx={{ width: '30%' }}>
          <FilterPokemon pokemonsType={pokemonsType.data?.results} />
        </Box>
      </Box>
    </>
  )
}

export default Home
