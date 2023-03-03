import "../../Styles/Re-Used/ClickButton.css"

const ClickButton =( props )=> {
    return (
        <button className="LightButton" onClick={props.press_Action}><span className="d-none d-sm-block">{props.Title}&nbsp;</span>{props.Role}</button>
    )
}

export default ClickButton