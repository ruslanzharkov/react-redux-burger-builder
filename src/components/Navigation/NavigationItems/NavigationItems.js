import React, { Component } from 'react';

import classes from './NavigationItems.css';
import Item from './Item/Item';

class NavigationItems extends Component {
    render() {
        return(
            <ul className={classes.NavigationItem}>
                <Item link="/">Burger Builder</Item>
                <Item link="/orders">Orders</Item>
            </ul>
        );
    }
}

export default NavigationItems;