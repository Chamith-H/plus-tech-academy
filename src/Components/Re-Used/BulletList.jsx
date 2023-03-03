import "../../Styles/Re-Used/BulletList.css"
import ActionButton from "../Re-Used/ActionButton"

const BulletList =( props )=> {
    return (
        <div className="BulletList bg-primary">
            <div className="Bullet-Box px-3 px-lg-4 pt-3 pb-2">
                <h5 className="ms-1 ms-sm-0 fs-6">{props.Title}</h5>

                {props.Sub_Active && ( <p className="ms-1 ms-sm-0">{props.SubTitle}</p> )}

                <ul className="Bullet-List">
                    { (props.List).map( (bullet) => (
                        <li className="me-1">{ bullet }</li>
                    ))}
                </ul>

                {props.Action && (
                    <div className="Align-Benifit-Button">
                        <div className="Benifit-Button pb-1">
                            <ActionButton Title={props.Wanted} press_Action={props.Get_Action}></ActionButton>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default BulletList