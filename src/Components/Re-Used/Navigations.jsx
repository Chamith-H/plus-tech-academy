import "../../Styles/Re-Used/Navigations.css"
import { useState } from "react"

const Navlinks =( props )=> {
    const [activeMenuItem, setActiveMenuItem] = useState('home');

    const handle_PressACTION =( select )=> {
        setActiveMenuItem(select)
        props.press_Action()
    }

    return (
        <div className="NavLinks">
            <ul className='ms-1 ms-md-0 d-md-flex'>
                <li className={activeMenuItem === 'home' ? 'active' : ''}><a href="#/" onClick={()=> handle_PressACTION('home')}>Home</a></li>
                <li className={activeMenuItem === 'learners' ? 'active' : ''}><a href="#/learners" onClick={()=> handle_PressACTION('learners')}>Learners</a></li>
                <li className={activeMenuItem === 'educators' ? 'active' : ''}><a href="#/educators" onClick={()=> handle_PressACTION('educators')}>Educators</a></li>
                <li className={activeMenuItem === 'enterprises' ? 'active' : ''}><a href="#/enterprises" onClick={()=> handle_PressACTION('enterprises')}>Enterprises</a></li>
                {/* <li><a href="#/" onClick={()=> handle_PressACTION('talent')}>Talent Pool</a></li> */}
                <li className={activeMenuItem === 'about' ? 'active' : ''}><a href="#/about" onClick={()=> handle_PressACTION('about')}>About Us</a></li>
            </ul>
        </div>
    )
}

export default Navlinks