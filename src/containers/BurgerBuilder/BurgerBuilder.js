import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    SALAD: 0.5,
    BACON: 0.7,
    CHEESE: 0.4,
    MEAT: 1.3,

}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            SALAD: 0,
            BACON: 0,
            CHEESE: 0,
            MEAT: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
    }

    updatePurchaseState(curIngredients) {
        // const curIngredients = {...this.state.ingredients}; --> old version, so will delayed for updating

        const sum = Object.keys(curIngredients)
            .map(key =>{
                return curIngredients[key];
            })
            .reduce((sum, el) =>{
                return sum + el;
            }, 0);

        this.setState({
            purchasable: sum > 0
        });    
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const newTotalPrice = this.state.totalPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotalPrice
        })

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const newTotalPrice = this.state.totalPrice - priceDeduction;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotalPrice
        })

        this.updatePurchaseState(updatedIngredients);
    }

    purchase = () => {
        this.setState({
            purchasing: true
        });
    }

    cancelOrder = () => {
        this.setState({
            purchasing: false
        });
    }

    submitOrder = () => {
        // alert('You continue!');

        this.setState({loading: true});

        const upOrder = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Rudi Wijaya',
                address: {
                    street: 'Street One',
                    zipCode: '12345',
                    country: 'Indonesia'
                },
                email: 'rudi@test.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', upOrder)
            .then(response => {
                console.log(response);

                this.setState({
                    loading: false,
                    purchasing: false,
                });
            })
            .catch(error => {
                console.log(error);

                this.setState({
                    loading: false,
                    purchasing: false,
                });
            });
    }

    render() {
        const disabledLessInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledLessInfo) {
            disabledLessInfo[key] = disabledLessInfo[key] <= 0;
        }

        let orderSummary = <OrderSummary
                                ingredients={this.state.ingredients}
                                doCancelOrder={this.cancelOrder}
                                doSubmitOrder={this.submitOrder}
                                price={this.state.totalPrice}
                            />
        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} dismissModal={this.cancelOrder}>
                    {orderSummary}
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    onAddIngredient={this.addIngredient}
                    onRemoveIngredient={this.removeIngredient}
                    disabledLess={disabledLessInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    order={this.purchase}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;