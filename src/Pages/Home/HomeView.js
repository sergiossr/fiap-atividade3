import React, { useState, useEffect } from "react";

//Importa os componentes do Bootstrap
import { Row } from 'react-bootstrap';
//Importa os componentes
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import './Home.css'
import UseAPI from '../../Services/APIs/Common/UseAPI';
import APICardapio from '../../Services/APIs/CardapioAPI/CardapioAPI'
import Container from "@mui/material/Container";

function HomeView(props) {
  const getCardapioAPI = UseAPI(APICardapio.getCardapio)
  
  useEffect(() => {
    
    getCardapioAPI
      .requestPromise()
      .then((info) => {
        console.log(info);
      })
      .catch((info) => {
        console.log(info);
      });
  }, [])

   

    return (
        <Container maxwidth = 'lg' >
            <Row>
                <Header />
            </Row>
            <Row className='HomeContainer'>
                    <h1>TELA HOME</h1>
            </Row>

            <Row>
                <Footer/>
            </Row>
        </Container>      
    );
}
export default HomeView;



