
import React from "react";
import { connect } from "react-redux";
// import { getFruitOne, getFruitTwoSelector } from "../selectors/fruitSelector";

const FruitComponent = (props) => {
  return (
    <div>
      <div>Fruit One: {props.fruitOne} </div>
      <div>Fruit Two: {props.fruitTwo} </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    fruitOne: state.simpleReducer.fruitOne,
    fruitTwo: state.simpleReducer.fruitTwo
  };
};

export default connect(mapStateToProps, null)(FruitComponent);
