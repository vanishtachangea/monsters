import React, { Component } from "react";

import CardList from "./Components/cardlist/cardList.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ monsters: json }));
  }
  render() {
    return (
      <div>
        <h3>App</h3>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
