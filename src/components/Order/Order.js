import React from 'react';

import cssClasses from './Order.css';

const order = (props) => {
    const curIngredients = [];

    // console.log('from props: ', props.ingredients);
    for (let ingredientName in props.ingredients) {
        curIngredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]});
    }
    // console.log('after props:', curIngredients);

    const ingredientOutput = curIngredients.map(ig => {
        return <span
                style={{textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'}}
                key={ig.name}>{ig.name} ({ig.amount})</span>
    })

    return (
        <div className={cssClasses.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;