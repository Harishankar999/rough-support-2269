
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";

import './App.css';


import "./App.css";
import MainRoutes from './Pages/MainRoutes';

function App() {
  return (
    <div className="App">

      <Home />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home />
      <MainRoutes />
    </div>
  );
}

export default App;
