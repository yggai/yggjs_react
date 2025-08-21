import { Routes, Route, Link } from 'react-router-dom'
import { useCounterStore } from './store/counter'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

function Home() {
  const { count, increment, decrement } = useCounterStore()

  return (
    <div>
      <h1>Home Page</h1>
      <div className="card">
        <button onClick={decrement}>-</button>
        <span>count is {count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a basic React template with Vite, TypeScript, Zustand, and React Router.</p>
    </div>
  )
}

export default App