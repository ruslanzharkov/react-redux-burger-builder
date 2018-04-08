import React, { Component } from 'react';

import classes from './Input.css';

class Input extends Component {
    render() {
        let inputElement = null;
        switch(this.props.inputtype) {
            case 'input': 
                inputElement = <input className={classes.InputElement} {...this.props}/>;
                break;
            case 'textarea': 
                inputElement = <textarea className={classes.InputElement} {...this.props}/>
                break;
            default: 
                inputElement = <input className={classes.InputElement} {...this.props}/>
                break; 
        }
        return(
            <div className={classes.Input}>
                <label className={classes.Label}>{this.props.label}</label>
                {inputElement}
            </div>
        );
    }
}

export default Input;