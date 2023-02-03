export  const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action)
}

export const upperCaseFirstLetterName = (store) =>(next) => (actionInfo) => {
    
    const pokemonsUp = actionInfo.payload.map(pokemon=>{
        
        const upperPok = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        return {...pokemon, name: upperPok}
    })
    
    const updatedPayload = {
        ...actionInfo,
        payload: pokemonsUp
    }
    next(updatedPayload)
}