import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { type Species } from '../../types'

interface FilterPokemonProps {
  pokemonsType: Species[] | undefined
}

const FilterPokemon: React.FC<FilterPokemonProps> = ({ pokemonsType }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Type"
      >
        {pokemonsType?.map((type, i) => <MenuItem key={i} value={type.name}>{type.name.toUpperCase()}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default FilterPokemon
