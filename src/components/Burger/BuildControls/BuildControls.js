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
        {controls.map( it => (
            <BuildControl
                key={it.label}
                ingredient={it.label}
                onAdd={() => props.onAddIngredient(it.type)}
                onRemove={() => props.onRemoveIngredient(it.type)}
                disabledLess={props.disabledLess[it.type]}
            />
        ))}
    </div>
);

export default buildControls;