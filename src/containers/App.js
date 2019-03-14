import React, { Component } from 'react';
import { Persons, Cockpit } from '../components';
import cssClasses from './App.module.css';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: "sdfsdg", name: "Max", age: "28" },
      { id: "sdfhtr", name: "Charles", age: "32" },
      { id: "fdgher", name: "Stacy", age: "26" }
    ],
    showPersons: false,
    showCockpit: true
  }

//   static getDerivedStateFromProps(props, state) {
//     console.log('[App.js] getDerivedStateFromProps', props);
//     return state;
//   }

//   componentWillMount() {
//       console.log('[App.js] componentWillMount');
//   }

  componentDidMount() {
      console.log('[App.js] compomnentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[App.js] componentShouldUpdate');
    return true;
  }

  componentWillUpdate() {
      console.log('[App.js] componentWillUpdate');
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

  toggleCockpitHandler = () => {
    const doesShow = this.state.showCockpit;
    this.setState({showCockpit: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons}
                  deletePerson={this.deletePersonHandler}
                  nameChanged={this.nameChangedHandler} />;

    }

    return (
      <div className={cssClasses.App}>
        <button onClick={() => {this.toggleCockpitHandler()}}>Toggle Cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          togglePerson={this.togglePersonHandler}/>
        ) : null }
        {persons}
      </div>
    );
  }
}

export default App;
