// import { useState } from "react";

const ShopCard = (props: any) => {
  const route = window.location.pathname;
  // const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    props.addToCart({
      name: props.name,
      price: props.price,
      img:props.img,
    });
    props.toast()
  };

  // Hover effect na slike kartica
  // const handleIn = () => {
  //   setToggle(true)
  // }
  // const handleOut = () => {
  //   setToggle(false)
  // }

  return (
    <div className="menu__content">
        {/* { props.img === "/img1.png" ? <img src={!toggle ? props.img : "/img2.png"} alt="" className="menu__img" onMouseEnter={handleIn} onMouseLeave={handleOut} /> : <img src={props.img} alt="" className="menu__img" />} */}
        <img src={props.img} alt="" className="menu__img" />
        <h3 className="menu__name">{props.name}</h3>
        <span className="menu__detail">{props.desc}</span>
        <span className="menu__preci">Cijena: {props.price}KM</span>
        {route !== "/menu" ? <a href={route === "/menu" ? "#" : "/menu"} className="button menu__button" ><i className='bx bx-cart-alt'></i></a> : <button style={{border:"none", cursor:"pointer"}} className="button menu__button" onClick={handleClick} ><i className='bx bx-cart-alt'></i></button>}
    </div>
  )
}

export default ShopCard