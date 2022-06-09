import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Navigation from "./componets/Navigation/Navigation";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import ListProduct from "./views/ListProducts/ListProduct";
import Location from "./views/Location/Location";
import Grid from "./views/Grid/Grid";
import AddProduct from "./views/AddProduct/AddProduct";
import EditProduct from "./views/EditProduct/EditProduct";


function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detalle/:idProduct" element={<Detail/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/list" element={<ListProduct/>}/>
        <Route path="/grilla-productos/:idProduct" element={<EditProduct/>}/>
        <Route path="/grilla-productos" element={<Grid/>}/>
        <Route path="/agregar-producto" element={<AddProduct/>}/>

      </Routes>
    </Router>
  );
}

export default App;
