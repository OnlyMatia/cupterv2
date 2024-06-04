import { useState } from "react";
import OrderForm from "../components/OrderForm"
import ShopCard from "../components/ShopCard"
// import CartItem from "../components/CartItem";

const Menu = () => {
  const route = window.location.pathname
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  let orderList = []

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const addToCart = (item:any) => {
    console.log("Added to cart:", item);
  };

  return (<>
    <section className="menu section bd-container" id="menu">
    <span className="section-subtitle">Ćupter cijene i ponude</span>
    <h2 className="section-title">Šta vam nudimo</h2>

    <div className="menu__container bd-grid">
      <ShopCard 
        img="/img1.png"
        name="Ćupter" 
        desc={`Jedan komad ćuptera bijeli ili crveni - 1kom (100g)`} 
        price={5} 
        addToCart={addToCart}/>

      <ShopCard 
        img="/img2.png"
        name="Poklon Kutija" 
        desc={`Dva komada ćuptera bijeli, crveni ili kombinacija\n - 2kom (200g)`} 
        price={10}
        addToCart={addToCart}
        />

      <ShopCard 
        img="img4.png"
        name="Tradicionalna vrećica" 
        desc={`Papirna vrećica sa tradicionalnim uzorkom - 1kom`} 
        price={3}
        addToCart={addToCart}
        />

        <ShopCard 
        img="img3.png"
        name="Paket Bijeli" 
        desc={`30 komada bijelog ćuptera.\n - 30kom`} 
        price={150}
        addToCart={addToCart}
        />

        <ShopCard 
        img="img3.png"
        name="Paket Crveni" 
        desc={`30 komada crvenog ćuptera.\n - 30kom`} 
        price={150} 
        addToCart={addToCart}
        />


    </div>
</section>

<section className="order">
<h2 className="section-title"></h2>
    <div className="orderForm">
      <OrderForm />
    </div>
    
</section>
{route === "/menu" && (
        <>
          <div className="fixed-letter" onClick={toggleSidebar}>
          {isSidebarVisible ? <i  className='bx  bx-x cart'></i> : <i className='bx bx-cart-alt cart'></i>}
         
          </div>
          <div className={`fixed-overlay ${isSidebarVisible ? 'visible' : ''}`}>
            <div className="fixed-content ">
            

            {/* ovdje dodajem ono sto je u kosarici */}
            </div>
          </div>
        </>
      )}
</>
  )
}

export default Menu