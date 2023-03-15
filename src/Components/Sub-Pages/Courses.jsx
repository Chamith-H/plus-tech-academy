import "../../Styles/Sub-Pages/Courses.css"
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import EnrollImg from "../../Assets/Others/Enroll.png"
import CourseData from "../../Datasets/CourseData";
import InputField from "../Re-Used/InputField";
import RadioInput from "../Re-Used/RadioInput";
import SubmitButton from "../Re-Used/SubmitButton";
import HoriontalScroller from "../Re-Used/HoriontalScroller";
import AdminData from "../../Datasets/AdminData";
import BackButton from "../Re-Used/BackButton";
import CorrectIcon from "../../Assets/Others/Correct.png"
import ErrorIcon from "../../Assets/Others/Error.png"
import PDF_Icon from "../../Assets/Others/pdf.png"
import { motion } from 'framer-motion';
import emailjs from "emailjs-com"

function Course() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const _categoryELEMENT = searchParams.get('category')-1;
    const _courseELEMENT = searchParams.get('course')-1;

    const dataSet = CourseData[_categoryELEMENT].courses[_courseELEMENT]
    const courseContents = dataSet.contents

    const courseName = dataSet.title + '-' + ' (' + dataSet.level + ')';

    const[formData, setFormData] = useState ({
                                                title:courseName,
                                                name:'',
                                                email:'',
                                                phone:'',
                                                whatsapp:'',
                                                payment:null
                                            })

    const [submit, setSubmit] = useState(false)
    const [error, setError] = useState(false)

    const inputs = [
        {
            id:1,
            name:'title',
            label:'Course Title',
            type:'text',
            placeholder:'Your name',
            disable:true,
        },

        {
            id:2,
            name:'name',
            label:'Name',
            type:'text',
            placeholder:'Your name',
            disable:false,
            pattern:'^[a-zA-Z ]+$',
            validation:'Name can only contain letters and spaces.',
            required:true
        },

        {
            id:2,
            name:'email',
            label:'Email',
            type:'email',
            placeholder:'Your name',
            disable:false,
            required:false
        },

        {
            id:3,
            name:'phone',
            label:'Phone',
            type:'text',
            placeholder:'Your phone number',
            disable:false,
            pattern : "^(0[0-9]{9}|[1-9][0-9]{8})$",
            validation: "Eg : 0742833337",
            required:true
        },

        {
            id:4,
            name:'whatsapp',
            label:'Whatsapp',
            type:'text',
            placeholder:'Your whatsapp number',
            disable:false,
            pattern : "^(0[0-9]{9}|[1-9][0-9]{8})$",
            validation: "Eg : 0742833337",
            required:true
        },
    ]

    const payments = [
        {
            id:1,
            label:'Full pay',
            value:'full'
        },

        {
            id:2,
            label:'Installment',
            value:'installment'
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const send_FormDATA =( event )=> {
        event.preventDefault();
        setSubmit(true);
        
        if(formData.payment == null) {
            setError(true)
            return
        }

        else {

            const data = {
                            course: formData.title,
                            payment: formData.payment,
                            price: dataSet.fee,
                            email: formData.email,
                            name: formData.name,
                            phone: formData.phone,
                            whatsapp: formData.whatsapp,
                         }

            emailjs.send('service_0lrppz2', 'template_foylprx', data, '9ahc4pb_cDrWIR6U-')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })

            console.log(data)

            setError(false)
        }
    }

    return (
        <div className="Course bg-white">

            <div className="Back-to-Courses BackAction">
                <BackButton Title='Back to the courses'></BackButton>
            </div>

            <div className="bg-light pt-4 pt-md-5 Course-Shadow pb-md-4">
                <div className="Course-Title px-3 px-sm-4 px-lg-5 pt-4 pt-md-3">
                    <h2>{dataSet.title} - <span>{dataSet.level}</span></h2>
                </div>

                <div className="Course-Description px-3 px-sm-4 px-lg-5 pb-3 pb-md-0">
                    <p className="mb-md-4 pb-2 pb-md-3">{dataSet.description}</p>

                    {dataSet.cover != null &&  (
                        <div className="Cover List d-md-flex justify-content-md-between">
                            <div className="me-5 pb-3 pb-md-0">
                                <div className="Join-Course">
                                    <h5 className="text-start">{dataSet.cover.aim} <span>{dataSet.cover.target}</span></h5>
                                </div>
                                

                                <ol>
                                    {dataSet.cover.list.map((covering) => (
                                        <li>{covering}</li>
                                    ))}
                                </ol>
                            </div>

                            <div className="Join-Course">
                                <h5 className="text-start"><span>PREREQUISITE</span></h5>
                                <h6>{dataSet.cover.pre}</h6>
                            </div>
                        </div>
                        
                    )}
                </div>
            </div>
            

            <div className="row g-0 pt-4 pt-sm-5 px-lg-5">
                <div className="col-md-7">
                    <div className="Course-Information pe-md-4">
                        <div className="Join-Course ps-md-4 ps-lg-0">
                            <h5>WHO CAN <span>JOIN</span> ?</h5>
                            <p>{dataSet.join}</p>
                        </div>

                        <div className="Enroll-Image mb-3 d-none d-md-block ms-md-4 ms-lg-0">
                            <img src={EnrollImg} alt="Enroll-Image" />
                        </div>

                        <div className="Course-Details px-3 px-sm-4 px-lg-0">
                            <div className="row g-0 py-3 py-md-0">
                                <div className="col-sm-6 d-flex justify-content-start justify-content-sm-center justify-content-md-start">
                                    <div className="Detail-Set">
                                        <h6>Duration : <span>{dataSet.duration}</span></h6>
                                        <h6>Method : <span>{dataSet.method}</span></h6>
                                        <h6>Language : <span>{dataSet.language}</span></h6>
                                    </div>
                                </div>

                                <div className="col-sm-6 d-flex justify-content-start justify-content-sm-start">
                                    <div className="Detail-Set">
                                        <h6>Attendance : <span>{dataSet.attendance}</span></h6>
                                        <h6>Course Fee : <span className="Course-Fee">Rs.{dataSet.fee}</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 px-3 px-sm-4 px-lg-0">
                    <div className="Apply-Form px-3 pt-3 pb-4 mx-0 mx-sm-5 mx-md-0 mx-xl-2">
                        <form onSubmit={send_FormDATA}>
                            <div className="Apply-Course-Field">

                                 {inputs.map((field) => (
                                    <div className="pt-1">
                                        <InputField 
                                            Label={field.label}
                                            Type={field.type}
                                            Value={formData[field.name]}
                                            Placeholder={field.placeholder}
                                            Disable={field.disable}
                                            Entered={(e)=> setFormData({...formData, [field.name]:e.target.value})}
                                            Pattern={field.pattern}
                                            Validation={field.validation}
                                            Required={field.required}>
                                        </InputField>
                                    </div>
                                 ))}

                                 <div className="Payment-Type py-2">
                                    <div className="row g-0">
                                        {payments.map((pay) => (
                                            <div className="col-6">
                                                <RadioInput 
                                                    Label={pay.label}
                                                    Value={pay.value}
                                                    Checked={formData.payment === pay.value}
                                                    Marked={(e)=> setFormData({...formData, payment:e.target.value})}>
                                                </RadioInput>
                                            </div>
                                        ))}
                                    </div>
                                 </div>
                            </div>

                            <div className="">
                                <SubmitButton Title='REGISTER NOW' Type="submit"></SubmitButton>
                            </div>
                        </form>

                        {submit && (
                            <motion.div className="Show-the-status"
                                        initial={{ scale: 0.5, y:50 }}
                                        animate={{ scale: 1, y:0 }}>
                                    
                                        
                                <div className="Submit-Status">
                                    {error && (
                                        <div className="See-Status pt-3 pb-3">
                                            <div className="Status-Title">
                                                <img src={ErrorIcon} alt="error icon" />
                                                <h6 className="pt-2 ps-2">Can't Register</h6>
                                            </div>
        
                                            <p className="px-3 text-center">Please enter a payment plan to register</p>

                                            <div className="Close-Status">
                                                <button onClick={() => setSubmit(false)}>Try again</button>
                                            </div>
                                        </div>
                                    )}

                                    {!error && (
                                        <div className="See-Status pt-3 pb-3">
                                            <div className="Status-Title">
                                                <img src={CorrectIcon} alt="error icon" />
                                                <h6 className="pt-2 ps-2">Registered successfully</h6>
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
                    </div>
                </div>
            </div>

            <div className="Payments px-3 px-sm-5 px-md-4 px-lg-5 pt-4 pb-2 mt-5">
                <div className="row g-0">
                    <div className="col-12 col-md-5 col-lg-4 d-flex align-items-center">
                        <div className="Bank-Details mt-1 mb-3 my-sm-4 my-md-0">
                            <h6>Account Name : <span>Can Academy (Pvt)Ltd.</span></h6>
                            <h6>Account Number : <span className="Account-Number">008013390575001</span></h6>
                            <h6>Bank Name : <span>Seylan Bank </span></h6>
                            <h6>Branch : <span>Kollupitiya (0080)</span></h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-7 col-lg-8 d-flex justify-content-md-center">
                        <div className="Payment-Instructions ps-md-3">
                            <h5 className="mb-3 fs-6">To facilitate identification of your remittance, please quote your name as reference.</h5>
                            
                            <div className="Advice">
                                <div className="Advice-Title">
                                    <h6>Enroll :</h6>
                                </div>

                                <div className="Advice-Details">
                                    <p>Pay and send us the receipt via WhatsApp to <span>{AdminData.whatsapp}</span></p>
                                </div>
                            </div>

                            <div className="Advice">
                                <div className="Advice-Title">
                                    <h6>Need advice ?</h6>
                                </div>

                                <div className="Advice-Details">
                                    <p>Contact our mentors for help <span>(Call hours weekdays 11 am – 6 pm)</span>, More Info: <span>{AdminData.call}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Course-Content-Section">
                <div className="d-flex justify-content-center py-4 py-md-5 Align-Course-Content">
                    <div type="button" className="Course-Pdf col-11 col-sm-10 col-md-9 pt-4 pb-2">
                        <h5>Download the course content</h5>
                        <img src={PDF_Icon} alt="PDF icon" />
                        <p>{formData.title}.pdf</p>
                    </div>
                </div>
            </div>

            {/* <div className="Selected-Course-Contents px-3 px-sm-4 px-lg-5">
                {courseContents.map((content) => (
                    <HoriontalScroller 
                        Title={content.contentTitle} 
                        Style={content.style} 
                        List={content.lessons}
                        Chunk={content.chunk}>
                    </HoriontalScroller>
                ))}
            </div> */}
        </div>
    )
    
}

export default Course