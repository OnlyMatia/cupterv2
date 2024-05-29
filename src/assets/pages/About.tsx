import Article from "../components/Article"

const About = () => {

  const articles = [
    {
      id:1,
      title:"Šta je Ćupter?",
      img:"",
      desc: "Hercegovački cupter je trajni prehrambeni proizvod odnosno tradicionalna hercegovačka slastica - slatkiš. Podsjeća na gumenu bombonu. Cupter je prirodni proizvod bez dodatka aditiva i kemikalija. Proizvodi se kuhanjem crnog ili bijelog vinskog mošta autohtonih hercegovačkih sorti grožđa s brašnom ili grizom ili kombiniranjem brašna i griza i sa ili bez dodanog šećera, nakon čega se suši na suncu ili sušarama. Cupter se prema tehnološkoj podijeli može svrstati u žele slasticu. Gotov proizvod je okrugao, mekan do srednje tvrd. Boja varira od žute do boje meda, za Hercegovački cupter od bijele sorte grožđa i od tamno crvene do svjetlo prozirno crvene za cupter od crne sorte grožđa. Cupter je u neku ruku tradicionalna energetska pločica jer za 100 g proizvoda potrebno je 500-600 g grožđa. Sadrži oko 300 kcal sa zanemarljivim % masti i samo 3,5 % proteina.Prosječan nutritivni sastav može ovisiti ovisno o sastavu mošta koji može variriti od godine do godine što se najviše odražava na udjelu ugljikohidrata odnosno šećera."
    }
    
]

  return (
  <>
    <section className="aboutBanners">
        <h2 className="bannerH2">Naša Priča</h2>
    </section>

    <section className="about section bd-container">
      <div className="aboutus__container  ">
      {articles.map(article => (
            <Article 
              key={article.id} 
              title={article.title} 
              desc={article.desc} 
              img={article.img}
            />
          ))}

      </div>
    </section>
  </>
  )
}

export default About