import styled from "styled-components";

//Styles for Appcontainer
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

//styles for Cardcontainer
export const MainCont = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
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
  border-radius: 10px;
`;

export const Text = styled.h1`
  color: white;

  ${props =>
    props.type === "name" ? `font-size: 1.2rem` : `font-size: 0.7rem`}
`;

export const BtnContainer = styled.div`
  border: 2px solid white;
  width: 80%;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
`;

export const Btn = styled.button`
  width: 5%;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 10px;

  &:hover {
    color: white;
    background: black;
    transition: all 0.5s;
    border: 0.5px solid white;
  }
`;
