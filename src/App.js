import React, { Component } from "react";
import ColorBox from "./ColorBox.js";
import BlogPost from "./BlogPost.js";

class App extends Component {
  // Nothing needs to change here!
  // Make note of what prop we are initially passing to `ColorBox` below!

  render() {
    return (
      <div id="app">
        <BlogPost />

        <div id="seperator"></div>
        <div className="wrapper">
          <ColorBox opacity={1} />
        </div>
      </div>
    );
  }
}

export default App;
