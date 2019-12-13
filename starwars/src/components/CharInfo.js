import React from "react";

//import styled-components
import { Info, Text } from "../Styles.js";

function CharInfo({ char }) {
  return (
    <Info>
      <Text type="name">Name: {char.name}</Text>
      <Text type="gender">Gender: {char.gender}</Text>
      <Text type="hair-color">Hair-color: {char.hair_color}</Text>
    </Info>
  );
}

export default CharInfo;
