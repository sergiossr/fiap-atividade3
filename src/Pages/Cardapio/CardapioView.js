import React from 'react';
import '../../Utils/Common/Main.css';
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
        <Container maxWidth = 'xl' >
            <Row>
                <Header />
            </Row>
            <Container className='CardapioContainer'>
                <div className='item1'>
                    <CardsPizzaTradicional/>
                </div>
                <div className='item2'>
                    <CardsPizzaClassica/>
                </div>
                <div className='item3'> 
                    <CardsPizzaExclusiva/>
                </div>
                <div className='item4'> 
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