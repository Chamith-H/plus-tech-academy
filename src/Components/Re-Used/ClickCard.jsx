import "../../Styles/Re-Used/ClickCard.css"

const ClickCard =( props )=> {
    return (
        <div type='button'
             onClick={props.press_Action}
             className="EducatorCard pt-0 pb-0 pt-md-4 pb-md-0 row g-0">

            <div className="col-7 col-md-12 ps-4 ps-md-0">
                <div className="row g-0">
                    <div className="pt-1 pt-md-0 col-12 d-flex justify-content-start justify-content-md-center">
                        <h6 className="mt-4 me-3 mt-md-0 me-md-0">{props.Title}</h6>
                    </div>
            
                    <div className="col-12 d-none d-md-flex justify-content-md-center">
                        <img className="my-3 Image-For-Large" src={props.Image} alt="image" />
                    </div>
            
                    <div className="col-12 Educator-Role d-flex justify-content-start justify-content-md-center">
                        <h5 className="me-3 mt-md-0 me-md-0">{props.Job}</h5>
                    </div>
                </div>
            </div>

            <div className="col-5 d-flex justify-content-end">
                <div className="Mobile-Tab-Image d-flex d-md-none justify-content-end">
                    <div className="Align-Tab-Image m-1">
                        <img className="mt-4 Image-For-Small px-2" src={props.Image} alt="image" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ClickCard