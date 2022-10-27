import React from 'react';


//Importa os componentes do Bootstrap
import { Container, Row } from 'react-bootstrap';
//Importa os componentes
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import './Promo.css'



function PromoView(props ) {
    return (
        <Container maxWidth = 'lg' >
            <Row>
                <Header />
            </Row>
            <Row className='PromoContainer'>
                    <h1>TELA PROMOCOES</h1>
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>      
    );
}
export default PromoView;