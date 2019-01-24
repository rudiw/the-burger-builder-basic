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
            <BuildControl key={it.label} ingredient={it.label} />
        ))}
    </div>
);

export default buildControls;