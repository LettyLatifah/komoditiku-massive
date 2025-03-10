import { Routes, Route } from "react-router-dom";
import "./App.css"

import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Daftar from "./pages/login/Daftar";
import Masuk from "./pages/login/Masuk";
import Konsultasi from "./pages/layanan/Konsultasi";

import { HOME, SERVICE, ABOUT, CONTACT, LOGIN, REGISTER, CONSUL  } from "./router";

function App() {
  return ( 
    <div>
      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<Service />} path={SERVICE} />
        <Route element={<About />} path={ABOUT} />
        <Route element={<Contact />} path={CONTACT} />
        <Route element={<Daftar />} path={REGISTER} />
        <Route element={<Masuk />} path={LOGIN} />
        <Route element={<Konsultasi />} path={CONSUL} />
      </Routes>           
    </div>     
    
  );
}

export default App;
