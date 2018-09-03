import React from 'react';
import './Person.css';

const person = (props) => {    
    return (
      <div className="Person">
         <h1 onClick={props.changeHandler}>I'm {props.name} and I'm {props.age} years olds</h1>
         <p>{props.children}</p>
         <input type="text" onChange={props.nameHandler} value={props.name} />
      </div>

    )
}

export default person;