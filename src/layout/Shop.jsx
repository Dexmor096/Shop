import React, {useEffect, useState} from 'react'
import {API_URL, API_KEY} from "../config";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import Cart from "../components/Cart"
import Basket from "../components/Basket";


function Shop() {
    const [goods, setGoods] = useState([]) //список товаров
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([]) //заказ в корзине
    const [visible, setVisible] = useState(false)

    useEffect(function getGoods() {
        fetch(API_URL, {
                headers: {
                    'Authorization': "4b31a894-2575028d-73c30818-252b222d"
                }
            }
        )
            .then(response => response.json())
            .then(data => {
                setGoods(data.featured)
                setLoading(false)
            })
    }, [])

    const addToCart = (item) => {
        const itemIndex = order.findIndex(orderItem => (orderItem.id === item.id)); //ищем индекс
        if (itemIndex < 0) {    //если товаров еще нет в заказе, то
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {               // если уже хотябы 1 заказ есть
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity +1 // увеличиваем счетчик заказов корзины
                    }
                }
                    else {
                        return orderItem;
                }
            })
            setOrder(newOrder)
        }
    }

    const visibleCart = () => {
        setVisible(!visible)
    }
    return (
        <div className="container content main">
            <Cart quantity={order.length}
                  visibleCart={visibleCart}
            />
            {
                loading ? <Preloader/> : <GoodsList goods={goods} addToCart={addToCart} visibleCart={visibleCart}/>
            }
            <Basket visible={visible}
                    visibleCart={visibleCart}
            />
        </div>
    )
}

export default Shop;