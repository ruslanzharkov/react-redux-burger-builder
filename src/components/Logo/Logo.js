import React, { Component } from 'react';

import burgerLogo from '../../assets/images/127 burger-logo.png';
import classes from './Logo.css';

class Logo extends Component {
    render() {
        return(
            <div className={classes.Logo}>
                <img src={burgerLogo} alt="Burger" style={{height: this.props.height}}/>
            </div>
        );
    }
}

export default Logo;