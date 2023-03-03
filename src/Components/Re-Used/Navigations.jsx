const Navlinks =( props )=> {

    return (
        <div className="NavLinks">
            <ul className='d-lg-flex'>
                <li><a href="#/" onClick={props.press_Action}>Home</a></li>
                <li><a href="#/learners" onClick={props.press_Action}>Learners</a></li>
                <li><a href="#/educators" onClick={props.press_Action}>Educators</a></li>
                <li><a href="#/enterprises" onClick={props.press_Action}>Enterprises</a></li>
                <li><a href="#/" onClick={props.press_Action}>Talent Pool</a></li>
                <li><a href="#/about" onClick={props.press_Action}>About Us</a></li>
            </ul>
        </div>
    )
}

export default Navlinks