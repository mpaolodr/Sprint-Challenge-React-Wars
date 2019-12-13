import styled from "styled-components";

//Styles for Appcontainer
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

//styles for Cardcontainer
export const MainCont = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  padding: 10px;
  border: 2px solid white;
`;

//styles for charinfo
export const Info = styled.div`
  width: 200px;
  height: 150px;
  text-align: left;
  padding: 5px;
  background-color: black;
  margin-bottom: 10px;
`;

export const Text = styled.h1`
  color: white;

  ${props =>
    props.type === "name" ? `font-size: 1.2rem` : `font-size: 0.7rem`}
`;
