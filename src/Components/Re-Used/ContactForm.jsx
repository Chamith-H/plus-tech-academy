import "../../Styles/Re-Used/ContactForm.css"
import ContactIcon from "../../Assets/Common/Contact.png"
import CallIcon from "../../Assets/Common/Call.png"
import WhatsappIcon from "../../Assets/Common/Whatsapp.png"
import InputField from "../Re-Used/InputField"
import SubmitButton from "../Re-Used/SubmitButton"
import AdminData from "../../Datasets/AdminData"

const ContactForm =( props )=> {

    const inputs = [
        {
            id:1,
            name:'name',
            label:'Name',
            type:'text',
            placeholder:'Your name'
        },

        {
            id:2,
            name:'email',
            label:'E mail',
            type:'text',
            placeholder:'Your e-mail'
        },

        {
            id:3,
            name:'phone',
            label:'Phone',
            type:'text',
            placeholder:'Your phone number'
        },

        {
            id:4,
            name:'whatsapp',
            label:'Whatsapp',
            type:'text',
            placeholder:'Your whatsapp number'
        },
    ]

    const get_InputDATA =()=> {

    }

    return (
        <div className="ContactForm">
            <div className="Contect-Us">
                <div className="Align-Contact-Box py-3 py-sm-4 py-md-5 px-3 px-sm-4 px-md-5">
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
                                <form className="py-3 p-2 py-sm-4 px-sm-3 my-4 mx-3 me-md-4 me-lg-5">
                                    <div className="Input-Fields">
                                        <div className="row g-0">
                                            {inputs.map((field) => (
                                                <div className="col-12 col-sm-6 col-md-12 col-lg-6 px-1 pb-2">
                                                    <InputField 
                                                            Label={field.label}
                                                            Type={field.type}
                                                            Placeholder={field.placeholder}
                                                            Entered={get_InputDATA}>
                                                    </InputField>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <label className="mx-1" htmlFor="">Message</label>
                                    <textarea type="text" placeholder="Type your message" className="mx-1" name="" id="" cols="34" rows="3"></textarea>
                                   
                                    <div className="px-1 pt-3">
                                        <SubmitButton Title='SEND US'></SubmitButton>
                                    </div>
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