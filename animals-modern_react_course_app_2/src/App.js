//! ─── Imports ─────────────────────────────────────────────────────────────────
import "./App.scss";
import { useState } from "react";

//! ─── Import Components ───────────────────────────────────────────────────────
import AnimalShow from "./components/AnimalShow";
//! ─── App Component ───────────────────────────────────────────────────────────

const getRandomAnimal = () => {
  const animals = ["cat", "bird", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>

      <div className="animals">{renderedAnimals}</div>
    </div>
  );
}

export default App;
