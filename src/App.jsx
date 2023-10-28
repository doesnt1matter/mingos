import {React, useState} from 'react'
import {Header, Input, Footer} from "./components";
import {Routes, Route} from "react-router-dom";

function App() {
  const [form, setForm] = useState({login: "", password: ""});
  console.log(form);

  return (
    <div className="app">
      <Header />

      <Input label="Логин" type="text" name="login" form={form} setForm={setForm}/>
      <Input label="Пароль" type="text" name="password" maxLength={10} form={form} setForm={setForm}/>

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