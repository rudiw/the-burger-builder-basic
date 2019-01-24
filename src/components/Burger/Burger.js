import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import cssClasses from './Burger.css';


const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_, i) => {
            return <BurgerIngredient key={key + i} type={key} />
        });
    });

    return (
        <div className={cssClasses.Burger}>
            <BurgerIngredient type="BREAD_TOP" />
            {transformedIngredients}
            <BurgerIngredient type="BREAD_BOTTOM" />
        </div>
    );
}

export default burger;