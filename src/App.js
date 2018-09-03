import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Gunter', age: 22},
      {name: 'Max', age: 21},
      {name: 'Agi', age: 25}
    ]
  }

  changeNameHandler = (name) => {
    this.setState({
      persons: [
        {name: name, age: 24},
        {name: 'Maxim', age: 27},
        {name: 'Agi', age: 25}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Manu', age: 24},
        {name: event.target.value, age: 27},
        {name: 'Agi', age: 25}
      ]
    });
  }

  styleSheet = {
    backgroundColor: "lightgrey",
    font: "Courier",
    padding: "3px",
    width: "140px",
    fontSize: "17px"
  }

  render() {
    return (
      <div className="App">
       <h4>React</h4>
       <button style={this.styleSheet} onClick={this.changeNameHandler.bind(this, 'Ejjj')}>Click</button>
       <Person age={this.state.persons[0].age} 
       name={this.state.persons[0].name} />
       <Person age={this.state.persons[1].age}
       name={this.state.persons[1].name}
       changeHandler = {this.changeNameHandler.bind(this, 'Eger')}
       nameHandler = {this.nameChangedHandler}
       >Helloka</Person>
       <Person age={this.state.persons[2].age}
       name={this.state.persons[2].name}/>
      </div>
    );

  }
}

export default App;
