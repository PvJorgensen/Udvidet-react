import { useState } from 'react'
import './App.css'
import { Counter } from './komponents/Counter/Counter.jsx'
import { Hilsen } from './komponents/Hilsen/Hilsen.jsx'
import { Todo } from './komponents/Todo/Todo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter></Counter>
      <br/>
      <Hilsen></Hilsen>
      <br />
      <Todo></Todo>
    </>
  )
}

export default App
