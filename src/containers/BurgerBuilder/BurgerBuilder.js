import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            SALAD: 0,
            BACON: 0,
            CHEESE: 0,
            MEAT: 0,
        }
    }

    render() {
        return (
            <Aux>
                <Burger
                    ingredients={this.state.ingredients}
                />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;