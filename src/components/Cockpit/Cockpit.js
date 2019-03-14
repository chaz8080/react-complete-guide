import React, { useEffect } from 'react';
import cssClasses from './Cockpit.module.css';

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //HTTP request...
        const timer = setTimeout(() => {
            alert('Saved data to the cloud');
        }, 1000);
        return () => {
          clearTimeout(timer);  
          console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      }
    });

    const assignedClasses = [];
    let btnClass = null;

    if (props.showPersons) {
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

export default React.memo(cockpit);