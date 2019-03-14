import React from 'react';
import { Person } from './Person';

const persons = (props) => props.persons.map( (person, index) => {
        return <Person
                  key={person.id}
                  delete={() => props.deletePerson(index)}
                  name={person.name} 
                  age={person.age}
                  changed={(event) => props.nameChanged(event, person.id)} />
      }
);

export default persons;