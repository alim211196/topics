import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "./countSlice";
import { useContext } from "react";
import { MyContext } from "./MyContext";

function App() {
  const [localCount, setLocalCount] = useState(0);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const { contextCount, setContextCount } = useContext(MyContext);
  console.log(contextCount);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <span>
          <p>Using Context</p>
          <button onClick={() => setContextCount((count) => count + 1)}>
            count is {contextCount}
          </button>
        </span>
        <span>
          <p>Using State</p>
          <button onClick={() => setLocalCount((count) => count + 1)}>
            count is {localCount}
          </button>
        </span>
        <span>
          <p>Using Redux</p>
          <button onClick={() => dispatch(setCount(1))}>
            count is {count}
          </button>
        </span>
      </div>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
