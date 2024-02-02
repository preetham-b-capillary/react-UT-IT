import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          marginLeft: "10px",
        }}
      >

        <h1>Counter</h1>
        <button data-testid="increment-btn" onClick={() => setCount((val) => val + 1)}>Increment</button>
        <button data-testid="decrement-btn"
          onClick={() => setCount((val) => (val - 1 >= 0 ? val - 1 : val))}
        >
          Decrement
        </button>
      </div>
      <h2 data-testid="count-val" style={{ marginTop: "20px", alignItems: "center" }}>
        Counter Value is {count}
      </h2>
    </div>

  );
}




export default App;
