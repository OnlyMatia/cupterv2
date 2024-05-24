import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <section className="contact" >
      <div className="contactText">
        <h2 className="section-title contact__initial">Pošaljite nam poruku</h2>
        <p className="contact__description">Ako imate dodatnih pitanja u vezi ćuptera ili veleprodaje slobodno nas kontaktirajte putem email-a.</p>
      </div>
      <ContactForm />
      
    </section>
  )
}

export default Contact