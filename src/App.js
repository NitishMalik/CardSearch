import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/cardList";
import { Search } from "./components/search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchVal: ""
    };
    //this.inputChange = this.inputChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(data => this.setState({ monsters: data }));
  }

  inputChange = e => {
    this.setState({ searchVal: e.target.value }, () => console.log(this.state));
  };

  render() {
    const { monsters, searchVal } = this.state;
    const filteredMonsters = monsters.filter(m =>
      m.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Search</h1>
        <Search inputChange={this.inputChange} placeholder="Search Monsters" />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
