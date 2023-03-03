import "../../Styles/Re-Used/ImportantBar.css"

const ImportantBar =( props )=> {
    return (
        <div className="ImportantBar pt-4 pb-3 px-3 px-md-5">
            <h5>{props.Title}</h5>
            <h6>{props.SubTitle}</h6>

            <div className="Get-Contact mt-4">
                <p><span>Apply :</span> Email your profile to <span className="Important-Email">info@plustechacademy.com</span></p>
                <p><span>Important :</span> Please mention "<span className="Important-Role">{props.Role}</span>" as the subject line of your email</p>
            </div>
        </div>
    )
}   

export default ImportantBar