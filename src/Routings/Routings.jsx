import { Routes, HashRouter as Router, Route} from "react-router-dom";

import Home from "../Components/Main-Pages/Home"
import Learners from "../Components/Main-Pages/Learners";
import Educators from "../Components/Main-Pages/Educators"
import Enterprises from "../Components/Main-Pages/Enterprises";
import AboutUs from "../Components/Main-Pages/AboutUs";
import Courses from "../Components/Sub-Pages/Courses"
import Teach from "../Components/Sub-Pages/Teach";
import Mentor from "../Components/Sub-Pages/Mentor";
import Partner from "../Components/Sub-Pages/Partner";
import EffectHandler from "../Components/Effects/EffectHandler";

const Load_Home = EffectHandler(Home, 700, '', '')
const Load_Learners = EffectHandler(Learners, 700, 'FOR', 'LEARNERS')
const Load_Educators = EffectHandler(Educators, 700, 'FOR', 'EDUCATORS')
const Load_Enterprises = EffectHandler(Enterprises, 700, 'FOR', 'ENTERPRISES')
const Load_AboutUs = EffectHandler(AboutUs, 700, 'ABOUT', 'US')
const Load_Courses = EffectHandler(Courses, 700, 'ENROLL', 'COURSE')
const Load_Teach = EffectHandler(Teach, 700, 'FOR', 'TEACHERS')
const Load_Mentor = EffectHandler(Mentor, 700, 'FOR', 'MENTORS')
const Load_Partner = EffectHandler(Partner, 700, 'FOR', 'PARTNERS')


function Routings() {
    return (
      <div className="Routings">
        <Router>
          <Routes>
            <Route path='/' element={ <Load_Home/> }></Route>
            <Route path='/learners' element={<Load_Learners/>}></Route>
            <Route path='/selected-course' element={<Load_Courses/>}></Route>
            <Route path='/educators' element={<Load_Educators/>}></Route>
            <Route path='/enterprises' element={<Load_Enterprises/>}></Route>
            <Route path='/about' element={<Load_AboutUs/>}></Route>
            <Route path='/teach' element={<Load_Teach/>}></Route>
            <Route path='/mentor' element={<Load_Mentor/>}></Route>
            <Route path='/partner' element={<Load_Partner/>}></Route>
          </Routes>
        </Router>
      </div>
    );
}

export default Routings;