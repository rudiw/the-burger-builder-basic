import React from 'react';
import {NavLink} from 'react-router-dom'

import cssClasses from './NavigationItem.css';

const navigationItem = (props) => (
    <ul>
        <li className={cssClasses.NavigationItem}>
            <NavLink
                to={props.link}
                activeClassName={cssClasses.active}
                exact={props.exact}>
                {props.children}
            </NavLink>
        </li>
    </ul>
);

export default navigationItem;