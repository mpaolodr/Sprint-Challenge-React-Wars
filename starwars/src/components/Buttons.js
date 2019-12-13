import React from "react";

//Import styles
import { BtnContainer, Btn } from "../Styles.js";

function Buttons({ nextPage, prevPage }) {
  return (
    <BtnContainer>
      <Btn onClick={prevPage}> ⎗ </Btn>
      <Btn onClick={nextPage}>⎘ </Btn>
    </BtnContainer>
  );
}

export default Buttons;
