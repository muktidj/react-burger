import React from 'react'

import Auxilliary from '../../../hoc/Auxilliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
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
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        <p>Continue to Check ?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </Auxilliary>
    )
}

export default orderSummary