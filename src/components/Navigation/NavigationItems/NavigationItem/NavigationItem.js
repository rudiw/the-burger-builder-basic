import React from 'react';

import cssClasses from './NavigationItem.css';

const navigationItem = (props) => (
    <ul>
        <li className={cssClasses.NavigationItem}>
            <a
                href={props.link}
                className={props.active ? cssClasses.active : null}>
                {props.children}
            </a>
        </li>
    </ul>
);

export default navigationItem;