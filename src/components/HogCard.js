import React, { useState } from "react";

function HogCard({ name, specialty, greased, weight, medal, image }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (clicked === true) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <div className="tile" onClick={handleClick}>
      <p>{name}</p>
      <img src={image} />
      <p>{clicked ? specialty : null} </p>
      <p>{clicked ? greased : null}</p>
      <p>{clicked ? weight : null}</p>
      <p>{clicked ? medal : null}</p>
    </div>
  );
}

export default HogCard;

