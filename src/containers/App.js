import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/CockPit/CockPit';

class App extends Component {
  state = {
    persons: [
      { id: 'as22', name: 'Gunter', age: 22 },
      { id: 'as1112', name: 'Max', age: 21 },
      { id: 'as6546', name: 'Agi', age: 25 }
    ],
    isPersonsVisible: false
  }

  togglePersonHandler = () => {
    const personsVisible = this.state.isPersonsVisible;
    this.setState({
      isPersonsVisible: !personsVisible
    })
  }

  deletePersonHandler = (person, index) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });

  }


  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id
    });

    const personCopy = {
      ...this.state.persons[personIndex]
    }

    //const personCopy = Object.assign({},this.state.persons[personIndex]);
    personCopy.name = event.target.value;

    const persons = [
      ...this.state.persons
    ];

    persons[personIndex] = personCopy;
    //this.setState({ persons : persons  })
    this.setState({ persons });

  }

  render() {
    let personsContainer = null;

    if (this.state.isPersonsVisible) {
      personsContainer =
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.changeNameHandler}
        />
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          togglePersonHandler={this.togglePersonHandler}
          isPersonsVisible={this.state.isPersonsVisible}
        />
        {personsContainer}
      </div>
    );

  }
}

export default (App);
