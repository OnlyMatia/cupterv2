


const Footer = () => {


  return (
        <footer className="footer section bd-container">
            <div className="footer__container bd-grid">
                <div className="footer__content">
                    <a href="#" className="footer__logo">Ćupter</a>
                    <span className="footer__description">Tradicionalni slatkiš</span>
                    <div>
                        <a href="https://www.facebook.com/hercegovacki.cupter?mibextid=ZbWKwL" className="footer__social" target="_blank"><i className='bx bxl-facebook'></i></a>
                        <a href="https://www.instagram.com/hercegovacki_cupter/" className="footer__social" target="_blank"><i className='bx bxl-instagram'></i></a>
                    </div>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Usluge</h3>
                    <ul>
                        <li><a href="#" className="footer__link">Dostava</a></li>
                        <li><a href="#" className="footer__link">Cijene</a></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Informacije</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/hercegovacki.cupter?mibextid=ZbWKwL" target="_blank" className="footer__link">Događaji</a></li>
                        <li><a href="tel: +38763319290" target="_blank" className="footer__link">Poziv</a></li>
                        <li><a href="https://wa.me/+38763319290" target="_blank" className="footer__link">Whatsapp</a></li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Adresa</h3>
                    <ul>
                        <li>BiH - Mostar</li>
                        <li>Fra Ljudevita Laste BB</li>
                        <li >063 - 319 - 290</li>
                        <li>hercegovacka.izba@gmail.com</li>
                    </ul>
                </div>
            </div>

            <p className="footer__copy">&#169; 2016 - {new Date().getFullYear()}. All right reserved</p>
        </footer>
  )
}

export default Footer