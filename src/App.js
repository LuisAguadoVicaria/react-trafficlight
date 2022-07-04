import './App.css';
import { useState } from 'react'

const Light = ({ color, active, onclick, hidden }) => (
  <button
    className="light"
    onClick={onclick}
    style={{ backgroundColor: color, opacity: active ? 1 : 0.1, display: hidden ? 'none' : 'block' }}
  />
)

const App = () => {
  const [colorIndex, setColorIndex] = useState(0)
  const [phide, setphide] = useState(true)
  return (
    <div className="traffic-light">
      <button onClick={()=>setColorIndex((colorIndex + 1) % (phide===true ? 3 : 4))}>CHANGE</button>
      <button onClick={()=>setphide(phide ? false : true)}>Purple</button>
      <Light color="#f00" active={colorIndex === 0} onclick={()=>setColorIndex(0)}/>
      <Light color="#ff0" active={colorIndex === 1} onclick={()=>setColorIndex(1)}/>
      <Light color="#0c0" active={colorIndex === 2} onclick={()=>setColorIndex(2)}/>
      <Light color="#000" active={colorIndex === 3} onclick={()=>setColorIndex(3)} hidden={phide===true}/>
    </div>
  )
}

export default App;
