import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

import cssClasses from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = [cssClasses.SideDrawer, cssClasses.Close];
    if (props.open) {
        attachedClasses = [cssClasses.SideDrawer, cssClasses.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} onClickBackdrop={props.closed} /> 
            <div className={attachedClasses.join(' ')}>
                <div className={cssClasses.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;