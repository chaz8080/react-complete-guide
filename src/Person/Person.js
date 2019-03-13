import React from 'react';

import personClasses from './Person.module.css';

const person = (props) => {
    return ( <div className={personClasses.Person}>
                <p onClick={props.delete}>I'm {props.name} and I'm {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} defaultValue={props.name} />
            </div>
    );
};

export default person;