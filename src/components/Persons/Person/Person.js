import React, { Component } from 'react';

import personClasses from './Person.module.css';

class Person extends Component {
    render () {
        console.log('[Person.js] rendering...');
        return ( <div className={personClasses.Person}>
                    <p onClick={this.props.delete}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input 
                        type="text" 
                        onChange={this.props.changed} 
                        defaultValue={this.props.name} />
                </div>
        );
    };
};

export default Person;