import ClickCard from "../Re-Used/ClickCard"
import PageTitle from "../Re-Used/PageTitle"
import "../../Styles/Main-Pages/Educators.css"
import Teach from "../../Assets/Educators-Page/Teach.png"
import Partner from "../../Assets/Educators-Page/Partner.png"
import Mentor from "../../Assets/Educators-Page/Mentor.png"
import { useNavigate } from 'react-router-dom';
import ContactForm from "../Re-Used/ContactForm"
import { useEffect } from "react"

function Educators() {

    const navigate = useNavigate();

    const title = {
        first: 'WE SOW SEEDS THAT WILL MAKE A HUNDRED AND THOUSANDS TO',
        highlight:'SUCCEED',
        next:'IN THEIR',
        last:'ASPIRATIONS'
    }

    const likes = [
        {
            id:1,
            title:"I'd like to,",
            image:Teach,
            job:'TEACH',
            navigate:'/teach'
        },

        {
            id:2,
            title:"I'd like to,",
            image:Mentor,
            job:'MENTOR',
            navigate:'/mentor'
        },

        {
            id:3,
            title:"We'd like to,",
            image:Partner,
            job:'PARTNER',
            navigate:'/partner'
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Educators">
            <div className="row g-0 Title-Educators">
                <div className="col-12 col-md-5 col-lg-5">
                    <PageTitle First={title.first} Highlight={title.highlight} Next={title.next} Last={title.last}></PageTitle>
                </div>

                <div className="col-12 col-md-7 col-lg-7 px-3 px-sm-4 Educator-Intro pt-3 pt-md-2 pt-xl-3">
                    <p className="">Education doesn’t have to be about tests, certificates and homework. It could be about learning instead. We are in journey to make education a fun, encouraging and motivating life activity.  We invest our resources and industry relationships in developing the  next generation professional development in the tech space to build the right minded talent to the needs of the  global tech industry. We like to partner with everyone who has the vision to build the younger generation with skills and right attitude.</p>
                    <h6 className="pb-3 "><strong>Stay connected with our educator community!</strong></h6>
                </div>
            </div>

            <div className="For-Educators-Instruction">
                <h6></h6>
            </div>

            <div className="Choose-Education-Role pt-4 px-4 px-sm-5">
                <h2>EDUCATION IS A <span>GIFT</span> THAT NONE CAN TAKE AWAY</h2>
            </div>

            <div className="Process-Row py-md-4 px-lg-4 px-md-3 mb-3">
                <div className="row g-0 py-3 py-sm-4 py-md-0">
                    {likes.map((like) => (
                        <div className="col-12 px-4 px-sm-5 py-2 py-md-0 col-md-4 px-md-2 px-lg-3">
                            <ClickCard
                                Title={like.title}
                                Image={like.image}
                                Job={like.job}
                                press_Action={()=> navigate(like.navigate)}>
                            </ClickCard>
                        </div>
                    ))}
                </div>
            </div>

            <ContactForm></ContactForm>
        </div>
    )
}

export default Educators