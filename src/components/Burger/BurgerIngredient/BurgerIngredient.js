import React from 'react';

import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch(props.type) {
        case 'bread-bottom':
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case 'bread-top':
            ingredient = (
                <div className={classes.BreadTop}>
                    <div classname={classes.Seeds1}></div>
                    <div classname={classes.Seeds2}></div>
                </div>
            );
        default:
            break;
    }
};

export default burgerIngredient;