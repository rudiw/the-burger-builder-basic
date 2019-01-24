import React, {Component} from 'react';
import PropTypes from 'prop-types';

import cssClassses from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        switch(this.props.type) {
            case ('BREAD_BOTTOM'):
                ingredient = <div className={cssClassses.BreadBottom}></div>;
                break;
            case ('BREAD_TOP'):
                ingredient = (
                    <div className={cssClassses.BreadTop}>
                        <div className={cssClassses.Seeds1}></div>
                        <div className={cssClassses.Seeds2}></div>
                    </div>
                );
                break;
            case ('MEAT'):
                ingredient = <div className={cssClassses.Meat}></div>;
                break;
            case ('CHEESE'):
                ingredient = <div className={cssClassses.Cheese}></div>;
                break;
            case ('BACON'):
                ingredient = <div className={cssClassses.Bacon}></div>;
                break;
            case ('SALAD'):
                ingredient = <div className={cssClassses.Salad}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;