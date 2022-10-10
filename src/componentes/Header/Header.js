 import React from 'react';
 //Importa o CSS
 import './Header.css';
 //Importa os Componentes do BootStrap 
import Button from "@mui/material/Button";
 
 import { Row, Col, Container } from 'react-bootstrap';
 //Importa os Componentes do FontAwesome 
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

 //Importa a imagem que colocamos na pasta Assets que fica dentro da pasta src 
 
 const Header = () => {
     return (
        <Container className="header">
             <Row>
                <Col > 
                     <Button variant= "primary"> <h2>Home</h2> </Button> 
                     <Button variant= "primary"><h2>Cardapio</h2></Button> 
                     <Button variant= "primary"><h2>Monte Sua Pizza</h2></Button>
                     <Button variant= "primary"><h2>Promoções</h2></Button>
                     <Button variant= "primary">
                        <FontAwesomeIcon icon={faCartShopping} />
                     </Button>
                </Col>
            </Row>
         </Container>         
     )
 }
 export default Header;