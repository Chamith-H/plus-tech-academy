import "../../Styles/Re-Used/PageSubtitle.css"
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

const PageSubtitle =( props )=> {

    const [animation, setAnimation] = useState(false)

    useEffect(() => {
        setAnimation(true)
    }, []);

    return (
        <div className="PageSubtitle mb-4 mb-sm-5">
            
                <div className="Align-Subtitle pt-5 pb-5 px-3 px-sm-4 px-md-5">
                
                {animation && (
                    <motion.div
                        initial={{ x: 400 }}
                        animate={{ x: 0 , transition: { duration: 0.7 }}}>
                            <h1 className="mt-2">{props.First} <span>{props.Highlighted}</span> {props.Last}</h1>
                    </motion.div>
                )}

                </div>
            
        </div>
    )
}

export default PageSubtitle