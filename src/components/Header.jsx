import React from "react";

import logo from "../img/LOGO.svg";

import {Link} from "react-router-dom";

import UserStore from "../store/UserStore";
import { observer } from "mobx-react-lite";

const Header = () => {
  return (
    <div className="header__wrap _container">
        <div className="header">
            <div className="header__logo">
              <img src={logo} alt="LOGO" />
            </div>

            <div className="header__list">
              <Link to={"/"}>Главная</Link>
              <Link to={"/documents"}>Документы</Link>
              <Link to={"/contacts"}>Контакты</Link>
            </div>

            <div>{UserStore.isAuth ? UserStore.user.email : "ТРЕБУЕТСЯ ВХОД"}</div>
        </div>
    </div>
  )
}

export default observer(Header);