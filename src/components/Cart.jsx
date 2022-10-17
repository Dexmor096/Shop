import React from "react";

function Cart(props) {
    const {
        visibleCart=Function.prototype
    } = props;
    const {quantity = 0} = props
    return <div onClick={() => visibleCart()} className="cart orange darken-3">
        <i className="small material-icons white-text">shopping_cart</i>
        {
            quantity ?
                <span className="white-text">{quantity}</span>
                : null
        }
    </div>
}

export default Cart;