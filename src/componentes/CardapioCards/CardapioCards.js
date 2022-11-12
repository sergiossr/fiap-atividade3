import './CardapioCards.css'
import { Container, Row } from 'react-bootstrap';
import CardsPizzaTradicional from './CardsPizzaTradicional'
import CardsPizzaClassica from './CardsPizzaClassica'
import CardsPizzaExclusiva from './CardsPizzaExclusivas'
import CartBox from './../CartBox/CartBox'


const CardapioCards = () =>{
    

    return(
        <Container className='CardapioContainer'>
            <Row className='card1'>
                <CardsPizzaTradicional/>
            </Row >
            <Row className='card2'>
                <CardsPizzaClassica/>
            </Row>
            <Row className='card3'>
                <CardsPizzaExclusiva/>
            </Row>
            <Row className='card4'>
                <CartBox/>
            </Row>
        </Container>
    )
} 
export default CardapioCards