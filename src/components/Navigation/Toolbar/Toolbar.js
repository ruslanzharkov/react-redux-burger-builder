import React, { Component } from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Items from '../NavigationItems/NavigationItems';
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

class Toolbar extends Component {
    render() {
        return(
            <header className={classes.Toolbar}>
                <div onClick={this.props.openSide}>
                    <DrawerToggle/>
                </div>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav className={classes.DesktopOnly}>
                    <Items/>
                </nav>
            </header>
        );
    }
}

export default Toolbar;