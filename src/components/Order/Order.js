import React, { Component } from 'react';

import classes from './Order.css';

class Order extends Component {
    render() {
        return(
            <div className={classes.Order}>
                <p>Ingredients: Salad (1)</p>
                <p>Price: <strong>USD 5.45</strong></p>
            </div>
        );
    }
}

export default Order;