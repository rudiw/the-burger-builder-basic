import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import cssClasses from './CheckoutSummary.css';

const checkoutSummary = (props) => {

    return(
        <div className={cssClasses.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.upIngredients}/>
            </div>

            <Button
                btnType="Danger"
                clicked={props.onCancel}>
                CANCEL
            </Button>
            <Button
                btnType="Success"
                clicked={props.onSubmit}>
                CONTINUE
            </Button>
        </div>
    );

}

export default checkoutSummary;