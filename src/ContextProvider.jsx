import React, { Component } from "react";

export const myContext = React.createContext();

class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      lightMode: true,
      light: {
        modeFont: "#ffffff",
        background: "#ffffff",
        buttonColor: "#125538",
      },
      dark: {
        modeFont: "#125538",
        background: "#125538",
        buttonColor: "#ffffff",
      },
    };
  }
  changeTheme = () => {
    this.setState({
      lightMode: !this.state.lightMode,
    });
  };
  render() {
    return (
      <div>
        <myContext.Provider
          value={{ ...this.state, changeTheme: this.changeTheme }}
        >
          {this.props.children}
        </myContext.Provider>
      </div>
    );
  }
}

export default ContextProvider;
