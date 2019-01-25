import React from 'react';

import cssClassses from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'SALAD'},
    {label: 'Bacon', type: 'BACON'},
    {label: 'Cheese', type: 'CHEESE'},
    {label: 'Meat', type: 'MEAT'},
]

const buildControls = (props) => (
    <div className={cssClassses.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>

        {controls.map( it => (
            <BuildControl
                key={it.label}
                ingredient={it.label}
                onAdd={() => props.onAddIngredient(it.type)}
                onRemove={() => props.onRemoveIngredient(it.type)}
                disabledLess={props.disabledLess[it.type]}
            />
        ))}

        <button
            className={cssClassses.OrderButton}
            disabled={!props.purchasable}
            onClick={props.order}>
            ORDER NOW
        </button>
    </div>
);

export default buildControls;