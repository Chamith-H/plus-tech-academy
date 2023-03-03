import "../../Styles/Re-Used/InputField.css"

const InputField =( props )=> {
    return (
        <div className="InputField">
            <label For="">{props.Label}</label>

            <input 
                type={props.Type} 
                value={props.Value} 
                disabled= {props.Disable}
                placeholder={props.Placeholder} 
                pattern={props.Pattern}
                title={props.Validation}
                onChange={props.Entered}
                required={props.Required}>
            </input>
        </div>
    )
}

export default InputField