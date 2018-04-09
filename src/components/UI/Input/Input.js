import React, { Component } from 'react';

import classes from './Input.css';

class Input extends Component {
    render() {
        let inputElement = null;
        switch(this.props.elementType) {
            case 'input': 
                inputElement = <input 
                    className={classes.InputElement} 
                    {...this.props.elementConfig} 
                    value={this.props.value}/>;
                break;
            case 'textarea': 
                inputElement = <textarea 
                    className={classes.InputElement} 
                    {...this.props.elementConfig}
                    value={this.props.value}/>
                break;
            case 'select':
                inputElement = (
                <select 
                    className={classes.InputElement}
                    value={this.props.value}>
                        {this.props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>{option.displayValue}</option>
                        ))}
                </select>);
                break;
            default: 
                inputElement = <input 
                    className={classes.InputElement} 
                    {...this.props.elementConfig}
                    value={this.props.value}/>
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