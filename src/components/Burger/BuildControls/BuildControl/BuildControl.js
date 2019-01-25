import React from 'react';

import cssClasses from './BuildControl.css';

const buildControl = (props) => (
    <div className={cssClasses.BuildControl}>
        <div className={cssClasses.Label}>{props.ingredient}</div>
        <button
            className={cssClasses.Less}
            onClick={props.onRemove}
            disabled={props.disabledLess}>
            Less
        </button>
        <button className={cssClasses.More} onClick={props.onAdd}>More</button>
    </div>
);

export default buildControl;