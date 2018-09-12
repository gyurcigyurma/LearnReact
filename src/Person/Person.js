import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
  const style = {
    '@media (min-width: 522px)': {
      padding: '0.6em 1.2em',
      color: 'red',
      width: '499px',
      backgroundColor: "black" 
    },
  };
  const anyError = Math.random();
  
  if(anyError > 0.8) {
    throw new Error("OOOPs");
  }
  return (

    <div className="Person" style={style}>
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years olds</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default Radium(person);