import React from 'react';
//Importa os componentes do Bootstrap
import { Container, Row } from 'react-bootstrap';
//Importa os componentes
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import './Cardapio.css'
import CardsPizzaTradicional from '../../componentes/CardapioCards/CardsPizzaTradicional';
import CardsPizzaClassica from '../../componentes/CardapioCards/CardsPizzaClassica';
import CardsPizzaExclusiva from '../../componentes/CardapioCards/CardsPizzaExclusivas';
import CartBox from '../../componentes/CartBox/CartBox';

const CardapioView = () => {
    return (
        <Container  >
            <Row>
                <Header />
            </Row>
            <Container className='CardapioContainer'>
                <div >
                    <CardsPizzaTradicional/>
                </div>
                <div >
                    <CardsPizzaClassica/>
                </div>
                <div > 
                    <CardsPizzaExclusiva/>
                </div>
                <div > 
                    <CartBox/>
                </div>
            </Container>  
            <Row>
                <Footer/>
            </Row>
        </Container>  
    );
};

export default CardapioView;