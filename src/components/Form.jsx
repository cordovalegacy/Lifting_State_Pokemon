import { useState } from "react"

const Form = ({pokemonList, setPokemonList}) => {

    const [favPokemon, setFavPokemon] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        setPokemonList([...pokemonList, favPokemon])

    }

    return (
        <form onSubmit={submitHandler} className="children">
            <h1 className="headers">Form</h1>
            <label htmlFor="favPokemon">
                Favorite Pokemon:{' '}
                <input
                    type="text"
                    name="favPokemon"
                    onChange={(e) => setFavPokemon(e.target.value)}
                />
            </label>
            <input type="submit" value="Adopt" />
        </form>
    )
}

export default Form
