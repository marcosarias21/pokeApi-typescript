import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { type PokemonDetail } from '../../types'

const CardsPokemons = ({ name, sprites }: PokemonDetail) => {
  return (
    <Grid item lg={2}>
      <Card sx={{ backgroundColor: 'black' }}>
          <CardMedia
            component={'img'}
            sx={{ backgroundSize: 'cover' }}
            image={sprites?.other?.['official-artwork'].front_default}
            title="green iguana"
          />
        <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography gutterBottom variant="h5" textAlign={'center'} component="h5" color={'white'}>
            {name.toUpperCase()}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CardsPokemons
