import React from  'react';

import classes from './Burguer.css';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = (props) => {
    return (
        <div classes={classes.Burger}>
            <BurguerIngredient type="bread-top"/>
            
        </div>
    );
};

export default burguer;