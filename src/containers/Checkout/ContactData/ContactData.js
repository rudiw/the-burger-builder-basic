import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

import cssClasses from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }

    componentDidMount() {
        console.log('[ContactData] props: ', this.props);
    }

    doSubmitOrder = (event) => {
        event.preventDefault();

        // console.log('[ContactData] doSubmitOrder:', this.props.upIngredients);

        this.setState({loading: true});

        const upOrder = {
            ingredients: this.props.upIngredients,
            price: this.props.upPrice,
            customer: {
                name: 'Rudi Wijaya AAAA',
                address: {
                    street: 'Street One',
                    zipCode: '12345',
                    country: 'Indonesia'
                },
                email: 'rudi@test.com'
            },
            deliveryMethod: 'slowest'
        };

        console.log('[ContactData] doSubmitOrder: ', upOrder);
        axios.post('/orders.json', upOrder)
            .then(response => {
                this.setState({loading: false});

                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render() {
        let form = (
            <form>
                <input className={cssClasses.Input} text="text" name="name" placeholder="Your name" />
                <input className={cssClasses.Input} text="email" name="email" placeholder="Your email" />
                <input className={cssClasses.Input} text="text" name="street" placeholder="Street" />
                <input className={cssClasses.Input} text="text" name="postal" placeholder="Postal Code" />

                <Button
                    btnType="Success"
                    clicked={this.doSubmitOrder}>
                    ORDER
                </Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }

        return(
            <div className={cssClasses.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;