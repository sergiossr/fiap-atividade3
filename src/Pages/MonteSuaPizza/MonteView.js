import React from 'react';


//Importa os componentes do Bootstrap
import { Container, Row } from 'react-bootstrap';
//Importa os componentes
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import './Monte.css'



function MonteView(props ) {
    return (
        <Container maxWidth = 'lg' >
            <Row>
                <Header />
            </Row>
            <Row className='MonteContainer'>
                    <h1>TELA Monte Sua Pizza</h1>
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>      
    );
}
export default MonteView;