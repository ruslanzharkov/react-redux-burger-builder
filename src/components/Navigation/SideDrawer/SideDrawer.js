import React, { Component } from 'react';

import classes from './SideDrawer.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

class SideDrawer extends Component {
    render() {
        let attachedClasses = [classes.SideDrawer, classes.Close];
        if (this.props.show) {
            attachedClasses[1] = classes.Open;
        }

        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.clicked}/>
                <div className={attachedClasses.join(' ')}>
                    <div className={classes.Logo }>
                        <Logo/>
                    </div>
                    <nav>
                        <NavigationItems/>
                    </nav>
                </div>
            </Aux>
        );
    }
}

export default SideDrawer;