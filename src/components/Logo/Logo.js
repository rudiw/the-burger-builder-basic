import React from 'react';

import cssClasses from './Logo.css'

import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={cssClasses.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="Burger Builder" />
    </div>
);

export default logo;