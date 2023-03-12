import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import AuthContext from "./contexts/AuthContext";

function App() {
  const { login } = useContext(AuthContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Edit <code>src/contexts/AuthContext.tsx </code> authentication
          context.
        </p>
        <button className="App-link" onClick={login}>
          Login
        </button>
      </header>
    </div>
  );
}

export default App;
