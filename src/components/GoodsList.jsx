import React from "react";
import GoodsItem from "./GoodsItem";

function GoodsList(props) {
    const {
        goods = [],
        purchased,
        addToCart = Function.prototype,
        visibleCart = Function.prototype
    } = props;

    if (!goods.length) {
        return <h3>Ничего не найдено, печалька..</h3>
    }
    return(
        <div className="goods">
            {
            goods.map(item => (
                <GoodsItem key={item.id} {...item}
                           addToCart={addToCart}
                           visibleCart={visibleCart}
                           purchased={purchased}
                />
            ))
            }
        </div>
    )
}
export default GoodsList;