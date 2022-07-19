<h1 align="center">React Traffic Light</h1>

<p align="center" >
  Simple interactive traffic light logic in React
</p>
<p align="center" >
  <a href="https://luisaguadovicaria.github.io/react-trafficlight/">
    <img height="44px"  src="https://github.com/LuisAguadoVicaria/LuisAguadoVicaria/raw/main/proyect-images/live-demo-button.png" alt="live-demo" align="center">
  </a>
</p>

<p align="center">
  
  ```JSX
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
```
        
</p>
<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/alexandresanlim/Badges4-README.md-Profile)[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/Ileriayo/markdown-badges)[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

</div>

<br>

## Featured

<br>
            
>   <li>Change light: <code>onClick</code></li>
>   <li>Cycle lights: <code>'CHANGE' button</code></li>
>   <li>Add/hide extra light: <code>'Purple' button</code></li>  

## Deployment

- Assuming you have installed Node.js locally, run: `npm install`
- Run: `npm run start` to start development server and test the live web site.
- Run: `npm run build` to compile the site for production.
- Look for the `/build` folder.
- Make sure the HTML and JS paths are correct and install the site on your preferred web server.

<sub><sub>You can also open any GitHub repository in Gitpod</sub></sub> 
  
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/LuisAguadoVicaria/react-trafficlight/)

## Contact

  <sub>Feel free to leave me a message, I'm friendly!</sub>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luis-aguado-vicar%C3%ADa-546b33241/)
