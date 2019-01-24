import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            SALAD: 1,
            BACON: 1,
            CHEESE: 2,
            MEAT: 2,
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