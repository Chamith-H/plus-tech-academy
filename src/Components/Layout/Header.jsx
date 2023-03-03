import React from 'react';
import "../../Styles/Layout/Header.css";
import { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import BrandLogo from "../../Assets/Header/Logo.png";
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
            <div className="Toggler d-flex d-lg-none">
                <img src={Toggler} alt="Toggler Icon" type="button" onClick={() => setTogglerView(!togglerView)} />
            </div>

            <div className="Brand ps-0 ps-lg-3">
                <img src={BrandLogo} alt="Company Logo" />
            </div>
        </div>

        <div className="Page-Handlers">
            <div className="Expand-Menu-to-Desktops d-none d-lg-block"><Navlinks></Navlinks></div>

            { togglerView && (
                <motion.div className="Toggler-Menu-to-Mobiles d-flex justify-content-between d-block d-lg-none"
                  initial={{ height: 0 }}
                  animate={{ height: '268px' }}>
                    <Navlinks press_Action={()=> setTogglerView(false)}></Navlinks>
                    <img src={TogglerBackground} alt="Background-Toggler" className='mt-4'/>
                </motion.div>
            )}

          <button id="Sign-Btn" className="me-2 me-lg-3">Sign in</button>
        </div>
      </div>
    );
}

export default Header;