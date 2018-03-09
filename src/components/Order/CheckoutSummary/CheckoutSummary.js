import React, { Component } from 'react';

import Burger from '../../Burger/Burger';

class CheckoutSummary extends Component {
    render() {
        return(
            <div>
                <h1>We hope it works fine!</h1>
                <div style={{width: '300px', height: '300px', margin: 'auto'}}>
                    <Burger/>
                </div>
            </div>
        );
    }
}

export default CheckoutSummary;