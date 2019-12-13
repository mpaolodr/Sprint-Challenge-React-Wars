import React from "react";

function CharInfo({ char }) {
  return (
    <div>
      <h1>{char.name}</h1>
      <h2>{char.gender}</h2>
    </div>
  );
}

export default CharInfo;
