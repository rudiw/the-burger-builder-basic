import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import cssClasses from './Modal.css';


const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} onClickBackdrop={props.dismissModal}/>
        <div
            className={cssClasses.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translate(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
            >
            {props.children}
        </div>
    </Aux>
);

export default modal;