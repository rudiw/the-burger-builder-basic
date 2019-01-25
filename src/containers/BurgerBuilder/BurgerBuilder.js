import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        totalPrice: 4
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
    }

    render() {
        const disabledLessInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledLessInfo) {
            disabledLessInfo[key] = disabledLessInfo[key] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    onAddIngredient={this.addIngredient}
                    onRemoveIngredient={this.removeIngredient}
                    disabledLess={disabledLessInfo}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;