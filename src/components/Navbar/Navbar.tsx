import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

const Navbar = () => {
  return (
    <AppBar position="static" color='error'>
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <CatchingPokemonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 40 }} />
          <Typography variant='h4' fontWeight='bold'>Pokedex</Typography>
        </Box>
        <Box>
          SEARCHbar
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Button sx={{ fontWeight: 'bold', color: 'white' }}>Home</Button>
          <Button sx={{ fontWeight: 'bold', color: 'white' }}>Pokemon</Button>
          <Button sx={{ fontWeight: 'bold', color: 'white' }}>Attributions</Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Navbar
