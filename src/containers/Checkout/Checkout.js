import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {
            SALAD: 1,
            BACON: 1,
            CHEESE: 1,
            MEAT: 1,
        }
    }

    componentDidMount() {
        const qpString = new URLSearchParams( this.props.location.search );
        console.log('qpString:', qpString);

        const upIngredients = {};
        for ( let qp of qpString.entries() ) {
            console.log('qp:', qp);
            upIngredients[qp[0]] =+ qp[1];
        }
        console.log('upIngredients:', upIngredients);

        this.setState({
            ingredients: upIngredients
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
                    component={ContactData} />
            </div>
        );
    }
}

export default Checkout;