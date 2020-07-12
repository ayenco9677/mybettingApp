import React, { Component } from "react";
import { myContext } from "./ContextProvider";

class ThemeButton extends Component {
  static contextType = myContext;
  render() {
    const { changeTheme } = this.context;
    return (
      <div>
        <button
          onClick={changeTheme}
          style={{
            height: "30px",
            backgroundColor: "black",
            width: "300px",
            color: "#fff",
            borderRadius: "5px",
            margin: "40px auto",
            marginLeft: "525px",
            fontSize: "18px",
          }}
        >
          Mode
        </button>
      </div>
    );
  }
}

export default ThemeButton;
