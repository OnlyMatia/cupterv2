import { useEffect } from "react";
import Article from "../components/Article"

const About = () => {
  useEffect(() => {
    if (window.ScrollReveal) {
        const sr = window.ScrollReveal({
            origin: 'top',
            distance: '30px',
            duration: 2000,
            reset: false
        });
        sr.reveal(`.bannerH2`, {
            interval: 200
        });
    } else {
        console.error('ScrollReveal nije učitan');
    }
}, []);

  const articles = [
    {
      id:0,
      title:"Tko smo mi?",
      img:"",
      desc: ""
    },
    {
      id:1,
      title:"Šta je Ćupter?",
      img:"",
      desc: "Ćupter je Hercegovački slatkiš od prirodnog soka grožđa, sličan haribo bomboni. Cupter dobivamo od ukuhanog mošta, često nazvan hercegovačkom verzijom žele bombone. Ova delicija ima bogatu povijest koja seže sve do vremena Osmanlija, a u modernom dobu Antoni i Zrinka Šajin iz Mostara vraćaju ćupter u središte pažnje, kombinirajući tradiciju s inovacijama. Naziv riječi ćupter dolazi dolazi iz perzijskog jezika preko Osmanlija i označava nešto okruglo, a poznati putopisac, Evlija Čelebija je već u 17. stoljeću napisao prvi pisani zapis o ćupteru. Hercegovački ćupter je u neku ruku tradicionalna energetska pločica jer za 100 g proizvoda potrebno je 500-600 g grožđa. Sadrži oko 300 kcal sa zanemarljivim % masti i samo 3,5 % proteina.Prosječan nutritivni sastav može ovisiti ovisno o sastavu mošta koji može variriti od godine do godine što se najviše odražava na udjelu ugljikohidrata odnosno šećera."
    },
    {
      id:2,
      title: "Kako se proizvodi?",
      img:"",
      desc: "Ćupter se proizvodi od obranog crnog i bijelog grožđa, s posebnim naglaskom na sortama Blatine i Žilavke. Ove sorte čine oko 70% udjela mošta u procesu proizvodnje. Nakon gnječenja grožđa, mošt se priprema kroz filtraciju kako bi se uklonile mehaničke nečistoće i zagrijavanje radi eliminacije kvasaca. U proključali mošt dodaju se sastojci poput griza ili brašna, šećera te ostalih dodataka po recepturi, a smjesa se konstantno miješa dok ne postigne želatinoznu strukturu. Zatim se smjesa izlijeva na tanjure i suši dan ili dva uz redovito okretanje. Gotov proizvod se reže na trakice ili štapiće veličine 10 do 15 cm. Tradicionalno se Ćupter konzumira u zimskim mjesecima, često kao desert zajedno s bademima, orasima i suhim smokvama. Ponovno se javlja interes za ovim proizvodom, ne samo za kućnu konzumaciju već i kao tržišni proizvod. Agencija za sigurnost hrane je u procesu uvrštavanja Hercegovačkog ćuptera kao proizvoda s zaštićenim geografskim podrijetlom. Ćupter je tradicionalno bio popularan jer je bio jedan od rijetkih načina da se sok od grožđa sačuva od fermentacije, čineći ga jestivim dulje vrijeme nakon berbe."
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