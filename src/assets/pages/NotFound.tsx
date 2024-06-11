import { Helmet } from "react-helmet"

const NotFound = () => {
  return (<>
  <Helmet>
    <title>Greška 404</title>
    <meta name="description" content="Ova stranica ne postoji ili je uklonjena ili privremeno nedostupna." />
  </Helmet>
    <section className="home" >
    <div className="home__container bd-container bd-grid">
        <div className="error-data">
            <h1 className="home__subtitle">Greška 404: Stranica nije pronađena</h1>
            <p style={{padding:"2rem 0"}}>Izgleda da stranica koju tražite ne postoji. Moguće je da je uklonjena, promijenjena ili privremeno nedostupna.</p>
            <a href="/" className="button">Idi nazad</a>
        </div>
    </div>
</section>
  </>)
}

export default NotFound