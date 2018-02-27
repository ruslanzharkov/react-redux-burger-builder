import React, { Component } from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

class Burger extends Component {
    render() {
        let transformedIngredients = Object.keys(this.props.ingredients)
            .map(ingredientKey => {
                return [...Array(this.props.ingredients[ingredientKey])].map((_, i) => {
                    return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
                });
            });

        return (
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom"/>
            </div>
        );
    };
}
export default Burger;