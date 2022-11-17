import React from 'react';
import './Header.css';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
   return (
      <Container className="header">
         <Row>
            <Col >
               <Link to="/">
                  <Button variant="primary"><h2>Cardapio</h2></Button>
               </Link>
               <Link to='/monte'>
                  <Button variant="primary"><h2>Monte Sua Pizza</h2></Button>
               </Link>
               <Link to='/cadastro'>
                  <Button variant="primary"><h2>Cadastro</h2></Button>
               </Link>
               <Link to="/pedidos">
                  <Button variant="primary">
                     <FontAwesomeIcon icon={faCartShopping} />
                  </Button>
               </Link>
            </Col>
         </Row>
      </Container>
   )
}
export default Header;