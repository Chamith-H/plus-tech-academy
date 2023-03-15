import "../../Styles/Main-Pages/Home.css"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import BannerImage from "../../Assets/Home-Page/Banner-Image.png";
import ButtonCircle from "../../Assets/Home-Page/Button-Circle.png";

import JobsIcon from "../../Assets/Home-Page/Jobs-Icon.png";
import DigitalIcon from "../../Assets/Home-Page/Digital-Icon.png";
import PayIcon from "../../Assets/Home-Page/Pay-Icon.png";

import ContactForm from "../Re-Used/ContactForm"
import BulletList from "../Re-Used/BulletList";

function Home() {

    const navigate = useNavigate();
    const [selected, setSelected] = useState(1)

    const to_Learners =()=> {
        navigate('/learners');
    }

    const to_Enterprises =()=> {
        navigate('/enterprises');
    }

    const to_Educators =()=> {
        navigate('/educators');
    }

    const contents = [
        {
            title : 'FOR LEARNERS',
            description : 'Springboard your career with jobs of the future',
            function : to_Learners
        },
        {
            title : 'FOR ENTERPRISES',
            description : 'Hire the job ready digital talent',
            function : to_Enterprises
        },
        {
            title : 'FOR EDUCATORS',
            description : 'Build a well-balanced lifestyle',
            function : to_Educators
        },
    ];

    const benefits = [
        {
            id:1,
            title: 'BENIFITS TO STUDENTS',
            benefitList : [
                            'Shortest path for a globally rewarding Career in Tech.',
                            'Industry focused dynamic skill development.',
                            'Affordable learning to be employment ready.'
                          ],
            action : 'Register',
            go :'/learners'
        },

        {
            id:2,
            title: 'BENIFITS TO ENTERPRISES',
            benefitList : [
                            'Hire job ready tech talent.',
                            'Train our community & pick the best.',
                            'Transform your employees with digital skills.',
                            'Contribute to fill the gap between academia & industry.'
                          ],
            action : 'Collaborate',
            go :'/enterprises'
        },

        {
            id:3,
            title: 'BENIFITS TO EDUCATORS',
            benefitList : [
                            'Teach from anywhere.',
                            'Get a steady stream of income.',
                            'Manage your time towards a well-balanced life.',
                            'Make an impact.'
                          ],
            action : 'Apply',
            go :'/educators'
        },
    ]


    const roles = [
        {
            image : JobsIcon,
            alt : 'Jobs icon',
            description : 'Get ready for jobs of the future.'
        },
        {
            image : DigitalIcon,
            alt : 'Digital works icon',
            description : 'Hire job ready digital talent.'
        },
        {
            image : PayIcon,
            alt : 'Get payment icon',
            description : 'Make your passion pay.'
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Home">
            <div className="Banner">
                <div className="col-11 col-sm-10 col-lg-9 col-xl-8">
                    <div className="row g-0">
                        <div className="col-12 col-sm-4 col-md-5 pe-lg-5">
                            <div className="Baner-Image ms-sm-5 me-lg-5 pe-lg-5">
                                <img src={BannerImage} alt="Banner-Image" />
                            </div>
                        </div>

                        <div className="col-12 col-sm-8 col-md-7">
                            <div className="Banner-Contents pb-3 py-sm-0">
                                { contents.map( (content) => (
                                    <div className="Single-Content my-1 my-sm-3 ms-0 ms-sm-4" type="button" onClick={content.function}>
                                        <div className="Content-Box">
                                            <div className="Content-Details">
                                                <div className="Content me-3">
                                                    <h5>{content.title}</h5>
                                                    <h6>{content.description}</h6>
                                                </div>

                                                <img className="Show-More-Button" type="button" src={ButtonCircle} alt="Button" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Benifits pt-md-5 pb-md-4 px-xl-2">
                <h4 className="pt-5 pb-2 pb-sm-2 d-md-none">SEE OUR <span>BENIFITS</span> FOR,</h4>

                <div className="row g-0 py-0 px-2 py-lg-4 px-lg-5 d-none d-md-flex">
                    {benefits.map((benefit) => (
                        <div className="col-4 px-3">
                            <div className="Single-Benefit">
                                <BulletList 
                                    Title={benefit.title} 
                                    List={benefit.benefitList}
                                    Action={true}
                                    Wanted={benefit.action}
                                    Get_Action={() => navigate(benefit.go)}>
                                </BulletList>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="d-block d-md-none px-2 px-sm-4">
                    <div className="Benefits-Grid pb-5">
                        <div className="Benifit-Titles py-1 px-1">
                            <button className={selected == 1 ? 'activeTab' : ''} onClick={()=> setSelected(1)}>STUDENTS</button>
                            <button className={selected == 2 ? 'activeTab' : ''} onClick={()=> setSelected(2)}>ENTERPRISES</button>
                            <button className={selected == 3 ? 'activeTab' : ''} onClick={()=> setSelected(3)}>EDUCATORS</button>
                        </div>

                        <div className="Loading-Benefits bg-white">
                            {benefits.map((benefit) => (
                                <div className="Check-Clicked">
                                    {selected == benefit.id && (
                                        <div className="Load-Benefits">
                                            <BulletList 
                                                Title={benefit.title} 
                                                List={benefit.benefitList}
                                                Action={true}
                                                Wanted={benefit.action}
                                                Get_Action={() => navigate(benefit.go)}>
                                            </BulletList>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="Our-Role my-5 pt-3 pb-2">
                <h5 className="pb-3 pb-md-5 pt-2 mx-4 fs-3">WHAT DO <span>WE DO</span> TYPICALLY OTHERS WON'T DO (OR PERHAPS THEY CAN'T)</h5>

                <div className="row g-0 px-5">
                    { roles.map((role) => (
                        <div className="col-12 col-md-4">
                            <div className="Single-Role pt-4 pt-md-0">
                                <div className="Role-Circle px-5 pt-2">
                                    <img src={ role.image } alt={ role.alt } />
                                </div>

                                <div className="Role-Description pt-3">
                                    <p className="fs-6">{ role.description }</p>
                                </div>
                            </div>
                        </div>
                    ))}      
                </div>
            </div>

            <ContactForm 
                SubTitle='Connect with our mentors & consultants to learn what is best for you.' 
                ContactTitle='OR feel free to talk to us and decide'>
            </ContactForm>
        </div>
    );
}

export default Home;