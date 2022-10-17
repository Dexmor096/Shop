import React from "react";

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        quantityAdd= Function.prototype,
        quantityRemove= Function.prototype,
        removeOnCart = Function.prototype,
    } = props;
    return (
        <li className="collection-item">
            {
                quantity
                    ?
                    <div> {name}
                        <span className="basket-quantity--all">
                            <i className="material-icons basket-quantity"
                                onClick={() => quantityRemove(id)}
                            >remove</i>
                                {quantity} Шт
                            <i
                                className="material-icons basket-quantity"
                                onClick={() => quantityAdd(id)}
                            >add</i>
                            {price * quantity} Р
                <span className="secondary-content basket-delete">
                    <i onClick={() => removeOnCart(id)} className="material-icons">delete</i>
                </span>
            </span>
                    </div>

                    :
                    "Корзина пуста"
            }
        </li>
    )
}

export default BasketItem;