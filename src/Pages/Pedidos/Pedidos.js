import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import './Pedidos.css'
import { useContext, useEffect } from 'react';
import { ClienteIDContext } from '../../Store/ClienteIDContext';
import CadastroAPI from "../../Services/APIs/CadastroAPI/CadastroAPI";
import APICardapio from '../../Services/APIs/CardapioAPI/CardapioAPI'
import PedidoAPI from '../../Services/APIs/PedidoAPI/PedidoAPI'
import UseAPI from '../../Services/APIs/Common/UseAPI';
import { Typography } from '@mui/material';

function Pedidos(props) {
    //const Cliente
    const context = useContext(ClienteIDContext);
    const getClienteAPI = UseAPI(CadastroAPI.getCliente)
    const cliente_ID = context.ID_Cliente;
    const [exibirCliente, setExibirCliente] = useState([]);
    //const Pizza
    const getPizzaAPI = UseAPI(APICardapio.getPizza);
    const [exibirPizza, setExibirPizza] = useState([]);
    const index = 7 //remover
    //const Pedido
    const novoPedidoAPI = UseAPI(PedidoAPI.postPedido);


    //Para recuperar o cadastro de cliente
    useEffect(() => {
        getClienteInfo();
    }, []);

    let clienteInfo = null;
    const getClienteInfo = () => {
        getClienteAPI
            .requestPromise(cliente_ID)
            .then((info) => {
                clienteInfo = (
                    <Container className='clienteInfoContainer'>
                        <Typography variant="h2" color="text.primary" className='i1'>{info.name}</Typography>
                        <Typography variant="h2" color="text.primary" className='i2'>{info.email}</Typography>
                        <Typography variant="h2" color="text.primary" className='i3'>{info.celular}</Typography>
                        <Typography variant="h2" color="text.primary" className='i4'>{info.rua}</Typography>
                        <Typography variant="h2" color="text.primary" className='i5'>{info.numero}</Typography>
                        <Typography variant="h2" color="text.primary" className='i6'>{info.bairro}</Typography>
                        <Typography variant="h2" color="text.primary" className='i7'>{info.cidade}</Typography>
                    </Container>
                )
                setExibirCliente(clienteInfo);
            })
            .catch((info) => {
                console.log(info);
            });
    }
    //Objeto JSX que contem os dados do Cliente
    let InfoCliente = <Container>{exibirCliente}</Container>

    //Recuperar o Pedido
    useEffect(() => {
        getPizzaPedido();
    }, []);

    let PizzaPedido = null;
    const getPizzaPedido = () => {
        getPizzaAPI
            .requestPromise(index)
            .then((pizza) => {
                PizzaPedido = (
                    <Container>
                        <Typography variant="h2" color="text.primary" >{pizza.name}</Typography>
                        <Typography variant="h2" color="text.primary" >{pizza.ingredients}</Typography>
                    </Container>
                )
                setExibirPizza(PizzaPedido);
            })
            .catch((pizza) => {
                console.log(pizza);
            });
    }
    let InfoPizza = <Container>{exibirPizza}</Container>

    const onClickButton = () => {
        let payload = {
            pizzasId: [index],
            novasPizzas:[
                {
                    nome: "",
                    ingredients:[""]
                }
            ],
            clienteId: cliente_ID
        };
        novoPedidoAPI.requestPromise(payload).then(connectSuccess)
    };

    const connectSuccess = (info) => {
        console.log(info);
    }

    return (
        <Container>
            <Row>
                <Header />
            </Row>
            <Container className='predidosContainer'>
                <h1 className='h1'>Dados do Cliente</h1>
                {InfoCliente}
                <h1 className='h1'>Pedidos</h1>
                {InfoPizza}
            </Container>
                <Button onClick={onClickButton}>
                    Fazer Pedido
                </Button>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}
export default Pedidos;