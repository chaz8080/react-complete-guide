import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: "sdfsdg", name: "Max", age: "28" },
      { id: "sdfhtr", name: "Charles", age: "32" },
      { id: "fdgher", name: "Stacy", age: "26" }
    ],
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
  }
  
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    // inline styling
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
                    delete={this.deletePersonHandler.bind(this, index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];
    
    if (this.state.persons.length <= 3) {
      classes.push('App');
    }
    
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <p className={classes.join(' ')}>Learning Reaact</p>
          <button 
          style={style}
          onClick={this.togglePersonHandler} >Toggle Persons</button>  
          {persons}
        </div>
    );
  }
}

export default App;
