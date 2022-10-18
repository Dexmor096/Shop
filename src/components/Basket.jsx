import React from "react";
import BasketItem from "./BasketItem";

function Basket(props) {
    const {
        order = [],
        visibleCart,
        quantityAdd = Function.prototype,
        quantityRemove = Function.prototype,
        removeOnCart = Function.prototype,
    } = props;

    const totalPrice =
        order.reduce((sum, el) => {
            return sum + el.price * el.quantity
        },0)

    return (
    <ul className="collection with-header basket">
        <li className="collection-header grey darken-2 basket-header white-text"><h4>Корзина</h4>
            <i onClick={visibleCart} className="material-icons basket-close">close</i></li>

        {   order.length
            ?
            order.map(el => (
                <BasketItem
                    key={el.id} {...el}
                    removeOnCart={removeOnCart}
                    quantityAdd={quantityAdd}
                    quantityRemove={quantityRemove}
                />
            ))
            :
            <li className='collection-item'>Корзина пуста</li>
        }

        <li className="collection-header grey darken-1 total-price">
            <span className="white-text">Общая сумма: {totalPrice} Руб</span>
            <button className="waves-effect waves-light btn-small light-blue darken-1 btn-submit">Оформить</button>
        </li>
    </ul>
    )
}
export default Basket;