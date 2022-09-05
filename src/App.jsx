import { useState } from 'react'
import './App.css'
import permutation from './utils/permutation'

function App() {
  const [elements, setElements] = useState([])
  const [newElem, setNewElem] = useState("")
  const [rValue, setRValue] = useState("")
  const [permutatedElems, setPermutatedElems] = useState([])

  const handleAddButton = e => {
    e.preventDefault()
    if (newElem !== ""){
      setElements((elements) => elements.concat(newElem))
      setNewElem("")
    }
  }

  const handleAceptar = e => {
    e.preventDefault()
    if(rValue !== ""){
      const numberR = Number(rValue)
      if (numberR <= elements.length){
        const permArr = Array.from(permutation(elements, numberR, elements.length))
        setPermutatedElems(permArr)
        setRValue("")
        setNewElem("")
      }else{
        alert("Valor de r mayor que n")
      }
    }else{
      alert("Ingrese valor en r")
    }
  }

  return (
    <div className='container-all'>
      <h3>Elementos: </h3>
      <form onSubmit={handleAddButton}className='elements-container'>
        <div className='elements'>
          {elements.map(elem => 
            <div key={(elem.charCodeAt(0)*Math.random())} className='element'>
              {elem}
            </div>)}
        </div>
        <input className='input' onInput={e => setNewElem(e.target.value)} value={newElem} type="text" />
        <button className='add-button' >Agregar</button>
      </form>
      <form className='submit-container' onSubmit={handleAceptar}>
        <div className='g-1'>
          <label htmlFor="r-input">Valor de r:</label>
          <input onInput={(e) => setRValue(e.target.value)} value={rValue} id='r-input' className='input' type="text" />
        </div>
        <button className='m-1'>Aceptar</button>
      </form>
      <div className='p-container'>
        {permutatedElems.length > 0 && <p>Numero de permutaciones: <strong>{permutatedElems.length}</strong></p>}
        <div className='permutated-container'>
            {permutatedElems.map(elem => 
              <div key={elem} className='element'>{elem}</div>
            )}
        </div>
      </div>
    </div>
  )
}

export default App
