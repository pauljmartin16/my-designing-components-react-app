import React from "react";
import withData from "../src/components/withData";

// pjm - runs as api/speakers api

const Speakers = ({ speakers }) => {
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => {
        return (
          <img src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc}></img>
        );
      })}
    </div>
  );
};

export default withData(2)(Speakers);
