import React, {useState} from "react";

function GoodsItem(props) {
    const [purchased, setPurchased] = useState(true)
    const {
        id,
        name,
        description,
        price,
        full_background,
        image,
        addToCart = Function.prototype,
    } = props;

    const addToCartAndPurchase = () => {
        addToCart({id, name, price})
        setPurchased(false)
    }
    return (

        <div className="card" id={id}>
            <div className="card-image">
                {
                    full_background === "N/A"
                        ?
                        <img className="activator" src={image}/>
                        :
                        <img className="activator" src={full_background}/>
                }
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    onClick={() => addToCartAndPurchase()}
                    className={purchased
                        ?
                    "waves-effect waves-light light-blue darken-1 btn-small"
                        :
                    "waves-effect waves-light light-blue darken-4 btn-small"
                    }><i
                    className="material-icons left ">{purchased ? "local_grocery_store" : "check"}</i>{purchased ? "Купить" : "Добавлено"}
                </button>
                <span className="price right">{price + ` Руб`}</span>
            </div>
        </div>

    )
}

export default GoodsItem;
