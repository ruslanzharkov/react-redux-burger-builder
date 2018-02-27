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
            }).reduce((arr, el) => {
                return arr.concat(el);
            }, []);

        return (
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                { transformedIngredients.length === 0 ? <p>Please, start adding ingredients!</p> : transformedIngredients }
                <BurgerIngredient type="bread-bottom"/>
            </div>
        );
    };
}
export default Burger;