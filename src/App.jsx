import React, { Component } from "react";
import Gameboard from "./Gameboard";
import "./App.css";
import ContextProvider from "./ContextProvider";
import ThemeButton from "./ThemeButton";

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <Gameboard />
        <ThemeButton />
      </ContextProvider>
    );
  }
}

export default App;
