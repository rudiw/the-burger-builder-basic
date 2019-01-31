import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            SALAD: 1,
            BACON: 1,
            CHEESE: 1,
            MEAT: 1,
        }
    }

    render() {
        return (
            <div>
                <CheckoutSummary upIngredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checkout;