import "../../Styles/Re-Used/ContactForm.css"
import ContactIcon from "../../Assets/Common/Contact.png"
import CallIcon from "../../Assets/Common/Call.png"
import WhatsappIcon from "../../Assets/Common/Whatsapp.png"
import InputField from "../Re-Used/InputField"
import SubmitButton from "../Re-Used/SubmitButton"
import AdminData from "../../Datasets/AdminData"
import CorrectIcon from "../../Assets/Others/Correct.png"
import ErrorIcon from "../../Assets/Others/Error.png"
import { motion } from 'framer-motion';
import { useState } from "react"

const ContactForm =( props )=> {

    const [contact, setContact] = useState ({
                                                name: '',
                                                email: '',
                                                phone: '',
                                                whatsapp: '',
                                                message: ''
                                            })

    const [submit, setSubmit] = useState(false)
    const [error, setError] = useState(false)

    const inputs = [
        {
            id:1,
            name:'name',
            label:'Name',
            type:'name',
            placeholder:'Your name',
            pattern:'^[a-zA-Z ]+$',
            validation:'Name can only contain letters and spaces.',
            required:true
        },

        {
            id:2,
            name:'email',
            label:'E mail',
            type:'email',
            placeholder:'Your e-mail',
            validation:"Eg : example@email.com",
            required:false
        },

        {
            id:3,
            name:'phone',
            label:'Phone',
            type:'text',
            placeholder:'Your phone number',
            pattern : "0[0-9]{9}",
            validation: "Eg : 0742833337",
            required:false
        },

        {
            id:4,
            name:'whatsapp',
            label:'Whatsapp',
            type:'text',
            placeholder:'Your whatsapp number',
            pattern : "0[0-9]{9}",
            validation: "Eg : 0742833337",
            required:false
        },
    ]

    const send_FormDATA =( event )=> {
        event.preventDefault();
        setSubmit(true);
        
        if(contact.email === "" && contact.phone === "" && contact.whatsapp === "") {
            setError(true)
            return
        }

        else {
            setError(false)
        }
    }

    return (
        <div className="ContactForm">
            <div className="Contect-Us">
                <div className="Align-Contact-Box py-3 py-sm-4 py-md-5 px-2 px-sm-4 px-md-5">
                    <div className="Contact-Box">
                        <div className="row g-0 py-3 py-lg-4">
                            <div className="col-12 col-md-6 px-3">
                                <div className="Contact-Title mt-4">
                                    <h4 className="fs-3">DIFFICULT TO <span>DESIDE</span>..?</h4>
                                    <p className="pt-2 Sub-Title fs-6">{props.SubTitle}<br></br><span>{props.Sub}</span></p>
                                </div>

                                <div className="Contact-Image py-3 d-none d-md-flex">
                                    <img src={ ContactIcon } alt="Contact Icon" />
                                </div>

                                <div className="Talk-With-Us d-none d-md-block">
                                    <p>{props.ContactTitle}</p>

                                    <div className="Contact-Call">
                                        <div className="Call">
                                            <img src={ CallIcon } alt="" />
                                            <p>{AdminData.call}</p>
                                        </div>

                                        <p className="px-sm-3">|</p>

                                        <div className="Call">
                                            <img src={ WhatsappIcon } alt="" />
                                            <p>{AdminData.whatsapp}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 ps-xl-5">
                                <form className="position-relative py-3 p-2 py-sm-4 px-sm-3 my-4 mx-3 me-md-4 me-lg-5" onSubmit={send_FormDATA}>
                                    <div className="Input-Fields">
                                        <div className="row g-0">
                                            {inputs.map((field) => (
                                                <div className="col-12 col-sm-6 col-md-12 col-lg-6 px-1 pb-2">
                                                    <InputField 
                                                            Label={field.label}
                                                            Type={field.type}
                                                            Value={contact[field.name]}
                                                            Placeholder={field.placeholder}
                                                            Entered={(e)=> setContact({...contact, [field.name]:e.target.value})}
                                                            Disable={false}
                                                            Pattern={field.pattern}
                                                            Validation={field.validation}
                                                            Required={field.required}>
                                                    </InputField>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <label className="mx-1" htmlFor="">Message</label>
                                    <textarea 
                                        type="text" 
                                        placeholder="Type your message" 
                                        className="mx-1" 
                                        name="message" 
                                        value={contact.message}
                                        onChange={(e)=> setContact({...contact, message:e.target.value})}
                                        cols="34" 
                                        rows="3"
                                        required={true}>
                                    </textarea>
                                   
                                    <div className="px-1 pt-3">
                                        <SubmitButton Title='SEND US' Type="submit"></SubmitButton>
                                    </div>

                                    {submit && (
                                    <motion.div className="Show-the-status"
                                                initial={{ scale: 0, y:50 }}
                                                animate={{ scale: 1, y:0 , transition: { duration: 0.2 }}}>
                                    
                                        
                                            <div className="Submit-Status">
                                                {error && (
                                                    <div className="See-Status pt-3 pb-3">
                                                        <div className="Status-Title">
                                                            <img src={ErrorIcon} alt="error icon" />
                                                            <h6 className="pt-2 ps-2">Can't submit</h6>
                                                        </div>
        
                                                        <p className="px-3 text-center">Please fill at least one of the <span>Email</span>, <span>Phone number</span>  or <span>Whatsapp number</span></p>

                                                        <div className="Close-Status">
                                                            <button onClick={() => setSubmit(false)}>Try again</button>
                                                        </div>
                                                    </div>
                                                )}

                                                {!error && (
                                                    <div className="See-Status pt-3 pb-3">
                                                        <div className="Status-Title">
                                                            <img src={CorrectIcon} alt="error icon" />
                                                            <h6 className="pt-2 ps-2">Sent successfully</h6>
                                                        </div>
        
                                                        <p className="px-3 text-center">One of our consultants will contact you shortly.</p>

                                                        <div className="Close-Status">
                                                            <button onClick={() => setSubmit(false)}>Ok Done</button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        
                                        </motion.div>
                                        )}
                                    </form>

                                <div className="Talk-With-Us d-block d-md-none">
                                    <p>{props.ContactTitle}</p>
                                
                                    <div className="Contact-Call">
                                        <div className="Call">
                                            <img src={ CallIcon } alt="" />
                                            <p>{AdminData.call}</p>
                                        </div>

                                        <p className="px-2">|</p>

                                        <div className="Call">
                                            <img src={ WhatsappIcon } alt="" />
                                            <p>{AdminData.whatsapp}</p>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm