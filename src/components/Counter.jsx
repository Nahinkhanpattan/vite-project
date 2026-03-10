import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1>This program is writen by me "Nahin" </h1>
        <p>This is a simple counter component.</p>
        </div>
    </>
  )
}

export default Counter
