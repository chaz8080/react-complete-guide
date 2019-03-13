import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: "28" },
      { name: "Charles", age: "32" },
      { name: "Stacy", age: "26" }
    ]
  }

  switchNameHandler = (newAge) => {
    console.log('switchNameHandler');
    this.setState({ 
      persons:[
          { name: "Max", age: "28" },
          { name: "Charles", age: newAge },
          { name: "Stacy", age: Math.floor(Math.random() * 30)}
      ] 
    });
  };

  nameChangedHandler = (event) => {
    console.log('nameChangedHandler');
    this.setState({ 
      persons:[
          { name: "Max", age: "28" },
          { name: event.target.value, age:"32" },
          { name: "Stacy", age: "22"}
      ] 
    });
  }
  
  render() {
    // inline styling
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        {/* Using anonymous function be less performant than bind, should be avoided */}
        <button 
        style={style}
        onClick={() => this.switchNameHandler(Math.floor(Math.random() * 30))} >Switch Name</button> 
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 30)} 
          changed={this.nameChangedHandler} >My hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
