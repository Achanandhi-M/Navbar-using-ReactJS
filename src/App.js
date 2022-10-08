import { useState } from 'react';
import './App.css';
import CountClass from "./CountClass";

function App() {
  const [count,setCount] = useState(0)
  const clickable = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <div style={{ textAlign:"center" }}>Fun Count :{count} </div>
      <button onClick={() => clickable()}>Click Me !</button>
      </div>
  );
}

export default App;
