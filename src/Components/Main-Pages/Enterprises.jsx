import "../../Styles/Main-Pages/Enterprises.css";
import { useEffect } from "react";
import PageTitle from "../Re-Used/PageTitle";
import BulletList from "../Re-Used/BulletList";
import ContactForm from "../Re-Used/ContactForm";
import EnterprisesImage from "../../Assets/Enterprises-Page/Enterprises.png";
import PartnerImage from "../../Assets/Enterprises-Page/Partners.png";
import { motion } from "framer-motion";

function Enterprises() {
  const title = {
    first: 'BE PART OF AN',
    highlight:'AMAZING JOURNEY',
    next:'TO BUILD TALENT,',
    last:'IMPACT TECH INDUSTRY'
  }

  const benifits = {
    title: 'OUR BENEFITS',

    benifitList : [
        'Premium support to hire the right tech talent.',
        'Save time & money in recruitment.',
        'Train our students and hire the best talent.',
        "Transform your employees with digital skills.",
        'Contribute to fill the gap between academia & industry.'
    ],
  }

  const features = [
      {
        title:'HIRE',
        text:'Talent'
      },

      {
        title:'TRAIN',
        text:'Students'
      },

      {
        title:'POST',
        text:'Jobs'
      },

      {
        title:'TRAIN',
        text:'Staff'
      },

      {
        title:'BUILD',
        text:'Tech Solutions'
      },

      {
        title:'SPONSOR',
        text:'Students'
      },
  ]

  const students = {
    title: 'WHY OUR STUDENTS',

    benifitList : [
        'Job ready individuals.',
        'Have a high motivation.',
        'Persistent problem solver.',
        'Have a growth mindset.'
    ],
  }

  const partner = {
      title : "LET'S PARTNER..!",

      benifitList : [
        'Select directly from our talent pool – free. Please visit our Talent Pool page.',
        'You can train our students and hire directly – free.',
        'We can transform your staff with digital skills.',
        'Tell us your hiring need we will match the best talent for you.',
        'Tell us your IT requirement we will deliver systems & solutions.',
        'Sponsor a student and impact lives.'
      ],
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <div className="Enterprises">
          <div className="row g-0 Page-Row-Title ">
              <div className="col-12 col-md-4">
                  <PageTitle First={title.first} Highlight={title.highlight} Next={title.next} Last={title.last}></PageTitle>
              </div>

              <div className="col-12 col-md-8 Enroll-Contents">
                  <div className="Why-Enroll mx-2 mx-sm-4 mb-4 mx-sm-5 mb-sm-5 mx-md-0 mb-md-0 ps-sm-4 ps-md-3 pt-md-4 bg-white">
                        <BulletList Title={benifits.title} List={benifits.benifitList} Visible={false}></BulletList>
                        <div className="d-none d-lg-flex align-items-center pe-4">
                            <img src={EnterprisesImage} alt="Enroll-Image"/>
                        </div>
                  </div>
              </div>  
          </div>

          <div className="Enterprises-Features px-2 px-sm-0">
              <div className="row g-0 py-3 py-sm-4 py-md-5">
                  {features.map((feature, index) => (
                      <motion.div className="col-6 col-sm-4 col-md-2 py-3 py-md-0 d-flex justify-content-center"
                      initial={{ x: - index*200 }}
                      animate={{ x: 0 , transition: { duration: 0.1 + index/6 }}}>
                          <div className="Feature-Box col-10 col-sm-9 col-md-11 col-lg-10 col-xl-9 pt-4">
                              <h6>{feature.title}</h6>
                              <p>{feature.text}</p>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>

          <div className="Enterprises-Paragraph">
              <p className="px-3 text-center py-4">We are an outcome focused group of professionals working together in developing meaningful solution to fill the gap between academia & industry demand. We collaborate with companies , project owners to create win-win opportunities.</p>
          </div>

          <div className="Enterprises-Details mb-3">
              <div className="row g-0 px-2 px-sm-0">
                  <div className="col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-end">
                      <div className="col-12 col-sm-10 col-md-11 mt-3 my-md-4 pt-2 py-sm-3 px-lg-2 For-Student-E">
                        <BulletList Title={students.title} List={students.benifitList}></BulletList>
                      </div>
                  </div>

                  <div className="col-md-8 col-lg-9 d-flex justify-content-center">
                      <div className="col-12 col-sm-10 col-md-11 For-Partners my-4 px-md-3">
                          <BulletList Title={partner.title} List={partner.benifitList} Dark={true}></BulletList>
                          <img className="d-none d-lg-block" src={PartnerImage} alt="Partner-Image" />
                      </div>
                  </div>
              </div>
          </div>

            <ContactForm 
                SubTitle='Drop a message. You will be contacted by our functional consultants.' 
                Sub='OR directly speak with the Founder - Shaveen Fernando (+94) 0777428427'
                ContactTitle='OR feel free to talk to us and decide'>
            </ContactForm>
      </div>
    );
}

export default Enterprises;