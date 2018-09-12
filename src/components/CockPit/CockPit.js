import React from 'react';

const cockpit = (props) => {
    const classes = [];

    let styleSheet = {
        backgroundColor: "green",
        color: "white",
        font: "Courier",
        padding: "3px",
        width: "140px",
        fontSize: "17px"
      }

    if(props.isPersonsVisible) {
        styleSheet.backgroundColor = "red";
    }
    
    if (props.persons.length <= 2) {
        classes.push('red');
    }

    if (props.persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <div>
            <h4>React</h4>
            <p className={classes.join(' ')}>This is great</p>
            <button style={styleSheet} onClick={props.togglePersonHandler}>Click</button>
        </div>
    )
}

export default cockpit;