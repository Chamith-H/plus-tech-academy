import "../../Styles/Re-Used/RadioInput.css"

const RadioInput =( props )=> {
    return (
        <div className="RadioInput">
            <input 
                type="radio"
                value={props.Value}
                checked={props.Checked}
                onChange={props.Marked}>
            </input>

            <label className="ms-1">{props.Label}</label>
        </div>
    )
}

export default RadioInput