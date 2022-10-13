import React from "react";
import BasketItem from "./BasketItem";

function Basket(props) {
    const {visible, visibleCart} = props;
    return (
    <ul className={
            visible ?
        "collection with-header basket" :
        "collection with-header basket-invisible"
        }
        >
        <li className="collection-header grey darken-2 basket-header white-text"><h4>Корзина</h4>
            <i onClick={visibleCart} className="material-icons basket-close">close</i></li>
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <li className="collection-header grey darken-1">
            <div className="white-text">Общая сумма:<span className="secondary-content"></span></div>
        </li>
    </ul>
    )
}
export default Basket;