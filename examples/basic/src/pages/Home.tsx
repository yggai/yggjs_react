import { useCounterStore } from '../store/counter'

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

export default Home