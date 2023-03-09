import "../../Styles/Main-Pages/AboutUs.css"
import PageTitle from "../Re-Used/PageTitle";
import ViewCard from "../Re-Used/ViewCard";
import Mission from "../../Assets/Others/Vision.png"
import Vision from "../../Assets/Others/Vision_L.png"
import BulletList from "../Re-Used/BulletList";
import ContactForm from "../Re-Used/ContactForm";
import BeliefImage from "../../Assets/Others/Belief.png"
import { useEffect } from "react";

function AboutUs() {

    const belief = [
        'We believe in learning more than homework, certificates & competition.',
        'Tech industry is growing faster than any other industry and not shrinking. (i.e +Tech: TravelTech, AgTech, FinTech, EdTech, MedTech, eSports, eInvestment etc)',
        'Vocational education systems should change to prepare everyone to thrive in a complex world.',
        'No one should be excluded from education because of financial constraints.',
        'Our students can enrich their lives with a career in tech.'
    ]

    const objectives = [
        'To help everyone fall in love with Tech Careers.',
        'Encourage tech education even at a younger age.',
        'Empower to build a financially rewarding future.',
        'Help companies to find job ready tech talent.'
    ]

    const values = [
        'Doing unto others as you would have them do unto you.',
        '100% client first.',
        '100% transparency.',
        '100% honesty.',
        '100% impact.'
    ]

    const links = [
        {
            id:1,
            name :'Solution for LEARNERS',
            link:'#/learners'
        },

        {
            id:2,
            name :'Solution for EDUCATORS ',
            link:'#/educators'
        },

        {
            id:3,
            name :'Solution for ENTERPRISES',
            link:'#/enterprises'
        },
    ]

    const faqs = [
        {
            id:1,
            question:'1. Does your education system help beginners? ',
            answer:'Definitely! We understand learning minds, whether they are young children or experienced adults - and have designed our knowledge sharing approach to suit every need. '
        },

        {
            id:2,
            question:'2. How will learners’ benefit? ',
            answer:'Each of our students will receive training to sharpen their skills to prepare for the most demanding jobs. Whether you are 6 or 60 years of age, you can join us with no necessary previous experience or qualifications.'
        },
        
        {
            id:3,
            question:'3. Are you a degree-awarding institution? ',
            answer:'We do not award any degrees or diplomas. We cater to top employers world-wide who increasingly value hands-on technical competency, world-class skills and professional attitudes over certificates.'
        },
        
        {
            id:4,
            question:'4. Do you arrange job placements? ',
            answer:'While we like to help out, our priority is providing learners the opportunities to enhance their capabilities through training and showcase their abilities. '
        },
        
        {
            id:5,
            question:'5. Will you support me to start my own business? ',
            answer:"Yes. In case you don't want to stay in the workforce any longer, we will guide you to build an entrepreneurial path related to the IT industry."
        },
        
        {
            id:6,
            question:'6.  Are all your trainings free?',
            answer:"No. Some of the trainings are 'Pay As You Go' and have payment options that suit your needs. We also do our best to ensure students with financial difficulties are given maximum available concessions/support (so don't make money a limitation!). "
        },
        
        {
            id:7,
            question:'7. Do you provide mentoring and guidance? ',
            answer:'Of course! At the heart of our academic empowerment model is continuous mentorship.'
        },
        
        {
            id:8,
            question:'8. How do I join a class/training? ',
            answer:'You can register through our website. If you need help choosing a course, our consultants are happy to help on 0742833337.'
        },
        
        {
            id:9,
            question:'9. Do you have training programmes for adults and senior citizens? ',
            answer:'Of course, we do, at your own schedule too! Call us on 0742833337 and our consultants guide you to success.'
        },
        
        {
            id:10,
            question:'10. What kind of equipment does my child/I need, when learning?',
            answer:"All that's needed is a computer (laptop, desktop), web camera and microphone (built-in or external) and any kind of internet connection."
        },
        
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="AboutUs">
            <div className="row g-0">
      	        <div className="col-12 col-md-5 col-lg-4">
                    <PageTitle Highlight='+Tech Academy' Next='is focused to up skill anyone with Tech Talent with a growth mindset.'></PageTitle>
                </div>

                <div className="col-12 col-md-7 col-lg-8 d-flex align-items-center">
                    <div className="Vision py-4 py-md-0">
                        <div className="row g-0 d-flex px-3 px-sm-0">
                            <div className="col-sm-6 ps-sm-4 pe-sm-2 pb-3 pb-sm-0">
                                <ViewCard Title='Our Vision' CardImage={Vision} Description='Change lives by being the most trusted source of training and employment.'></ViewCard>
                            </div>

                            <div className="col-sm-6 pe-sm-4 ps-sm-2">
                                <ViewCard Title='Our Mission' CardImage={Mission} Dark={true} Description='Build a community of job ready digital talent who are happy for each other’s success.'></ViewCard>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="About-Selection pt-3 pb-2 px-3">
                    <h6><strong>What..? :</strong> <span>Accelerated skill training for employability, connect opportunities to earn, share knowledge for everyone’s success.</span></h6>
                    <h6><strong>Who we serve..? :</strong> <span>Anyone lacking guidance to build future ready digital skills.</span></h6>
                </div>

                <div className="Our-Belief pt-3 pt-sm-4 pb-sm-3 px-2 p-sm-4 px-md-5">
                    <div className="row g-0">
                        <div className="col-12 col-lg-8">
                            <BulletList Title='Our Belief' List={belief}></BulletList>
                        </div>

                        <div className="d-none d-lg-flex justify-content-end col-lg-4">
                            <div className="pt-2">
                                <img src={BeliefImage} alt="Background-Image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Val-and-Object py-4">
                    <div className="row g-0">
                        <div className="col-sm-6 ps-sm-4 ps-md-5 px-2 pe-sm-2 pb-3 pb-sm-0">
                            <div className="Objectives-About py-sm-2 px-sm-2">
                                <BulletList Title='Our Objectives' List={objectives} Dark={true}></BulletList>
                            </div>
                        </div>

                        <div className="col-sm-6 pe-sm-4 pe-md-5 px-2 ps-sm-2">
                            <div className="Values-About px-sm-2">
                                <BulletList Title='Our Values' List={values} Sub_Active={true} SubTitle='We are growing around these core values:'></BulletList>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="About-Helping px-3 px-sm-4 py-4 px-md-5 py-md-5 bg-white">
                    <h3 className="fs-3">HELIPNG ABSOLUTE BEGINNERS TO BE <span>JOB-READY</span> DIGITAL TALENT</h3>

                    <p><strong>N</strong>o matter who you are, what you do or where you work, your life is being shaped by changing technology. We can’t stop this, but we can adapt our future to make the most of it.</p>
                    <p><strong>W</strong>hether you’re 17 or 60, our programme has been developed to help launch a financially rewarding career in Tech – no prior experience or specialist skill needed!</p>
                    <p><strong>L</strong>et us help you TODAY. You don’t have to do it alone anymore; we will be with you every step of the way.</p>

                    <div className="d-flex justify-content-start">
                        <div className="Navigating-Links-About pt-3">
                            {links.map((link) => (
                                <div className="About-Navigations">
                                    {link.id != 1 && (
                                        <p className="me-2">|</p>
                                    )}
                                    <a className="me-2" href={link.link}>{link.name}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <ContactForm></ContactForm>

                <div className="Asking-Faqs px-3 px-sm-4 pt-4">
                    <h5>Frequently Asked Questions (FAQ)</h5>
                    <p>Here are a few answers for FAQs</p>
                </div>

                <div className="row g-0 pt-4 Faq-List pb-3">
                    {faqs.map((faq) => (
                        <div className="col-12 col-md-6 px-3 px-sm-4 pb-2">
                            <h6>{faq.question}</h6>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;