import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const Hello = () => {
  return (
    <>
      <p>Hello World</p>
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)
    let now = new Date()
    let a = 10;
    let b = 20;

    console.log(now, a+b);

  return (
    <>
      <p>Greetings{now.toString}</p>
      <p>
        {a} + {b} is {a+b}
      </p>
      <Hello/>
      <Hello/>
    </>
  )
}

export default App
