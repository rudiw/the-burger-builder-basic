import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import Logo from '../../Logo/Logo';

import cssClasses from './Toolbar.css';

const toolbar = (props) => (
    <header className={cssClasses.Toolbar}>
        <div>MENU</div>

        <div className={cssClasses.Logo}>
            <Logo />
        </div>

        <nav className={cssClasses.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;