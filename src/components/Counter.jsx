import React, { useState } from 'react';
import '../styles/Counter.css'

const Counter = () => {
const [count, setCount] = useState(0);

  return (
    <div className="counter">
        <h2>Current App</h2>
        <p>Current count: <strong>{count}</strong></p>
        <div className="counter-buttons">
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)} disabled={count <= 0}>-</button>
        </div>
        {count === 10 && <p className="message">🎉👯‍♂️ You've reached 10! 🤷‍♀️🎉🎈</p>}
    </div>
  )
}

export default Counter