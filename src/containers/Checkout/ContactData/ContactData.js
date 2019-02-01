import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';

import cssClasses from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        }
    }

    render() {
        return(
            <div className={cssClasses.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={cssClasses.Input} text="text" name="name" placeholder="Your name" />
                    <input className={cssClasses.Input} text="email" name="email" placeholder="Your email" />
                    <input className={cssClasses.Input} text="text" name="street" placeholder="Street" />
                    <input className={cssClasses.Input} text="text" name="postal" placeholder="Postal Code" />

                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;