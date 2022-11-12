import React, { useState, useEffect } from "react";
//Importa os componentes do Bootstrap
import { Container, Row } from 'react-bootstrap';
//Importa os componentes
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import './Cadastro.css'
import ClientForm from '../../componentes/ClientForm/ClientForm';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import UseAPI from '../../Services/APIs/Common/UseAPI';
import CadastroAPI from "../../Services/APIs/CadastroAPI/CadastroAPI"


function Cadastro(props ) {

    const getClienteAPI = UseAPI(CadastroAPI.getCliente);
    const getClientesAPI = UseAPI(CadastroAPI.getClientes);

    let id = 2;
    var nameJSON = {};
    useEffect(() => {
    
        getClienteAPI
          .requestPromise(id)
          .then((info) => {
            nameJSON = info;
            //console.log("NameJSON",nameJSON);
            //console.log(info);
            
          })
          .catch((info) => {
            console.log(info);
          });
      }, [])

   /*   useEffect(() => {
    
        getClientesAPI
          .requestPromise()
          .then((info) => {
            console.log(info);
            
          })
          .catch((info) => {
            console.log(info);
          });
      }, [])
*/
      


    return (
        <Container >
            <Row>
                <Header />
            </Row>
            <Row >
                <ClientForm/>
                <Button   >
                    Fazer Pedidos
                </Button>  
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>      
    );
}
export default Cadastro;