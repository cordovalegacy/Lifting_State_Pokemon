
// !Packages
import { useState } from 'react'

// !Components
import Form from './components/Form'
import Display from './components/Display'
import './App.css'

function App() {

  const [pokemonList, setPokemonList] = useState(["Charmander", "Squirtle", "Bulbasaur"])

  return (
    <main id='parent-container'>
      <h1 className='headers'>App</h1>

      <div className='flex'>
        {pokemonList.map((eachPokemon, idx) => (
          <div key={idx} className='card'>
            <p>{eachPokemon}</p>
          </div>
        ))}
      </div>

      <div id='child-container'>
        <Form pokemonList={pokemonList} setPokemonList={setPokemonList}/>
        <Display pokemonList={pokemonList}/>
      </div>
    </main>
  )
}

export default App
