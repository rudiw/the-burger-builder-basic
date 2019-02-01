import React from 'react';
import {withRouter} from 'react-router-dom';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import cssClasses from './Burger.css';


const burger = (props) => {

    //This does not get match object from Router (Burger Builder),
    //only component in Route will be get.
    //So we need to inject this component using withRouter
    console.log(props);

    let transformedIngredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_, i) => {
            return <BurgerIngredient key={key + i} type={key} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    console.log(transformedIngredients);
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={cssClasses.Burger}>
            <BurgerIngredient type="BREAD_TOP" />
            {transformedIngredients}
            <BurgerIngredient type="BREAD_BOTTOM" />
        </div>
    );
}

//withRouter will inject match object to this component
// export default withRouter( burger );
export default burger;