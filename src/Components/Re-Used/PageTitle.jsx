import "../../Styles/Re-Used/PageTitle.css"

const PageTitle =( props )=> {
    return (
        <div className="PageTitle">
            <div className="align-Title-Box px-3 py-5">
                <h2>{props.First} <span>{props.Highlight}</span> {props.Next} {props.Last}</h2>
            </div>
        </div>
    ) 
}

export default PageTitle