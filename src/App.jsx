import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { apiInstance } from "./utils/axiosInstance";

function App() {
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    apiInstance
      .post("/login", { email, password })
      .then((response) => {
        if (response.statusText === "OK") {
          alert("로그인 성공");
        } else {
          alert("로그인 실패");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <br />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 ring-4 ring-yellow-400 ring-offset-2"
      >
        <input placeholder="email" name="email" />
        <input placeholder="password" name="password" type="password" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
