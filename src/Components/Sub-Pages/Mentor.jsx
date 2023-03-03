import BulletList from "../Re-Used/BulletList"
import ContactForm from "../Re-Used/ContactForm"
import ImportantBar from "../Re-Used/ImportantBar"
import PageSubtitle from "../Re-Used/PageSubtitle"
import { useEffect } from "react"
import BackButton from "../Re-Used/BackButton"
import "../../Styles/Sub-Pages/Mentor.css"

const Mentor =()=> {

    const subtitle = {
        first: 'WE BELIEVE IN',
        highlight: 'MENTORING',
        last: 'TO BUILD A STRONGER CAREER IN TECH.'
    }

    const techMentors = [
        'Mentors are industry professionals who guide you to your goals.',
        'Mentors know what industry demands.',
        'Mentors provide feedback and guidance grow your tech career.',
        'Mentor should have minimum of three years’ experience working in the chosen field.',
        'Good communication skills.'
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="MentorPage">

            <div className="position-fixed">
                <BackButton Title='Bak to Educators'></BackButton>
            </div>

            <PageSubtitle First={subtitle.first} Highlighted={subtitle.highlight} Last={subtitle.last}></PageSubtitle>

            <div className="Mentor-Introduction pb-1 pb-sm-4">
                <div className="row g-0">
                    <div className="col-md-6 px-4 px-sm-5 pb-3 pb-sm-4 pb-md-0">
                        <p>Our mentorship program: We are redefining education for the 21st century through online learning combined with high-touch, human support throughout the student lifecycle: dedicated student advisors, career coaches, and industry-expert mentors.</p>
                        <h6>If you have the desire and the skills to help the next generation, <span>WE NEED YOU</span>.!</h6>
                    </div>

                    <hr className="d-md-none"></hr>

                    <div className="col-md-6 px-2 px-sm-5 pt-sm-4 pt-md-0">
                        <BulletList Title='Who are the +Tech Mentors?' List={techMentors}></BulletList>
                    </div>
                </div>
            </div>

            <ImportantBar
                Title='JOIN THE MOVEMENT..!!!'
                SubTitle='We’re on a mission to bridge the world’s skills gap, offering transformative online education for an affordable dynamic track.'
                Role='TechMENTOR'>
            </ImportantBar>

            <ContactForm></ContactForm>
        </div>
    )
}

export default Mentor