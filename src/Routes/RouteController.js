import React from "react";
import Cardapio from "../Pages/Cardapio/Cardapio";
import Monte from "../Pages/MonteSuaPizza/Monte";
import Cadastro from "../Pages/Cadastro/Cadastro";
import { Route, Routes } from "react-router-dom";
import Pedidos from "../Pages/Pedidos/Pedidos";

export default function RouteController (){
  return (
    <Routes>
      <Route path="/" element={<Cardapio/>}/>
      <Route path="/monte" element={<Monte/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="pedidos" element={<Pedidos/>}/>
    </Routes>
  );
}

