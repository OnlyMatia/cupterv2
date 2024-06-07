import { useState, useEffect } from "react";

const CartItem = (props: any) => {
  const [amount, setAmount] = useState(props.amount);
  const [price, setPrice] = useState(props.price);

  useEffect(() => {
    setAmount(props.amount);
    setPrice(props.price);
  }, [props.amount, props.price]);

  function handleDecrease() {
    props.decreaseAmount(props.id);
  }

  function handleIncrease() {
    props.increaseAmount(props.id);
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
  );
};

export default CartItem;
