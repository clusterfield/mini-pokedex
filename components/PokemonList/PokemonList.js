import { PokemonCard } from "../PokemonCard";
import { Grid } from "@nextui-org/react";
import styles from '../PokemonList/PokemonList.module.css' 

export const PokemonList = ({pokemons}) => {
    return (
    <div className={styles.PokemonList}>
        {pokemons.map((pokemon)=>{
            return <PokemonCard name={pokemon.name} img={pokemon.sprites.front_default} key={pokemon.name} />
        })}
    </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}