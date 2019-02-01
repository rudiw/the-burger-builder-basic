import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0,
    }

    componentWillMount() {
        const qpString = new URLSearchParams( this.props.location.search );
        // console.log('[Checkout] qpString:', qpString);

        const upIngredients = {};
        let upPrice = 0;
        for ( let qp of qpString.entries() ) {
            // console.log('[Checkout] qp:', qp);
            if (qp[0] === 'price') {
                upPrice = qp[1];
            } else {
                upIngredients[qp[0]] =+ qp[1];
            }
        }
        // console.log('[Checkout] upIngredients:', upIngredients);

        this.setState({
            ingredients: upIngredients,
            totalPrice: upPrice,
        })
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

                <Route
                    path={this.props.match.url + '/contact-data'}
                    // component={ContactData} />
                    render={(props) => (<ContactData
                                    upIngredients={this.state.ingredients}
                                    upPrice={this.state.totalPrice}
                                    {...props} />)} />
            </div>
        );
    }
}

export default Checkout;