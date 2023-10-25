import React from "react";

import logo from "../img/LOGO.svg";

const Header = () => {
  return (
    <div className="header__wrap _container">
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="LOGO" />
            </div>
        </div>
    </div>
  )
}

export default Header