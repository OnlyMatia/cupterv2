import  { useState } from 'react';

const CartItem = (props: any) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="menu__content">
        <img src={props.img} alt="" className="menu__img" />
        <h3 className="menu__name">{props.name}</h3>
        <span className="menu__detail">{props.desc}</span>
        <span className="menu__preci">{props.price}</span>
        <div className='btnSelection'>
            <button style={{border:"none"}} className="button " onClick={handleIncrease} >+</button>
            {quantity}
            <button style={{border:"none"}} className="button " onClick={handleDecrease} >-</button>
        </div>
    </div>
  );
};

export default CartItem;