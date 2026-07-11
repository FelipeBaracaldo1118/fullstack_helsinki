import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const Hello = (props) => {
  return (
    <>
      <p>Hello World {props.name} and your age is {props.age} </p>
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)
    let now = new Date()
    let a = 10;
    let b = 20;

    console.log(now, a+b);
    
    const name = 'Felipe'
    const age = 24;
const Footer = () => {
  return (
    <>
      <button>Hello</button>
    </>
  )
}
  return (
    <>
      <p>Greetings{now.toString}</p>
      <p>
        {a} + {b} is {a+b}
      </p>
      <Hello name='George' age={17}/>
      <Hello name={name} age ={age}/>
      <Footer/>
    </>
  )
}

export default App
