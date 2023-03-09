import "../../Styles/Re-Used/DataBox.css"
import Next from "../../Assets/Others/Next.png"

const DataBox =( props )=> {
    return (
        <div className="Data-Box pt-3 pb-0" type="button" onClick={props.Press_Action}>
            <div className="Data-Title">
                <h3>{props.Title}</h3>
                <h4 className="py-1">{props.SubTitle} <img className="Next-go d-md-none" src={Next} alt="next" /></h4>
            </div>
            
            <p className="pt-2 px-2 px-sm-4">{props.Content}</p>
        </div>
    )
}

export default DataBox