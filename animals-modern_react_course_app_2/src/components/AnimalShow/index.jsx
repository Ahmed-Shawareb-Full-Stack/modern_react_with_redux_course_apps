//! ─── Imports ─────────────────────────────────────────────────────────────────
import { useState } from "react";
import "./styles.scss";
//! ─── Assets Import ───────────────────────────────────────────────────────────
import bird from "../../assets/svg/bird.svg";
import cat from "../../assets/svg/cat.svg";
import cow from "../../assets/svg/cow.svg";
import dog from "../../assets/svg/dog.svg";
import gator from "../../assets/svg/gator.svg";
import horse from "../../assets/svg/horse.svg";
import heart from "../../assets/svg/heart.svg";
//! ─── AnimalShow Component ────────────────────────────────────────────────────

const animalSVG = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count++);
  };
  return (
    <div onClick={handleClick} className="animal">
      <img src={animalSVG[type]} alt="animal" className="animal__image" />
      <img
        src={heart}
        alt="heart"
        style={{ width: 1 + 1 * count + "rem" }}
        className="heart"
      />
    </div>
  );
}

export default AnimalShow;
