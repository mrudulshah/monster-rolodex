import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchStr: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChangeEvent = e => {
    this.setState({ searchStr: e.target.value });
  };

  render() {
    const { monsters, searchStr } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchStr.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <header className="App-header">
        <h1>Love to Diya Nishka</h1>
          <SearchBox
            placeholder="Search Monsters"
            handleChange={this.handleChangeEvent}
          />
          <CardList monsters={filteredMonsters} />
        </header>
      </div>
    );
  }
}

export default App;
