import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from "@mui/material/Button";
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
import { Alert, TextField } from "@mui/material";

function Pedidos(props) {
    //const Cliente
    const context = useContext(ClienteIDContext);
    const getClienteAPI = UseAPI(CadastroAPI.getCliente)
    const cliente_ID = context.ID_Cliente;
    const [exibirCliente, setExibirCliente] = useState([]);
    const [exibir, setExibir] = useState([]);
    //const Pizza
    const getPizzaAPI = UseAPI(APICardapio.getPizza);
    const [exibirPizza, setExibirPizza] = useState([]);
    const [exibir2, setExibir2] = useState([]);
    const index = 7 //remover
    //const Pedido
    const novoPedidoAPI = UseAPI(PedidoAPI.postPedido);
    const [connectCode, setConnectCode] = useState(0);

    //Para recuperar o cadastro de cliente
    useEffect(() => {
        getClienteInfo();
        getPizzaPedido();
        setExibir(0);
        setExibir2(0);
    }, []);

    let clienteInfo = null;
    const getClienteInfo = () => {
        getClienteAPI
            .requestPromise(cliente_ID)
            .then((info) => {
                clienteInfo = (
                    <Container className='clienteInfoContainer'>
                        <TextField
                            className='i1'
                            size="small"
                            label="Nome"
                            variant='standard'
                            defaultValue={info.name}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            className='i2'
                            size="small"
                            label="E-mail"
                            variant='standard'
                            defaultValue={info.email}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            className='i3'
                            size="small"
                            label="Cel"
                            variant='standard'
                            defaultValue={info.celular}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            className='i4'
                            size="small"
                            label="Rua"
                            variant='standard'
                            defaultValue={info.rua}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            className='i5'
                            size="small"
                            label="Numero"
                            variant='standard'
                            defaultValue={info.numero}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            className='i6'
                            size="small"
                            label="Bairro"
                            variant='standard'
                            defaultValue={info.bairro}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            className='i7'
                            size="small"
                            label="Cidade"
                            variant='standard'
                            defaultValue={info.cidade}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Container>
                )
                setExibirCliente(clienteInfo);
                setExibir(1);
            })
            .catch((info) => {
                console.log(info);
            });
    }
    //Objeto JSX que contem os dados do Cliente
    let InfoCliente = null;
    if (exibir === 1) {
        InfoCliente = <Container>{exibirCliente}</Container>
    } else {
        InfoCliente = <Container >
            <h3 className='h3'>Cadastre um cliente antes de fazer o pedido</h3>
        </Container>
    }


    
    

    //Recuperar o Pedido
    let PizzaPedido = null;
    const getPizzaPedido = () => {
        getPizzaAPI
            .requestPromise()
            .then((pizza) => {

                let montar = [];
                let ingredientes = JSON.stringify(pizza.ingredients);
                console.log("ingrediente:",ingredientes);   
                PizzaPedido = (
                    <Container className='clienteInfoContainer'>
                        <Typography className='p1' variant="h2" color="text.primary" >Pizza:</Typography>
                        <Typography className='p2' variant="body1" color="text.primary" >{pizza.name}</Typography>
                        <Typography className='p3' variant="h2" color="text.primary" >Ingredientes:</Typography>
                        <Typography className='p4' variant="body1" color="text.primary" >{ingredientes}</Typography>
                    </Container>
                )
                setExibirPizza(PizzaPedido);
                setExibir2(1);
            })
            .catch((pizza) => {
                console.log(pizza);
            });
    }
    console.log("exibirPizzaq",exibirPizza);
    let InfoPizza = null;
    if (exibir2 === 1) {
        InfoPizza = <Container>{exibirPizza}</Container>
    } else {
        InfoPizza = <Container className='clienteInfoContainer'>
            <h3>Selecione uma pizza antes de fazer o pedido</h3>
        </Container>
    }
 
    const onClickButton = () => {
        
        let payload = {
            pizzasId: [index],
            novasPizzas: [
                {
                    nome: "",
                    ingredients: [""]
                }
            ],
            clienteId: cliente_ID
        };

        setConnectCode(0);
        novoPedidoAPI
        .requestPromise(payload)
        .then(connectSuccess)
        .catch(connectError);
    };

    const connectSuccess = (info) => {
        console.log("dentro de sucesso");
        setConnectCode(1);
    };

    const connectError = (info) => {
        console.log("Retornando Info Erro");
        console.log(info);
        setConnectCode(-1);
      };

      let successConnectText = "Pedido realizado!";
      let failedConnectText = "Operação não realizada!";
      let alerta = null
      if (connectCode === 1) {
        alerta = (
          <Alert className="alerta" severity="success">{successConnectText}</Alert>
        )
      } else {
        if (connectCode !== 0){
          alerta = (
            <Alert className="alerta" severity="error">{failedConnectText}</Alert>
          )
        }
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
                <div className="button" onClick={onClickButton}>
                    <Button variant='third' type="submit" >
                        Fazer Pedido
                    </Button>
                </div>
            </Container>
            {alerta}
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}
export default Pedidos;