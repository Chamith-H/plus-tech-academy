import React from 'react';
import "../../Styles/Effects/Animater.css"
import Logo from "../../Assets/Header/Logo.png"
import { motion } from 'framer-motion';

const Animater = ( props ) => {
  return (
    <div className="Animater">
        <div className="Align-Animater">
            <motion.div className="Animater-Logo col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3"
                initial={{ x: -200 }}
                animate={{ x: 0 , transition: { duration: 0.5 }}}>
                <img src={Logo} alt="" />
            </motion.div>

            {props.Load != '' && (
                <div>
                    <motion.div className="Animation-Seperator pb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 , transition: { duration: 0.5 }}}>
                    </motion.div>

                    <motion.div className="Animater-Title"
                        initial={{ x: 200 }}
                        animate={{ x: 0 , transition: { duration: 0.5 }}}>
                            <h1>{props.Process} <span>{props.Load}</span></h1>
                    </motion.div>
                </div>
            )}
        </div>
    </div>
  );
};

export default Animater;