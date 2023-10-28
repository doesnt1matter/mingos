import {Header} from "./components";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<h1>Главная</h1>}/>
        <Route path="/documents" element={<h1>Документы</h1>}/>
        <Route path="/contacts" element={<h1>Контакты</h1>}/>
      </Routes>
    </div>
  );
}

export default App;