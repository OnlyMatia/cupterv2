import { useEffect } from "react";
import ContactForm from "../components/ContactForm"
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    if (window.ScrollReveal) {
        const sr = window.ScrollReveal({
            origin: 'top',
            distance: '30px',
            duration: 2000,
            reset: false
        });
        sr.reveal(`.contact, .form`, {
            interval: 200
        });
    } else {
        console.error('ScrollReveal nije učitan');
    }
}, []);


  return (
    <>
    <Helmet>
      <title>Kontakirajte nas</title>
      <meta name="description" content="Kontaktirajte nas za više informacija o našem proizvodu. Tu smo da vam pomognemo ako imate ikakvih dodatno pitanja. Pošaljite poruku ili nas pozovite direktno." />
    </Helmet>
    <section className="contact">

      <div className="contactText">
        <h2 className="section-title contact__initial">Kontaktirajte nas  </h2>
        <p className="contact__description">Ako imate pitanja, trebate dodatne informacije ili želite napraviti narudžbu, slobodno nas kontaktirajte. <br /> Rado ćemo vam pomoći i odgovoriti što prije.</p>
        <p className="contact__description">Telefon: +387 63 319 290 </p>
        <p className="contact__description">Email: hercegovacka.izba@gmail.com</p>
      </div>
      
      <ContactForm />
      
    </section>
    </>
  )
}

export default Contact