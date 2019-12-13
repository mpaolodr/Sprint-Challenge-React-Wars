import React, { useState, useEffect } from "react";
import axios from "axios";

//Import Components
import CardContainer from "./components/CardContainer.js";
import Buttons from "./components/Buttons";

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
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(res => {
        setCharArr(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [page]);

  //functions to change page
  const nextPage = () => {
    if (page !== 9) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  return (
    <AppContainer>
      <h1 className="Header">React Wars</h1>
      <CardContainer charArr={charArr} />
      <Buttons nextPage={nextPage} prevPage={prevPage} />
    </AppContainer>
  );
};

export default App;
