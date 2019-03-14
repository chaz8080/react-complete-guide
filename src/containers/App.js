import React, { Component } from 'react';
import { Persons, Cockpit } from '../components';
// is there a better way to get App.modules.css???
import appClasses from './App.module.css';

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
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons}
                  deletePerson={this.deletePersonHandler}
                  nameChanged={this.nameChangedHandler} />;

    }

    return (
        <div className={appClasses.App}>
          <Cockpit 
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            togglePerson={this.togglePersonHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;
