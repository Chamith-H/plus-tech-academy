import "../../Styles/Re-Used/SubmitButton.css"

const SubmitButton =( props )=> {
    return (
        <div className="SubmitButton">
            <button onClick={props.press_Action}>{props.Title}</button>
        </div>
    )
}

export default SubmitButton