import React from "react";

//import styled-components
import { MainCont } from "../Styles.js";

//Import Components
import CharInfo from "./CharInfo.js";

function CardContainer({ charArr, enlarge }) {
  return (
    <MainCont>
      {charArr.map(char => {
        return <CharInfo enlarge={enlarge} key={char.name} char={char} />;
      })}
    </MainCont>
  );
}

export default CardContainer;
