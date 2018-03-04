import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawer: true
        };
    }

    sideDrawerShowHandler = () => {
        this.setState({
            sideDrawer: !this.state.sideDrawer
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar/>
                <SideDrawer show={this.state.sideDrawer} clicked={this.sideDrawerShowHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;