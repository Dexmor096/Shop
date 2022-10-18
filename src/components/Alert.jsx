import React, {useEffect} from "react";

function Alert(props) {
    const {name = '', removeAlert = Function.prototype} = props;

    useEffect(()=> {
        const timerId = setTimeout(removeAlert,2000);
            return ()=> clearTimeout(timerId)
    },[name])

    return (
        <div className="toast-effect" id="toast-container">
            <div className="toast">"{name}" добавлен в корзину</div>
        </div>
)}
export default Alert;