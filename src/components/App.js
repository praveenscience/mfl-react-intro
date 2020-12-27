import React, { Component } from "react";
import Header from "./Header";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true}>React App</Header>
        <p className="mt-3 text-center">
          Hey, we just built an awesome React App!
        </p>
      </div>
    );
  }
}
