import React, { Component } from 'react';

import classes from './NavigationItems.css';
import Item from './Item/Item';

class NavigationItems extends Component {
    render() {
        return(
            <ul className={classes.NavigationItem}>
                <Item link="/" active>Burger Builder</Item>
                <Item link="/">Checkout</Item>
            </ul>
        );
    }
}

export default NavigationItems;