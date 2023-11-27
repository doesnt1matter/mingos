import React from 'react'
import { Header, Footer, AuthForm } from "./components";
import { Routes, Route } from "react-router-dom";

import UserStore from "./store/UserStore.js";

function App() {

  return (
    <div className="app">
      <Header />

      {UserStore.isAuth 
      ?
        <Routes> 
          <Route path="/" element={<h1>Главная</h1>} />
          <Route path="/documents" element={<h1>Документы</h1>} />
          <Route path="/contacts" element={<h1>Контакты</h1>} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<AuthForm />} />
        </Routes>
      }
      <Footer />
    </div>
  );
}

export default App;