import React, {Component} from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import cssClasses from './Modal.css';


class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show ||
            nextProps.children !== this.props.children;
    }

    componentWillUpdate() {
        console.log('[Modal] componentWillUpdate');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} onClickBackdrop={this.props.dismissModal}/>
                <div
                    className={cssClasses.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translate(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                    >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;