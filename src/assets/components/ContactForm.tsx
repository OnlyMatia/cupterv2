import { useState } from "react"
import emailjs from "@emailjs/browser"

const ContactForm = () => {
    const [data, setData] = useState({
        user_name:"",
        user_email:"",
        user_message:""
    })

    const handleChange = (event:any) => {
        const {name,value} = event.target;

        setData((prev) => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const sendEmail = (e:any) => {
        e.preventDefault()

        emailjs.init(import.meta.env.VITE_EMAIL_USER_ID)
        emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                user_name: data.user_name,
                user_email:data.user_email,
                user_message:data.user_message
            })
        .then(response => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }


  return (
    <form className="form" onSubmit={sendEmail}>

      <div className="formDivs">
        <label className="formLabel">Ime i Prezime:</label>
        <input type="text" name="user_name" className="formInput smallInput" onChange={handleChange} required />
      </div>
     <div className="formDivs">
        <label className="formLabel">Email:</label>
        <input type="email" name="user_email" className="formInput smallInput" onChange={handleChange}  required />
     </div>
      <div className="formDivs">
        <label className="formLabel">Poruka:</label>
        <textarea name="user_message" className="formInput bigInput" onChange={handleChange} required />
      </div>

      <input type="submit" value="Send" className="submitBtn" />
    </form>
  )
}

export default ContactForm