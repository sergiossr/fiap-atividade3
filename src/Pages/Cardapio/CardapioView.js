import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import './Cardapio.css'
import CardapioCards from '../../componentes/CardapioCards/CardapioCards';
import UseAPI from '../../Services/APIs/Common/UseAPI';
import APICardapio from '../../Services/APIs/CardapioAPI/CardapioAPI'


const CardapioView = () => {

    

    return (
        <Container  >
            <Row>
                <Header />
            </Row>
            <Row>
                <CardapioCards/>
            </Row> 
            <Row>
                <Footer/>
            </Row>
        </Container>  
    );
};

export default CardapioView;