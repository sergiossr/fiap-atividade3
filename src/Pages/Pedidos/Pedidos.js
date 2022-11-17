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
import { useAtom } from 'jotai'
import { pizzaCardapioAtom } from '../../Atoms/pizzaCardapioAtom'
import { pizzaMontadaAtom } from '../../Atoms/pizzaMontadaAtom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Pedidos(props) {
    //const Cliente
    const context = useContext(ClienteIDContext);
    const getClienteAPI = UseAPI(CadastroAPI.getCliente)
    const cliente_ID = context.ID_Cliente;
    const [exibirCliente, setExibirCliente] = useState([]);
    const [exibir, setExibir] = useState([]);
   
    //const [exibirPizza, setExibirPizza] = useState([]);
    const [exibir2, setExibir2] = useState([]);
    //const index = 7 //remover
    //const Pedido
    const novoPedidoAPI = UseAPI(PedidoAPI.postPedido);
    const [connectCode, setConnectCode] = useState(0);
    const [enviar, setEnviar] = useState(0);

    const [pizzasCardapioCarrinho, setpizzasCardapioCarrinho] = useAtom(pizzaCardapioAtom);
    const [pizzasMontadasCarrinho, setpizzasMontadasCarrinho] = useAtom(pizzaMontadaAtom);

    //mapear o ID da pizza da tela de cardapios
    let PizzaCardapio = null;
    let PizzaID = [];
    PizzaCardapio = pizzasCardapioCarrinho.map((pizzaID) => (
        PizzaID.push(pizzaID.id)
    ))

    //mapear os arrays das pizzas montadas
    let PizzaMontada = [];
    PizzaMontada = pizzasMontadasCarrinho

    //Para recuperar o cadastro de cliente
    useEffect(() => {
        getClienteInfo();
        setEnviar(0);
        setExibir(0);
        setExibir2(0);
    }, []);

    useEffect(() => {
        if (PizzaID.length > 0 | PizzaMontada.length > 0) {
            setEnviar(1);
        }
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
                //console.log(info);
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

    const onClickButton = () => {
        if (enviar === 0) {
            setConnectCode(-1);
        } else {

            let payload = {
                pizzasId: PizzaID,
                novasPizzas: PizzaMontada,
                clienteId: cliente_ID
            };

            setConnectCode(0);
            novoPedidoAPI
                .requestPromise(payload)
                .then(connectSuccess)
                .catch(connectError);
        };
    }

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
        if (connectCode !== 0) {
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
                {
                    pizzasCardapioCarrinho.length === 0 && pizzasMontadasCarrinho.length === 0 ?
                        <div>
                            <Container className='InsideContainer'>
                                <div component={Paper}>
                                    <Typography sx={{ textAlign: 'center' }}>
                                        Realize um pedido antes de finalizar
                                    </Typography>
                                </div>
                            </Container>
                        </div>
                        : <></>
                }
                {
                    pizzasCardapioCarrinho.length > 0 ?
                        <div>
                            <div>
                                <h2 className="titulo">Pizzas Cardápio</h2>
                            </div>

                            <Container className='InsideContainer'>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table" >
                                        <TableHead>
                                            <TableRow align="center">
                                                <TableCell sx={{ minWidth: 50 }} align="center" ></TableCell>
                                                <TableCell sx={{ minWidth: 150 }} align="center" >Pizza</TableCell>
                                                <TableCell sx={{ minWidth: 350 }} align="center">Ingredientes</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {pizzasCardapioCarrinho.map((row, index) => (
                                                <TableRow
                                                    key={[index]}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell component="th" scope="row" align="center">{index + 1}</TableCell>
                                                    <TableCell align="center">{row.name}</TableCell>
                                                    <TableCell align="center">{row.ingredients.join(', ')}</TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Container>
                        </div>
                        : <></>
                }
                {
                    pizzasMontadasCarrinho.length > 0 ?
                        <div>
                            <div>
                                <h2 className="titulo">Pizzas Montadas</h2>
                            </div>

                            <Container className='InsideContainer'>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table" >
                                        <TableHead>
                                            <TableRow align="center">
                                                <TableCell sx={{ minWidth: 50 }} align="center" ></TableCell>
                                                <TableCell sx={{ minWidth: 150 }} align="center" >Pizza</TableCell>
                                                <TableCell sx={{ minWidth: 350 }} align="center">Ingredientes</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {pizzasMontadasCarrinho.map((row, index) => (
                                                <TableRow
                                                    key={[index]}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell component="th" scope="row" align="center">{index + 1}</TableCell>
                                                    <TableCell align="center">{row.name}</TableCell>
                                                    <TableCell align="center">{row.ingredients.join(', ')}</TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Container>
                        </div>
                        :
                        <></>
                }


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