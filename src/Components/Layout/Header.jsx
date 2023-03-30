import React from 'react';
import "../../Styles/Layout/Header.css";
import { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import BrandLogo from "../../Assets/Header/Plustech Academy Logo.png";
import Toggler from "../../Assets/Header/Toggler.png";
import TogglerBackground from "../../Assets/Header/Toggler-Background.png";
import Navlinks from "../Re-Used/Navigations";


function Header() {

  const [togglerView, setTogglerView] = useState(false);
  const ref = useRef(null);

  const handle_ClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setTogglerView(false);
      };
  };

  useEffect(() => {
      document.addEventListener("mousedown", handle_ClickOutside);

      return () => {
        document.removeEventListener("mousedown", handle_ClickOutside);
      };
  });

    return (
      <div ref={ref} className="Header sticky-top">
        <div className="Header-Important">
            <a className="Brand ps-2 ps-md-3" href='#/'>
                <img type="button" src={BrandLogo} alt="Plustech Academy Logo" />
            </a>

            <div className="Toggler d-flex d-md-none">
                <img src={Toggler} alt="Toggler Icon" type="button" onClick={() => setTogglerView(!togglerView)} />
            </div>
        </div>

        <div className="Page-Handlers">
            <div className="Expand-Menu-to-Desktops d-none d-md-block"><Navlinks></Navlinks></div>

            { togglerView && (
                <motion.div className="Toggler-Menu-to-Mobiles d-flex justify-content-between d-block d-md-none"
                  initial={{ height: 0 }}
                  animate={{ height: '230px' , transition: { duration: 0.3 }}}>
                    <motion.div
                          initial={{ x: -140 }}
                          animate={{ x: 0 , transition: { duration: 0.5 }}}>
                        <Navlinks press_Action={()=> setTogglerView(false)}></Navlinks>
                    </motion.div>
                    <img src={TogglerBackground} alt="Background-Toggler" className='mt-4'/>
                    
                </motion.div>
            )}

          <button id="Sign-Btn" className="me-2 me-lg-3 d-none">Sign in</button>
        </div>
      </div>
    );
}

export default Header;