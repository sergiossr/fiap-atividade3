import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import './Cardapio.css'
import CardapioView from './CardapioView'


class CardapioController extends React.Component{
    constructor(){
        super();
        
    }

    render(){
        return(
                <CardapioView/>
        )
    }
}

export default CardapioController;