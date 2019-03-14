import React, { useEffect, useRef, useContext } from 'react';
import cssClasses from './Cockpit.module.css';
import { AuthContext } from '../../context';

const cockpit = (props) => {

  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //HTTP request...
    // const timer = setTimeout(() => {
    //   alert('Saved data to the cloud');
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      // clearTimeout(timer);  
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
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.togglePerson} >Toggle Persons</button>  
      {<button onClick={authContext.login}>Log in</button>}
    </div>
  );
}

export default React.memo(cockpit);