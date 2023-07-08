
const Display = ({pokemonList}) => {
    return (
        <div className="children">
            <h1 className="headers">Display</h1>
            <div className='flex'>
                {pokemonList.map((eachPokemon, idx) => (
                    <div key={idx} className='card'>
                        <p>{eachPokemon}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Display
