import React from 'react';
import cssClasses from './Cockpit.module.css';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = null;

    if (props.showPerson) {
        btnClass = cssClasses.Red;
    }
    
    if (props.personsLength <= 3) {
      assignedClasses.push( cssClasses.Cockpit );
    }
    
    if (props.personsLength <= 2) {
      assignedClasses.push( cssClasses.red );
    }
    
    if (props.personsLength <= 1) {
      assignedClasses.push( cssClasses.bold );
    }

    return (
        <div className={cssClasses.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>Learning Reaact</p>
            <button
                className={btnClass}
                onClick={props.togglePerson} >Toggle Persons</button>  
        </div>
    );
}

export default cockpit;