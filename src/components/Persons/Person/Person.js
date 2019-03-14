import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withClass } from '../../../hoc/WithClass';
import cssClasses from './Person.module.css';
import { AuthContext } from '../../../context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  
  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log('[Person.js] ', this.context);
  }
  
  render () {
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
          {this.context.authenticated ? <p>Authenticated</p> : <p>Please login</p> }
          <p onClick={this.props.delete}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input 
            type="text"
            // ref={(inputEl) => { this.inputElement = inputEl }}
            ref={this.inputElementRef}
            onChange={this.props.changed} 
            defaultValue={this.props.name} />
        
      </Fragment>
      );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default withClass(Person, cssClasses.Person);