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

function Routings() {
    return (
      <div className="Routings">
        <Router>
          <Routes>
            <Route path='/' element={ <Home/> }></Route>
            <Route path='/learners' element={<Learners/>}></Route>
            <Route path='/selected-course' element={<Courses/>}></Route>
            <Route path='/educators' element={<Educators/>}></Route>
            <Route path='/enterprises' element={<Enterprises/>}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
            <Route path='/teach' element={<Teach/>}></Route>
            <Route path='/mentor' element={<Mentor/>}></Route>
            <Route path='/partner' element={<Partner/>}></Route>
          </Routes>
        </Router>
      </div>
    );
}

export default Routings;