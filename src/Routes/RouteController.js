import React from "react";
import CardapioController from "../Pages/Cardapio/CardapioController";
import MonteController from "../Pages/MonteSuaPizza/MonteController";
import Cadastro from "../Pages/Cadastro/Cadastro";
import { Route, Routes } from "react-router-dom";
import Pedidos from "../Pages/Pedidos/Pedidos";

export default function RouteController (){
  return (
    <Routes>
      <Route path="/" element={<CardapioController/>}/>
      <Route path="/monte" element={<MonteController/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="pedidos" element={<Pedidos/>}/>
    </Routes>
  );
}

