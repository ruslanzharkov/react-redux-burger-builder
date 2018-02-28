import React, { Component } from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

class BuildControls extends Component {
    render() {
        const controls = [
            {label: 'Salad', type: 'salad'},
            {label: 'Bacon', type: 'bacon'},
            {label: 'Cheese', type: 'cheese'},
            {label: 'Meat', type: 'meat'}
        ];
        return(
            <div className={classes.BuildControls}>
                <p>Current Price: <strong>{this.props.price.toFixed(2)}</strong></p>
                {controls.map((control) => {
                    return <BuildControl git
                        key={control.label}
                        label={control.label}
                        added={() => this.props.ingredientAdded(control.type)}
                        removed={() => this.props.ingredientRemoved(control.type)}
                        disabled={this.props.disabled[control.type]}
                    />
                })}
            </div>
        );
    }
}

export default BuildControls;