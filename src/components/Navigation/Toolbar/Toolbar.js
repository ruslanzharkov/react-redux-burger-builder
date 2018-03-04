import React, { Component } from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Items from '../NavigationItems/NavigationItems';

class Toolbar extends Component {
    render() {
        return(
            <header className={classes.Toolbar}>
                <div>MENU</div>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <Items/>
                </nav>
            </header>
        );
    }
}

export default Toolbar;