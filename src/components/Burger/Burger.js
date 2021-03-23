import React from  'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div classes={classes.Burger}>
            <BurgerIngredient type="bread-bottom"/>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bacon"/>
        </div>
    );
};

export default burger;