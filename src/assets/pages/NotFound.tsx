
const NotFound = () => {
  return (
    <section className="home" >
    <div className="home__container bd-container bd-grid">
        <div className="error-data">
            <h2 className="home__subtitle">Greška 404: Stranica nije pronađena</h2>
            <p style={{padding:"2rem 0"}}>Izgleda da stranica koju tražite ne postoji. Moguće je da je uklonjena, promijenjena ili privremeno nedostupna.</p>
            <a href="/" className="button">Idi nazad</a>
        </div>
    </div>
</section>
  )
}

export default NotFound