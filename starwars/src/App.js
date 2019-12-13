import React, { useState, useEffect } from "react";
import axios from "axios";

//Import Components
import CardContainer from "./components/CardContainer.js";

//Import styles
import { AppContainer } from "./Styles.js";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // const [data, setData] = useState([]);
  const [charArr, setCharArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/?page=1")
      .then(res => {
        console.log(res.data.results);
        // setData(res.data);
        setCharArr(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <AppContainer>
      <h1 className="Header">React Wars</h1>
      <CardContainer charArr={charArr} />
    </AppContainer>
  );
};

export default App;
