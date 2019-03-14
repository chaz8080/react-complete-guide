import React, { Component } from 'react';
import { Person } from './Person';
import appClasses from './App.module.css';
import { ErrorBoundary } from './ErrorBoundary';

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
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <ErrorBoundary key={person.id}>
                      <Person
                        delete={this.deletePersonHandler.bind(this, index)}
                        name={person.name} 
                        age={person.age}
                        changed={(event) => this.nameChangedHandler(event, person.id)} />
                    </ErrorBoundary> 
          })}
        </div>
      );

      btnClass = appClasses.Red;
    }

    let assignedClasses = [];
    
    if (this.state.persons.length <= 3) {
      assignedClasses.push( appClasses.App );
    }
    
    if (this.state.persons.length <= 2) {
      assignedClasses.push( appClasses.red );
    }
    
    if (this.state.persons.length <= 1) {
      assignedClasses.push( appClasses.bold );
    }

    return (
        <div className={appClasses.App}>
          <p className={assignedClasses.join(' ')}>Learning Reaact</p>
          <button
            className={btnClass}
            onClick={this.togglePersonHandler} >Toggle Persons</button>  
          {persons}
        </div>
    );
  }
}

export default App;
