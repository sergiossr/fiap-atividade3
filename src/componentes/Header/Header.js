 import React from 'react';
 //Importa o CSS
 import './Header.css';
 //Importa os Componentes do BootStrap 
import Button from "@mui/material/Button";
import { Link} from 'react-router-dom';
 
 import { Row, Col, Container } from 'react-bootstrap';
 //Importa os Componentes do FontAwesome 
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
 


 const Header = () => {
     return (
        <Container className="header">
             <Row>
                <Col >
                        <Link to="/">
                           <Button variant= "primary"><h2>Home</h2></Button> 
                        </Link>
                        <Link to="/cardapio">
                           <Button variant= "primary"><h2>Cardapio</h2></Button> 
                        </Link>
                        <Link to = '/monte'>
                           <Button variant= "primary"><h2>Monte Sua Pizza</h2></Button>
                        </Link>
                        <Link to = '/promo'>
                           <Button variant= "primary"><h2>Promoções</h2></Button>
                        </Link>
                        <Link to ="/pedidos">
                           <Button variant= "primary">
                              <FontAwesomeIcon icon={faCartShopping} />
                           </Button>
                        </Link>
                </Col>
            </Row>
         </Container>         
     )
 }
 export default Header;