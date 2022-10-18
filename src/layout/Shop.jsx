import React, {useEffect, useState} from 'react'
import {API_URL, API_KEY} from "../config";
import Preloader from "../components/Preloader";
import GoodsList from "../components/GoodsList";
import Cart from "../components/Cart"
import Basket from "../components/Basket";
import Alert from "../components/Alert"


function Shop() {
    const [goods, setGoods] = useState([]) //список товаров
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([]) //заказ в корзине
    const [visible, setVisible] = useState(false)
    const [alertName, setAlertName] = useState('')

    useEffect(function getGoods() {
        fetch(API_URL, {
                headers: {
                    'Authorization': API_KEY
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
            setAlertName(item.name)
    }

    const removeOnCart = (itemId) => {
        const newOrder = order.filter(item => item.id !== itemId)
        setOrder(newOrder)
    }

    const quantityAdd = (itemId) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.id === itemId) {
                const newQuantity = orderItem.quantity + 1;
             return {
                ...orderItem,
                quantity: newQuantity,
            };
        } else {
            return orderItem
            }
        });
        setOrder(newOrder)
    }

    const quantityRemove = (itemId) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.id === itemId) {
                const newQuantity = orderItem.quantity - 1;
             return {
                ...orderItem,
                quantity: newQuantity > 0 ? newQuantity : 1,
            };
        } else {
            return orderItem
            }
        });
        setOrder(newOrder)
    }

    const visibleCart = () => {
        setVisible(!visible)
    }

    const removeAlert = () => {
        setAlertName('')
    }
    return (
        <div className="container content main">
            <Cart quantity={order.length}
                  visibleCart={visibleCart}
            />
            {
                loading ? <Preloader/> : <GoodsList goods={goods} addToCart={addToCart} />
            }
            {
                visible && <Basket
                    order={order}
                    quantityAdd={quantityAdd}
                    quantityRemove={quantityRemove}
                    quantity={order.length}
                    removeOnCart={removeOnCart}
                    visibleCart={visibleCart} />
            }
            {
                alertName ? <Alert name={alertName} removeAlert={removeAlert}/> : null
            }
        </div>
    )
}

export default Shop;