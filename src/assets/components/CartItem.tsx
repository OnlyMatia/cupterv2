import { useState } from "react";

const CartItem = (props:any) => {
  const [amount, setAmount] = useState(1)
  const [price, setPrice] = useState(props.price)


  function handleDecrease () {
    if(amount===1){
      props.delete(props.id)
    }else{
      setAmount(amount - 1);
      setPrice(price - props.price)
    }
  }

  function handleIncrease() {
    setAmount(amount + 1);
    setPrice(price + props.price)
  }
  
  
  return (
    <div className="cart-item">
      <img src={props.img} className="cart-item__img" />
      <span className="cart-item__price">{price}KM</span>
      <div className="cart-item__controls">
        <button onClick={handleDecrease} className="cart-item__btn">-</button>
        <span className="cart-item__amount">{amount}</span>
        <button onClick={handleIncrease} className="cart-item__btn">+</button>
      </div>
    </div>
  )
}

export default CartItem