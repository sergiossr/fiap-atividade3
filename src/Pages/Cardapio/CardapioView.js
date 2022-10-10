import React from 'react';
import '../../Utils/Common/Main.css';
//Importa os componentes do Bootstrap
import { Container, Row } from 'react-bootstrap';
//Importa os componentes
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

const CardapioView = () => {
    return (
        <Container maxWidth = 'lg'>
            <Row>
                <Header />
            </Row>
            
            <Row>
                <Footer/>
            </Row>
        </Container>  
    );
};

export default CardapioView;