import React from 'react';

import './CartBox.css';

import { Link } from 'react-router-dom';

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useAtom } from 'jotai'
import { pizzaCardapioAtom } from '../../Atoms/pizzaCardapioAtom'
import { pizzaMontadaAtom } from '../../Atoms/pizzaMontadaAtom'


const CartBox = () => {

    //const [pizzasCarrinho, setpizzasCarrinho] = useAtom(pizzaCardapioAtom);
    const [pizzasCardapioCarrinho, setpizzasCardapioCarrinho] = useAtom(pizzaCardapioAtom);
    const [pizzasMontadasCarrinho, setpizzasMontadasCarrinho] = useAtom(pizzaMontadaAtom);


    const removePizzaCardapioCart = (id) => {
        var array = [...pizzasCardapioCarrinho];
        if (id !== -1) {
            array.splice(id, 1);
            setpizzasCardapioCarrinho(array);
        }
    };

    const removePizzaMontadaCart = (id) => {
        var array = [...pizzasMontadasCarrinho];
        if (id !== -1) {
            array.splice(id, 1);
            pizzasMontadasCarrinho.splice(id, 1);
            setpizzasMontadasCarrinho(() => array);
        }
    };

    return (
        <>

            <Container maxwidth="xl" className='CartContainer'>
                <div>
                    <h1 className="titulo">Seu Carrinho</h1>
                </div>
                {
                    pizzasCardapioCarrinho.length === 0 && pizzasMontadasCarrinho.length === 0 ?
                        <div>
                            <Container className='InsideContainer'>
                                <div component={Paper}>
                                    <Typography sx={{ textAlign: 'center' }}>
                                        Seu carrinho está vazio :[
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
                                                <TableCell sx={{ minWidth: 50 }} align="center">Remover</TableCell>
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
                                                    <TableCell align="center">
                                                        <Button onClick={() => removePizzaCardapioCart(index)}>
                                                            <FontAwesomeIcon color="black" icon={faTrash} />
                                                        </Button>
                                                    </TableCell>
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
                                                <TableCell sx={{ minWidth: 50 }} align="center">Remover</TableCell>
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
                                                    <TableCell align="center">
                                                        <Button onClick={() => removePizzaMontadaCart(index)}>
                                                            <FontAwesomeIcon color="black" icon={faTrash} />
                                                        </Button>
                                                    </TableCell>
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
                {
                    pizzasCardapioCarrinho.length > 0 || pizzasMontadasCarrinho.length > 0 ?




                        <div className='FazerPedidoBTN'>
                            <Link to='/cadastro'>
                                <Button variant='third'>Fazer Pedido</Button>
                            </Link>
                        </div>
                        :
                        <></>
                }
            </Container>
        </>
    );
};

export default CartBox;