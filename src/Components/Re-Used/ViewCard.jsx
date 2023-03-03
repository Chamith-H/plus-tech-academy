import "../../Styles/Re-Used/ViewCard.css"

const ViewCard =( props )=> {
    return (
        <div className={`View-Card py-3 px-3 ${props.Dark? "Dark-Background":"Light-Background"}`}>
            <h4 className={`fs-5 ${props.Dark? "Dark-Head":"Light-Head"}`}>{props.Title}</h4>
            <img className="mt-2 mb-1" src={props.CardImage} alt="Card-Image" />
            <h6 className={props.Dark? "Dark-Text":"Light-Text"}>{props.Description}</h6>
        </div>
    )
}

export default ViewCard