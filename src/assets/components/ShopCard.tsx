

const ShopCard = (props: any) => {
  const route = window.location.pathname;

  return (
    <div className="menu__content">
        <img src={props.img} alt="" className="menu__img" />
        <h3 className="menu__name">{props.name}</h3>
        <span className="menu__detail">{props.desc}</span>
        <span className="menu__preci">{props.price}</span>
        {route !== "/menu" ? <a href={route === "/menu" ? "#" : "/menu"} className="button menu__button" ><i className='bx bx-cart-alt'></i></a> : <button style={{border:"none", cursor:"pointer"}} className="button menu__button" ><i className='bx bx-cart-alt'></i></button>}
    </div>
  )
}

export default ShopCard