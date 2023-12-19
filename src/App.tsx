import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CaptureProducts from "./modules/capture-products/CaptureProducts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>QUARPHIX ASSESSMENT</h3>
      </header>
      <CaptureProducts />
    </div>
  );
}

export default App;
