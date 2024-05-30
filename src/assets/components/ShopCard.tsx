

const ShopCard = (props:any) => {
  return (
    <div className="menu__content">
        <img src={props.img} alt="" className="menu__img" />
        <h3 className="menu__name">{props.name}</h3>
        <span className="menu__detail">{props.desc}</span>
        <span className="menu__preci">{props.price}</span>
        <a href="/menu" className="button menu__button"><i className='bx bx-cart-alt'></i></a>
    </div>
  )
}

export default ShopCard