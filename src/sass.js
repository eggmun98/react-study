import { Component } from "react";
import "./assets/sass.scss";

export default class Sass extends Component {
  state = {
    isColorChanged: false,
  };

  toggleColor = () => {
    this.setState((prevState) => ({
      isColorChanged: !prevState.isColorChanged,
    }));
  };

  render() {
    return (
      <div className="SassStyle">
        <h1>Sass</h1>
        <p>무슨 색일까요?</p>
        <button
          onClick={this.toggleColor}
          className={this.state.isColorChanged ? "a" : ""}
        >
          색깔 변경
        </button>
      </div>
    );
  }
}
