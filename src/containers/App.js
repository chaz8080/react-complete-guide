import React, { Component } from 'react';
import { Persons, Cockpit } from '../components';
import cssClasses from './App.module.css';
import { withClass } from '../hoc/WithClass';
import { Auxillary } from '../hoc/Auxillary';
import { AuthContext } from '../context';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: "sdfsdg", name: "Max", age: 28 },
      { id: "sdfhtr", name: "Charles", age: 32 },
      { id: "fdgher", name: "Stacy", age: 26 }
    ],
    showPersons: false,
    showCockpit: true,
    authenticated: false
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
  };
  
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  toggleCockpitHandler = () => {
    const doesShow = this.state.showCockpit;
    this.setState({showCockpit: !doesShow});
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  loginHandler = () => {
    this.setState({authenticated: true})
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons}
                  deletePerson={this.deletePersonHandler}
                  nameChanged={this.nameChangedHandler}
                  isAuthenticated={this.state.authenticated} />;

    }

    return (
      <Auxillary classes={cssClasses.App}>
        <button 
          onClick={() => {this.toggleCockpitHandler()}}>Toggle Cockpit</button>
          <AuthContext.Provider 
            value={{authenticated: this.state.authenticated,
                    login: this.loginHandler
                    }}>
              {this.state.showCockpit ? (
                <Cockpit
                appTitle={this.props.title}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                togglePerson={this.togglePersonHandler} />
              ) : null }
              {persons}
          </AuthContext.Provider>
      </Auxillary>
    );
  }
}

export default withClass(App, cssClasses.App);
