import React, { Component } from "react";
import "./index.css";
import { myContext } from "./ContextProvider";

class Gameboard extends Component {
  constructor() {
    super();
    this.state = {
      stakes: 8,
      unit: 40.02,
      bet_price: 0,
      winning_average: 20,
    };
    this.handleStake = this.handleStake.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handlePrices = this.handlePrices.bind(this);
    this.handleStakes = this.handleStakes.bind(this);
  }
  handleStake() {
    this.setState({
      stakes: this.state.stakes * 4,
    });
  }
  handlePrice() {
    this.setState({
      bet_price: this.state.bet_price + this.state.unit,
    });
  }
  handleStakes() {
    this.setState({
      stakes: this.state.bet_price * 0,
    });
  }
  handlePrices() {
    this.setState({
      bet_price: this.state.stakes * 0 + 8,
    });
  }
  static contextType = myContext;
  render() {
    const { lightMode, light, dark } = this.context;
    const useTheme = lightMode ? light : dark;
    return (
      <div className="App" style={{ backgroundColor: useTheme.background }}>
        <div className="btn-gameboard">
          <button
            style={{
              color: useTheme.modeFont,
              backgroundColor: useTheme.buttonColor,
            }}
          >
            {this.state.stakes}
          </button>
          <br />
          <button
            style={{
              color: useTheme.modeFont,
              backgroundColor: useTheme.buttonColor,
            }}
          >
            {this.state.unit}
          </button>
          <br />
          <button
            style={{
              color: useTheme.modeFont,
              backgroundColor: useTheme.buttonColor,
            }}
          >
            {this.state.bet_price}
          </button>
          <br />
          <button
            style={{
              color: useTheme.modeFont,
              backgroundColor: useTheme.buttonColor,
            }}
          >
            {this.state.winning_average}
          </button>
          <br />
        </div>
        <div className="btn-handle">
          <button
            style={{
              color: useTheme.modeFont,
              backgroundColor: useTheme.buttonColor,
            }}
            onClick={this.handleStake}
          >
            +Stakes
          </button>
          <button
            style={{
              color: useTheme.modeFont,
              backgroundColor: useTheme.buttonColor,
            }}
            onClick={this.handlePrice}
          >
            +Price
          </button>
          <button
            style={{
              color: useTheme.modeFont,
              backgroundColor: useTheme.buttonColor,
            }}
            onClick={this.handleStakes}
          >
            -Stakes
          </button>
          <button
            style={{
              color: useTheme.modeFont,
              backgroundColor: useTheme.buttonColor,
            }}
            onClick={this.handlePrices}
          >
            -Price
          </button>
        </div>
      </div>
    );
  }
}

export default Gameboard;
