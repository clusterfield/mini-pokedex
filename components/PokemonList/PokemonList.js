import { PokemonCard } from "../PokemonCard";
import styles from '../PokemonList/PokemonList.module.css' 

export const PokemonList = ({pokemons}) => {
    console.log(pokemons)
    return (
    <div className={styles.PokemonList}>
        {pokemons.map((pokemon)=>{
            return <PokemonCard name={pokemon.name} key={pokemon.name} />
        })}
    </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}