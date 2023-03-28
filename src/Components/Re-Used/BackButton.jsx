import "../../Styles/Re-Used/BackButton.css"
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const BackButton =( props )=> {

  const [animation, setAnimation] = useState(false)

    useEffect(() => {
      setAnimation(true)
        window.addEventListener("popstate", restoreScrollPosition);
    
        return () => {
          window.removeEventListener("popstate", restoreScrollPosition);
        };

        
      }, []);
    
      const handleBackClick = () => {
        window.history.back();
      };
    
      const restoreScrollPosition = () => {
        const { scrollX, scrollY } = window.history.state || {};
    
        if (scrollX !== undefined && scrollY !== undefined) {
          window.scroll(scrollX, scrollY);
        }
      };

    return (
      <div className="Got-Back">
        {animation && (
        <motion.div className="BackButton"
            initial={{ x: -100 }}
            animate={{ x: 0 , transition: { duration: 0.5 }}}>
              <button onClick={handleBackClick}>
                  <i class="bi bi-arrow-left-short"></i>
                  <p>{props.Title}</p>
              </button>
        </motion.div>
        )}
      </div>
    )
}

export default BackButton