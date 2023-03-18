let saved_Id = 0;

class ChoosedCourse {

    ChoosedCourse(id) {
        saved_Id = id
    }

    fetch() {
        const course = {
                        id: saved_Id,
                    }
                     
        return course
    }
}

export default ChoosedCourse