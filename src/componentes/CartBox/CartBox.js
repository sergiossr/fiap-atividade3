import React from 'react';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import './CartBox.css'

const CartBox = () => {
    return (
        <Container maxwidth="xl" className='CartContainer'>
            <div>
                <h1 className="titulo">Seu Carrinho</h1>
            </div>
            <Container className='InsideContainer'>
            </Container>
            <div className='FazerPedidoBTN'>
                <Button variant='third'>Confirmar</Button>
            </div>
        </Container>
    );
};

export default CartBox;