import ShopCard from "../components/ShopCard"

const Menu = () => {
  return (
    <section className="menu section bd-container" id="menu">
    <span className="section-subtitle">Ćupter cijene</span>
    <h2 className="section-title">Sve ponude</h2>

    <div className="menu__container bd-grid">
      <ShopCard 
        img="/img1.png"
        name="Ćupter" 
        desc={`1 komad ćuptera žilavka ili blatina.\n -1kom`} 
        price="5KM" />

      <ShopCard 
        img="img2.png"
        name="Poklon Kutija" 
        desc={`2 komada ćuptera žilavka i blatina.\n -2kom`} 
        price="10KM" />
                    
      <ShopCard 
        img="img3.png"
        name="Full Box" 
        desc={`30 komada ćuptera žilavka ili blatina.\n -30kom`} 
        price="150KM" />

      <ShopCard 
        img="img3.png"
        name="Full Box" 
        desc={`30 komada ćuptera žilavka ili blatina.\n -30kom`} 
        price="150KM" />

      <ShopCard 
        img="img3.png"
        name="Full Box" 
        desc={`30 komada ćuptera žilavka ili blatina.\n -30kom`} 
        price="150KM" />

      <ShopCard 
        img="img3.png"
        name="Full Box" 
        desc={`30 komada ćuptera žilavka ili blatina.\n -30kom`} 
        price="150KM" />
    </div>
</section>
  )
}

export default Menu