import "../../Styles/Re-Used/ViewCard.css"

const ViewCard =( props )=> {
    return (
        <div className="CardLight py-3 px-3">
            <h4 className="fs-5">{props.Title}</h4>
            <img className="mt-2 mb-1" src={props.CardImage} alt="Card-Image" />
            <h6>{props.Description}</h6>
        </div>
    )
}

export default ViewCard