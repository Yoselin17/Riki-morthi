import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Home from "./view/Home";
import injectContext from "./Store/AppContext";
import InformacionPersonaje from "./Componentes/InformacionPersonajes";



function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/informacion/personajes/:id"  element={<InformacionPersonaje/>}/>
   </Routes>
   </BrowserRouter>
  );
}


export default  injectContext(App);