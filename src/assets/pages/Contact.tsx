import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <section className="contact" >

      <div className="contactText">
        <h2 className="section-title contact__initial">Kontaktirajte nas  </h2>
        <p className="contact__description">Ako imate pitanja, trebate dodatne informacije ili želite napraviti narudžbu, slobodno nas kontaktirajte. <br /> Rado ćemo vam pomoći i odgovoriti što prije.</p>
      </div>
      
      <ContactForm />
      
    </section>
  )
}

export default Contact