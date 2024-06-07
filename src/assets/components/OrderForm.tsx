import { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"


const OrderForm = (props:any) => {
    const [mailSent, setMailSent] = useState<boolean>(false)
    const [mailFail, setMailFail] = useState<boolean>(false)

    const [data, setData] = useState({
        user_name:"",
        user_email:"",
        user_phone:"",
        user_address:"",
        user_message:"",
        user_order: "",
    })

    useEffect(() => {
        const generateUserOrder = () => {

          const orderString = props.order.map((item: any) => `${item.name} - ${item.amount}`).join(", ");
          setData((prev) => ({
            ...prev,
            user_order: orderString, 
          }));
        };
    
        generateUserOrder(); 
      }, [props.order]);


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
            import.meta.env.VITE_BUY_TEMPLATE_ID,
            {
                user_name: data.user_name,
                user_email:data.user_email,
                user_message:data.user_message,
                user_phone: data.user_phone,
                user_address: data.user_address,
                user_order: data.user_order,
            })
        .then(() => {
            setMailSent(true)
            props.resetOrderList();
            console.log("sent");
        })
        .catch((error) => {
            setMailFail(true)
            console.log(error);
        })
    }



  return (
    !mailFail ? (mailSent ? <div className="emailParag"><p>Narudžba uspiješno poslana!</p></div> : 
    <form className="formOrders" onSubmit={sendEmail}>

      <div className="formDivs">
        <label className="formLabel">Ime i Prezime:</label>
        <input type="text" name="user_name" className="formInput smallInput" onChange={handleChange} required />
      </div>
     <div className="formDivs">
        <label className="formLabel">Email:</label>
        <input type="email" name="user_email" className="formInput smallInput" onChange={handleChange}  required />
     </div>
     <div className="formDivs">
        <label className="formLabel">Broj telefona:</label>
        <input type="tel" name="user_phone" className="formInput smallInput" onChange={handleChange}  required />
     </div>
     <div className="formDivs">
        <label className="formLabel">Adresa:</label>
        <input type="text" name="user_address" className="formInput smallInput" onChange={handleChange}  required />
     </div>

      <input type="submit" value="Naruči" className="submitBtn" />
    </form>) : 
    <div className="emailParag"><p>Neuspiješno slanje narudžbe, pokušajte opet kasnije.</p></div>
  )
}

export default OrderForm