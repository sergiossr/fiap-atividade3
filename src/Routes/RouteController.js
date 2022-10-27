import React from "react";
import HomeController from "../Pages/Home/HomeController";
import CardapioController from "../Pages/Cardapio/CardapioController";
import ClienteCadastroController from"../Pages/ClienteCadastro/ClienteCadastroController"
import MonteController from "../Pages/MonteSuaPizza/MonteController";
import PromoController from "../Pages/Promo/PromoController";
import { Route, Routes } from "react-router-dom";

export default function RouteController (){
  return (
    <Routes>
      <Route path="/" element={<HomeController/>}/>
      <Route path="/cardapio" element={<CardapioController/>}/>
      <Route path="/pedidos" element={<ClienteCadastroController/>}/>
      <Route path="/monte" element={<MonteController/>}/>
      <Route path="/promo" element={<PromoController/>}/>
    </Routes>
  );
}

