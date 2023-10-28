import {React, useState} from 'react'
import {Header, Input, Footer} from "./components";
import {Routes, Route} from "react-router-dom";

function App() {
  const [form, setForm] = useState({});
  

  return (
    <div className="app">
      <Header />
      <Input label="Логин" type="text" name="login"/>
      <Input label="Пароль" type="text" name="password"/>

      <Routes>
        <Route path="/" element={<h1>Главная</h1>}/>
        <Route path="/documents" element={<h1>Документы</h1>}/>
        <Route path="/contacts" element={<h1>Контакты</h1>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;