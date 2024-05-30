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
      desc: "Naziv firme „Hercegovačka izba“ motivisano je došao od istoimene stare riječi za sušnicu ili izdvojenu kuhinju u kojoj bi na podu bilo ognjište sa gelenderom na kojem se kuhalo u loncu, ispod krova bi se sušilo meso, a u istoj prostoriji bi se čuvala i hrana poput brašna, žita, suhog mesa i sl. Mi smo obitelj koja želi vratiti na stolove skoro zaboravljeni recept cuptera, tradicionalne slastice."
    },
    {
      id:1,
      title:"Šta je Ćupter?",
      img:"",
      desc: "Ćupter je Hercegovački slatkiš od prirodnog soka grožđa, sličan haribo bomboni. Cupter dobivamo od ukuhanog mošta, često nazvan hercegovačkom verzijom žele bombone. Ova delicija ima bogatu povijest koja seže sve do vremena Osmanlija, a u modernom dobu Antoni i Zrinka Šajin iz Mostara vraćaju ćupter u središte pažnje, kombinirajući tradiciju s inovacijama. Naziv riječi ćupter dolazi dolazi iz perzijskog jezika preko Osmanlija i označava nešto okruglo, a poznati putopisac, Evlija Čelebija je već 1660-ih godina napisao prvi pisani zapis o ćupteru. Hercegovački ćupter je u neku ruku tradicionalna energetska pločica jer za 100 g proizvoda potrebno je 500-600 g grožđa. Sadrži oko 300 kcal sa zanemarljivim % masti i samo 3,5 % proteina.Prosječan nutritivni sastav može ovisiti ovisno o sastavu mošta koji može variriti od godine do godine što se najviše odražava na udjelu ugljikohidrata odnosno šećera."
    },
    {
      id:2,
      title: "Kako se proizvodi?",
      img:"",
      desc: `Ćupter se proizvodi od obranog crnog i bijelog grožđa, s posebnim naglaskom na sortama Blatine i Žilavke. Ove sorte čine oko 70% udjela mošta u procesu proizvodnje. Nakon gnječenja grožđa, mošt se priprema kroz filtraciju kako bi se uklonile mehaničke nečistoće i zagrijavanje radi eliminacije kvasaca. U proključali mošt dodaju se sastojci poput griza ili brašna, šećera te ostalih dodataka po recepturi, a smjesa se konstantno miješa dok ne postigne želatinoznu strukturu. Recept ćuptera također uključuje izlijevanje smjese na tanjure, koji se potom suše dan ili dva uz redovito okretanje. Gotov proizvod se reže na trakice ili štapiće veličine 10 do 15 cm.Tradicionalno se ćupter konzumira u zimskim mjesecima, često kao desert zajedno s bademima, orasima i suhim smokvama. Ponovno se javlja interes za ovim proizvodom, ne samo za kućnu konzumaciju već i kao tržišni proizvod. Agencija za sigurnost hrane je u procesu uvrštavanja Hercegovačkog ćuptera kao proizvoda s zaštićenim geografskim podrijetlom. Ćupter je tradicionalno bio popularan jer je bio jedan od rijetkih načina da se sok od grožđa sačuva od fermentacije, čineći ga jestivim dulje vrijeme nakon berbe.`
    },
    {
      id:3,
      title:"Dostava ćuptera",
      img:"",
      desc:"Hercegovačka izba ponosno objavljuje da je omogućena dostava ćuptera na području Mostara, što našim kupcima u ovom gradu omogućuje brzu i jednostavnu nabavku ovog tradicionalnog slatkiša. Za sve naše drage kupce širom Bosne i Hercegovine, osigurali smo brzu i pouzdanu dostavu putem brze pošte, kako bismo osigurali da naš autentični hercegovački ćupter stigne do vas u najkraćem mogućem roku i u savršenom stanju. Na taj način, svi ljubitelji ćuptera mogu uživati u ovom ukusnom desertu bez obzira na to gdje se nalaze."
    },
    // {
    //   id:4,
    //   title:"Zaštićena oznaka porijekla (ZOP)",
    //   img:"/zop.png",
    //   desc:"S ponosom ističemo da je hercegovački cupter dobitnik zaštićene oznake podrijetla (ZOP). Proizvod sa oznakom ZOP je u cijelosti proizveden u određenom geografskom području primjenom priznatih vještina i korištenjem sirovina i sastojaka koji također potiču iz tog područja. Kvaliteta proizvoda označenog ovom oznakom direktno je povezan prirodnim i ljudskim faktorima geografskog područja proizvodnje.",
    // }
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