import React from "react";
import { Container, Row } from 'react-bootstrap';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import './Cadastro.css'
import ClientForm from '../../componentes/ClientForm/ClientForm';


function Cadastro(props ) {

    return (
        <Container >
            <Row>
                <Header />
            </Row>
            <Row >
                <ClientForm/> 
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>      
    );
}
export default Cadastro;