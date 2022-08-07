import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'
import { decrement, increment, incrementByAmount } from './store/slices/counter'
import { useRef } from 'react'

function App() {
  const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch()
  const amount = useRef(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
        <b>Count is {counter}</b>
        </p>
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
        <button onClick={ () => dispatch( incrementByAmount(Number(amount.current.value) || 0) ) }>
          Increment by 
          <input type='number' ref={amount}  />
        </button>
      </div>
    </div>
  )
}

export default App
