import React from "react";

//import styled-components
import { MainCont } from "../Styles.js";

//Import Components
import CharInfo from "./CharInfo.js";

function CardContainer({ charArr }) {
  return (
    <MainCont>
      {charArr.map(char => {
        return <CharInfo char={char} />;
      })}
    </MainCont>
  );
}

export default CardContainer;
