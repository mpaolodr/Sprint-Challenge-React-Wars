import React from "react";

//Import Components
import CharInfo from "./CharInfo.js";

function CardContainer({ charArr }) {
  return (
    <div>
      {charArr.map(char => {
        return <CharInfo char={char} />;
      })}
    </div>
  );
}

export default CardContainer;
