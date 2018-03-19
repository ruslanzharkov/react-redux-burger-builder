import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Item.css';

class Item extends Component {
    render() {
        return(
            <li className={classes.NavigationItem}>
                <NavLink
                    to={this.props.link}>
                    {this.props.children}
                </NavLink>
            </li>
        );
    }
}

export default Item;