import "../../Styles/Main-Pages/Learners.css"
import { useState, useEffect } from "react";
import LearnerLinks from "../../Datasets/LearnerLinks";

import PageTitle from "../Re-Used/PageTitle";
import BulletList from "../Re-Used/BulletList";
import VerticalGrid from "../Re-Used/VerticalGrid";
import ContactForm from "../Re-Used/ContactForm";
import Enroll from "../../Assets/Learners-Page/Enroll.png"
import Guidence from "../../Assets/Learners-Page/Guidence.png"
import ClickButton from "../Re-Used/ClickButton";
import LinkPopup from "../Re-Used/LinkPopup";

function Learners() {

    const[linkPupup, setLinkPopup] = useState(false)
    const[selected, setSelected] = useState(null)

    const title = {
        first: 'MEANINGFUL ALTERNATIVE TO',
        highlight:'ACCELERATE',
        next:'YOUR SUCCESS IN THE',
        last:'DIGITAL WORLD'
    }

    const benifits = {
      title: 'WHY ENROLL ?',

      benifitList : [
          'Connect with a community of techies who are happy for each other’s success.',
          'We help our students to build a globally rewarding digital skillset.',
          "You want to change your career path but can't leave your current job until you get ready? Don’t worry, get ready for your next job without leaving your current job.",
          'We offer affordable fees with multiple payment options.'
      ],
    }

    const guidence = [
        'Build a 1:1 Job search strategy',
        'Resume & cover letters',
        'Interview preparation',
        'Salary negotiation',
        'LinkedIn profile',
        'Attend online career discussions to meet other students, interact with mentors, resolve burning career issues, and broaden your understanding of the field.'
    ]

    const handle_Popup =( select )=> {
        setSelected(select)
        setLinkPopup(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
      <div className="Learners">
          <div className="row g-0 Title-Learners">
              <div className="col-12 col-md-4">
                  <PageTitle First={title.first} Highlight={title.highlight} Next={title.next} Last={title.last}></PageTitle>
              </div>

              <div className="col-12 col-md-8 Enroll-Contents">
                  <div className="Why-Enroll mb-4 mx-2 mx-sm-5 mb-sm-5 mx-md-3 mb-md-0 bg-white pt-md-4 d-md-flex align-items-center">
                        <BulletList Title={benifits.title} List={benifits.benifitList} Visible={false}></BulletList>
                        <div className="d-none d-lg-block">
                            <img src={Enroll} alt="Enroll-Image"/>
                        </div>
                  </div>
              </div>  
          </div>

          <div className="Tranings px-2 px-sm-5 pt-5 pb-2">
                <h2 className="text-center px-2 px-sm-0 fs-3 pb-4">FORMAL EDUCATION WILLMAKE YOU ALIVING <span>+TECH EDUCATION</span> WILL MAKE YOU A FORTUNE</h2>
                <VerticalGrid></VerticalGrid>
          </div>

          <div className="Guidence-Services bg-light mt-5 pt-5 py-0 my-0">
                <div className="row g-0 pb-4">
                    <div className="col-12 col-md-7 px-3 px-sm-5 Guidence-Box">
                        <div className="Guidence-Description">
                            <h2 className="fs-3">CAREER <span>GUIDANCE SERVICES</span> FOR OUR STUDENTS</h2>
                            <p>We provide career preparation for all our students who are successfully complete the training within the allocated timeframe. Our career services team will help you for 6 months in the job search process.</p>
                        </div>
                        
                        <div className="ps-5">
                            <img src={Guidence} alt="Guidence-Image" />
                        </div>
                    </div>

                    <div className="col-12 col-md-5 px-3 px-sm-5 px-md-0 pe-md-5 py-4 py-md-0">
                        <div className="Guidence-List bg-white">
                            <BulletList List={guidence}></BulletList>
                        </div>
                    </div>
                </div>
          </div>

          <div className="Navigations px-3 px-sm-5 py-2 py-sm-3">
            <div className="col-12 col-sm-12 col-md-9 col-lg-8">
                <div className="row g-0">
                    <div className="col-6 pe-1">
                        <ClickButton 
                            Title='CLICK HERE TO' 
                            Role='FIND WORK'
                            Dark={true}
                            press_Action={()=> handle_Popup(0)}>
                        </ClickButton>
                    </div>

                    <div className="col-6 ps-1">
                        <ClickButton 
                            Title='CLICK HERE TO' 
                            Role='LEARN FREE'
                            press_Action={()=> handle_Popup(1)}>
                        </ClickButton>
                    </div>
                </div>
            </div>   
          </div>
            
            <ContactForm 
                SubTitle='Drop a message. You will be contacted by our mentors.' 
                ContactTitle='OR feel free to talk to us and decide.'>
            </ContactForm>

            {linkPupup && (
                <LinkPopup 
                    Data={LearnerLinks[selected]} 
                    press_Action={()=> setLinkPopup(false)}>
                </LinkPopup>
            )}
      </div>
    );
}

export default Learners;