import "../../Styles/Re-Used/LinkPopup.css"
import { motion } from 'framer-motion';

const LinkPopup =( props )=> {
    return (
        <div className="LinkPopup">
            <div className="ChooseLinks">
                <div className="col-11 col-sm-10 col-md-9 col-lg-8">
                    <motion.div className="Wanted-Box-Popup"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1}}>

                        <div className="Popup-Title sticky-top px-3 pt-2">
                            <h4>{props.Data.title_Head}<span className="d-none d-md-inline">, {props.Data.title_Guide}</span></h4>

                            <h4 
                                className="Close-Button"
                                type="button"
                                onClick={props.press_Action}
                                ><i class="bi bi-x-lg"></i>
                            </h4>
                        </div>

                        <div className="popup-Contents pt-2 ps-1 pe-3">
                            <ul className="Page-Navigations-For-Learners pb-3">
                                {props.Data.navigate.map(( _to ) => (
                                    <div>
                                        {_to.show && (<h6 className="pt-4">{_to.begin}</h6>)}
                                        {_to.seperate && (<h6>&nbsp;</h6>)}
                                        <li><a href={ _to.link }>{ _to.name }</a></li>
                                    </div>
                                    
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LinkPopup