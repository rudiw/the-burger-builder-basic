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

    onCancel = () => {
        this.props.history.goBack();
    }

    onSubmit = () => {
        this.props.history.replace('/checkout/contact-data'); 
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    upIngredients={this.state.ingredients}
                    onCancel={this.onCancel}
                    onSubmit={this.onSubmit}
                    />
            </div>
        );
    }
}

export default Checkout;