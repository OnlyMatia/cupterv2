import { useEffect, useState, useRef } from "react";
import OrderForm from "../components/OrderForm";
import ShopCard from "../components/ShopCard";
import CartItem from "../components/CartItem";
import { Helmet } from "react-helmet";

const Menu = () => {
  const route = window.location.pathname;
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [orderList, setOrderList] = useState<any[]>([]);
  const fixedOverlayRef = useRef<HTMLDivElement>(null);


  const deleteListItem = (id: number) => {
    setOrderList((el) => el.filter((i) => i !== id));
  };

  const increaseAmount = (id: number) => {
    setOrderList((el) =>
      el.map((item, i) => {
        if (i === id) {
          return { ...item, amount: item.amount + 1, price: item.price + item.unitPrice };
        }
        return item;
      })
    );
  };

  const decreaseAmount = (id: number) => {
    setOrderList((el) =>
      el.map((item, i) => {
        if (i === id) {
          if (item.amount === 1) {
            deleteListItem(id);
            return null;
          } else {
            return { ...item, amount: item.amount - 1, price: item.price - item.unitPrice };
          }
        }
        return item;
      }).filter(item => item !== null)
    );
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const addToCart = (item: any) => {
    setOrderList([...orderList, { ...item, amount: 1, unitPrice: item.price }]);
  };

  const resetOrderList = () => {
    setOrderList([]);
  };


  const handleClickOutside = (event: MouseEvent) => {
    if (window.innerWidth < 950 && fixedOverlayRef.current && !fixedOverlayRef.current.contains(event.target as Node) && isSidebarVisible) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 950 && isSidebarVisible) {
        setSidebarVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarVisible]);


  return (
    <>
      <Helmet>
        <title>Cijene i ponude cuptera</title>
        <meta name="description" content="Otkrijte naše ponude proizvoda koje možete jednostavno naručiti online. Pregledajte naš asortiman i odaberite svoje omiljene proizvode iz udobnosti svog doma. Brza isporuka i sigurna kupovina." />
      </Helmet>
      <section className="menu section bd-container" id="menu">
        <span className="section-subtitle">Šta vam nudimo</span>
        <h1 className="section-title">Naručite online</h1>

        <div className="menu__container bd-grid">
          <ShopCard
            img="/cupter-ponuda1.webp"
            name="Bijeli Ćupter"
            desc={`Jedan komad ćuptera okusa žilavke, 100g - 1kom (100g)`}
            price={5}
            addToCart={addToCart}
          />

          <ShopCard
            img="/cupter-ponuda1.webp"
            name="Crveni Ćupter"
            desc={`Jedan komad ćuptera okusa blatine, 100g - 1kom (100g)`}
            price={5}
            addToCart={addToCart}
          />

          <ShopCard
            img="/cupter-ponuda2.webp"
            name="Poklon Kutija"
            desc={`Dva komada ćuptera bijeli, crveni ili kombinacija\n - 2kom (200g)`}
            price={10}
            addToCart={addToCart}
          />

          <ShopCard
            img="cupter-ponuda4.webp"
            name="Tradicionalna vrećica"
            desc={`Papirna vrećica sa tradicionalnim uzorkom - 1kom`}
            price={3}
            addToCart={addToCart}
          />

          <ShopCard
            img="cupter-ponuda3.webp"
            name="Paket Bijeli"
            desc={`30 komada bijelog ćuptera.\n - 30kom`}
            price={150}
            addToCart={addToCart}
          />

          <ShopCard
            img="cupter-ponuda3.webp"
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
          <OrderForm order={orderList} resetOrderList={resetOrderList} />
        </div>
      </section>
      {route === "/menu" && (
        <>
          <div className="fixed-letter" onClick={toggleSidebar}>
            {isSidebarVisible ? (
              <i className="bx bx-x cart"></i>
            ) : (
              <div className="cart-icon-container">
              <i className="bx bx-cart-alt cart"></i>
                {orderList.length > 0 && (
                  <span className="cart-indicator">{orderList.length}</span>
                )}
            </div>
            )}
          </div>
          <div className={`fixed-overlay ${isSidebarVisible ? "visible" : ""}`} ref={fixedOverlayRef}>
            <div className="fixed-content ">
              <h2 className="cartTitle">Moja Košarica:</h2>
              {orderList.map((item, i) => (
                <CartItem
                  key={i}
                  id={i}
                  img={item.img}
                  price={item.price}
                  amount={item.amount}
                  increaseAmount={increaseAmount}
                  decreaseAmount={decreaseAmount}
                  delete={deleteListItem}
                />
              ))}
              
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
