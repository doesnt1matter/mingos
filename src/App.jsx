import React, { useEffect } from 'react'
import { Header, Footer, AuthForm, Account } from "./components";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify"

import UserStore from "./store/UserStore.js";
import { observer } from 'mobx-react-lite';

function App() {

  //CHECK AUTH
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      UserStore.checkAuth();
    }
  }, [])

  return (
    <div className="app">
      <ToastContainer />
      <Header />

      <div>{UserStore.isLoading ? "LOADING..." : ""}</div>

      <div>
        <button onClick={() => { UserStore.getAll() }}>ПОЛУЧИТЬ СПИСОК ЮЗЕРОВ</button>
      </div>

      {
        UserStore.isAuth ?? !UserStore.isLoading
          ?
          <Routes>
            <Route path="/" element={<h1>Главная</h1>} />
            <Route path="/documents" element={<h1>Документы</h1>} />
            <Route path="/contacts" element={<h1>Контакты</h1>} />
            <Route path="/account" element={<Account />} />
          </Routes>
          :
          <Routes>
            <Route path="/" element={<AuthForm />} />
            <Route path="/account" element={<Account />} />
          </Routes>
      }

      <Footer />
    </div>
  );
}

export default observer(App);