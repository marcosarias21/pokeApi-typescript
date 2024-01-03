import useFetch from '../../hooks/useFetch'

const Home = (): JSX.Element => {
  const pokemons = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  console.log(pokemons)
  return (
    <div>
      asdsao
    </div>
  )
}

export default Home
