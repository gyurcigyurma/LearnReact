import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let styleSheet = {
      backgroundColor: "green",
      color: "white",
      font: "Courier",
      padding: "3px",
      width: "140px",
      fontSize: "17px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    }

    if (this.state.isPersonsVisible) {
      personsContainer =
        (<div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => {
                    this.deletePersonHandler(person, index);
                  }}
                  key={person.id}
                  changed={(event) => this.changeNameHandler(event, person.id)} />
              )
            })
          }
        </div>)
      styleSheet.backgroundColor = "red";
      styleSheet[':hover'] = {
        backgroundColor: "salmon",
        color: "black"
      }

    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <StyleRoot>
        <ErrorBoundary>
        <div className="App">
          <h4>React</h4>
          <p className={classes.join(' ')}>This is great</p>
          <button style={styleSheet} onClick={this.togglePersonHandler}>Click</button>
          {personsContainer}
        </div>
        </ErrorBoundary>
      </StyleRoot>
    );

  }
}

export default (App);
