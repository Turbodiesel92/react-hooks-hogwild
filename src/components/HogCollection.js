import React from "react";
import HogCard from "./HogCard";

function HogCollection({ hogs }) {
  const detailHogs = hogs.map((hog) => (
    <HogCard
      key={hog.name}
      name={hog.name}
      specialty={hog.greased}
      greased={hog.greased}
      weight={hog.weight}
      medal={hog["highest medal achieved"]}
      image={hog.image}
    />
  ));

  return <div>{detailHogs}</div>;
}

export default HogCollection;
