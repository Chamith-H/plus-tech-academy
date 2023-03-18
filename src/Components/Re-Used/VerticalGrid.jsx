import "../../Styles/Re-Used/VerticalGrid.css"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import DataBox from "./DataBox"
import CourseData from "../../Datasets/CourseData";
import ChoosedCourse from "../../Datasets/ChoosedCourse";

const VerticalGrid =()=> {

    const navigate = useNavigate();
    const learn = CourseData;

    const[clicked, setClicked] = useState([false, false, false, false, false, false])
    const[courses, setCourses] = useState(learn[0].courses)
    const[category, setCategory] = useState(1)

    const click_Action =( selected )=> {
        asign_Clicked(selected.category_ID);
        setCourses(selected.courses);
    }

    const asign_Clicked =( id )=> {
        const newClicked = [false, false, false, false, false, false];
        newClicked[id-1] = true;
        setClicked(newClicked);
        setCategory(id);

        //Handling Back Presing
        const choosed = new ChoosedCourse
        choosed.ChoosedCourse(id-1)

    }

    const selected_Course=( id )=> {
        navigate(`/selected-course?category=${category}&course=${id}`);
    }

    useEffect(() => {
        const history = new ChoosedCourse

        if(history.fetch().id != 0) {
            const previousClicked = [false, false, false, false, false, false];
            previousClicked[history.fetch().id] = true;
            setClicked(previousClicked);
            setCourses(learn[history.fetch().id].courses)
        }

        else {
            const previousClicked = [true, false, false, false, false, false];
            setClicked(previousClicked);
        }
        
        
    }, []);

    return (
        <div className="VerticalGrid">
            <div className="row g-0">
                <div className="col-5 col-sm-4 col-md-3">
                    <div className="Main-Buttons">
                        {learn.map((course) =>(
                            <div key={learn.category_ID} className={clicked[course.category_ID-1]? "Tab-Button-Clicked":"Tab-Button-Not-Clicked"} type="button" onClick={()=> click_Action(course)}>
                                <div className={clicked[course.category_ID-1]? "Clicked":"Not-Clicked"}>&nbsp;</div>
                                <div className={clicked[course.category_ID-1]? "Active-Tab":"Single-Tab"}>{course.category_Name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-7 col-sm-8 col-md-9">
                    <div className="Grid-Scroll">

                        {clicked.map((_isClicked) => (
                            <div>
                                {_isClicked && (
                                    <div className="Grid-Contents">
                                        {courses.map((course) => (
                                            <div className="col-12 col-md-6 col-lg-6 col-xl-4 px-2 px-sm-3 px-md-0 ps-md-3 pe-md-3 mt-3 pt-2 pt-md-0">
                                                <DataBox Title={course.title} SubTitle={course.level} Content={course.introduction} Press_Action={()=> selected_Course(course.id)}></DataBox>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                     </div>
                </div>
            </div>
        </div>
    )
}  

export default VerticalGrid