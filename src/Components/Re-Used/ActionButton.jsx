import "../../Styles/Re-Used/ActionButton.css"

const ActionButton =( props )=> {
    return (
        <button className="ActionButton" onClick={props.press_Action}>{props.Title}</button>
    )
}

export default ActionButton