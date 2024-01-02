import { useState } from 'react'
import './App.css'
import { Box, Typography } from '@mui/material'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
     <Box>
        <Typography component='h1' variant='h1' color='red'>Pokemons!</Typography>
     </Box>
    </>
  )
}

export default App
