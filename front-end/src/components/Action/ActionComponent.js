
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setFruitOne, setFruitTwo } from "../actions/simpleActions";
import FruitComponent from "./FruitComponent";
import "../App.css";

const ActionComponent = (props) => {
  const [fruitOne, setNewFruitOne] = useState("");
  const [fruitTwo, setNewFruitTwo] = useState("");
  const [dogInfo, setDogInfo] = useState({});
  const [error, setError] = useState({});
  const setFruitOneAction = (event) => {
    props.setFruitOne(fruitOne);
  };

  const setFruitTwoAction = (event) => {
    props.setFruitTwo(fruitTwo);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      res
        .json()
        .then((res) => setDogInfo(res))
        .catch((err) => setError(err));
    }
    //fetchData();
    setTimeout(() => fetchData(), 500);
  });

  return (
    <div className="App">
      <label>
        FruitOne:
        <input
          type="text"
          value={fruitOne}
          onChange={(e) => setNewFruitOne(e.target.value)}
        />
      </label>
      <button onClick={setFruitOneAction}>Save</button>
      <label>
        FruitTwo:
        <input
          type="text"
          value={fruitTwo}
          onChange={(e) => setNewFruitTwo(e.target.value)}
        />
      </label>
      <button onClick={setFruitTwoAction}>Save</button>
      <FruitComponent />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setFruitOne: (fruitOne) => dispatch(setFruitOne(fruitOne)),
  setFruitTwo: (fruitTwo) => dispatch(setFruitTwo(fruitTwo)),
});

export default connect(null, mapDispatchToProps)(ActionComponent);
