import React, {Component} from 'react'

import Auxilliary from '../../../hoc/Auxilliary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    // This is could be functional component, Doesn't have a claass
    componentDidUpdate(){
        console.log('[OrderSummary] WillUpdate')
    }

    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
            )
        });

        return (
            <Auxilliary>
            <h3>Your Order</h3>
            <p> A Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Check ?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Auxilliary>
        )
    }
}

export default OrderSummary