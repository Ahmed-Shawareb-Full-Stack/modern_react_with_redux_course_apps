import React from "react";
import ReactDOM from "react-dom";

const rootEle = document.getElementById("root");
const root = ReactDOM.createRoot(rootEle);

function App() {
  return <h1>Hello From React!</h1>;
}

root.render(<App />);
