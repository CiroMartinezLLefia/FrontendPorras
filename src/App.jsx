import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [porras, setPorras] = useState([])

  async function getPorras() {
    const ruta = "https://didactic-space-pancake-r45rvx749r4357g-3000.app.github.dev/api/porras"
    const porrasJson = await fetch(ruta)
    const porras = await porrasJson.json()
    setPorras(porras.porras)
  }

  useEffect(() => {
    getPorras()
  }, [])

  return (
    <div>
      <h1>PORRAS!!!!</h1>
      {porras && porras.map((porra) => (
        <div>
          <p>{porra.email}</p>
          <p>{porra.porra}</p>
        </div>
      ))}
    </div>
  )
}

export default App
