import React, { Component } from 'react';

import classes from './SideDrawer.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

class SideDrawer extends Component {
    render() {
        return(
            <div className={classes.SideDrawer}>
                <Logo/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        );
    }
}

export default SideDrawer;