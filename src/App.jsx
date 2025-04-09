import { useState } from "react";
import poridhiLogo from "./assets/poridhi.png";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={poridhiLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Introduction To Docker</h1>
    </>
  );
}

export default App;
