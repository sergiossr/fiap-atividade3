import React, { useEffect, useState, useRef } from 'react';

import './Cardapio.css'

import { Container, Row } from 'react-bootstrap';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CircularProgress } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import promiseCardapio from '../../Services/APIs/CardapioAPI/CardapioAPI';

import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import CartBox from '../../componentes/CartBox/CartBox';

import { useAtom } from 'jotai'
import { pizzaCardapioAtom } from '../../Atoms/pizzaCardapioAtom'


function Cardapio() {

    const [data, setLista] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pizzasCardapioCarrinho, setpizzasCardapioCarrinho] = useAtom(pizzaCardapioAtom);

    const cartRef = useRef(null);

    async function getAllData() {

        await promiseCardapio.getCardapio()
            .then((response) => {
                setLista(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                alert('nenhum registro encontrado! tente novamente mais tarde')
                setLoading(false);
            });

    };

    useEffect(() => {
        getAllData();
    }, []);

    var pizzaListClassicas = []
    var pizzaListTradicionais = []
    var pizzaListExclusivas = []
    let link = '';
    Object.keys(data).forEach((index) => {
        let pizza = data[index]
        if (pizza.name === 'Calabresa' || pizza.name === 'Marguerita' || pizza.name === 'Mussarela') {
            switch (pizza.name) {
                case 'Calabresa':
                    link = 'https://t2.rg.ltmcdn.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg'
                    break;
                case 'Marguerita':
                    link = 'https://pizzariadesucesso.com/wp-content/uploads/2018/11/images-4-2.jpeg'
                    break;
                case 'Mussarela':
                    link = 'https://simoesfilhoonline.com.br/wp-content/uploads/2021/09/pizza.jpg'
                    break;
                default: link = 'https://img.freepik.com/vetores-gratis/fatia-de-pizza-bonito-derretido-com-os-polegares-para-cima-dos-desenhos-animados-ilustracao-de-icone-de-vetor-icone-de-objeto-de-comida-isolado_138676-5546.jpg?w=740&t=st=1668586743~exp=1668587343~hmac=cba1cfd3729e47765e61db96ac3e3502b95e8cfb321d311806e9dc5a3e502ca5'
            }
            pizzaListTradicionais.push(
                <Card sx={{ width: 300 }} key={[data.id, index]}>
                    <CardMedia
                        component='img'
                        height='180'
                        image={link}
                        alt={`Pizza ${pizza.name}`} />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {pizza.name}
                        </Typography>
                        <Typography variant='body2' color='text.secondary' sx={{ height: 20 }} >
                            Ingredientes: {pizza.ingredients.join(', ')}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' variant='secondary' className='AdicionarBTN' onClick={() => { handleClickAdicionar(pizza) }}>
                            Adicionar</Button>
                    </CardActions>
                </Card>
            )
        } else if (pizza.name === 'Napolitana' || pizza.name === 'Calabria' || pizza.name === 'Pepperoni') {
            switch (pizza.name) {
                case 'Napolitana':
                    link = 'https://www.sabornamesa.com.br/media/k2/items/cache/0b242dd5a6f3b60d9c07a5d96a2bc449_XL.jpg'
                    break;
                case 'Calabria':
                    link = 'https://37260-94855-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/07/hi-mundim-Pizza-Calabria.jpg'
                    break;
                case 'Pepperoni':
                    link = 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-pepperoni-0.jpg'
                    break;
                default: link = 'https://img.freepik.com/vetores-gratis/fatia-de-pizza-bonito-derretido-com-os-polegares-para-cima-dos-desenhos-animados-ilustracao-de-icone-de-vetor-icone-de-objeto-de-comida-isolado_138676-5546.jpg?w=740&t=st=1668586743~exp=1668587343~hmac=cba1cfd3729e47765e61db96ac3e3502b95e8cfb321d311806e9dc5a3e502ca5'
            }
            pizzaListClassicas.push(
                <Card sx={{ width: 300 }} key={[data.id, index]}>
                    <CardMedia
                        component='img'
                        height='180'
                        image={link}
                        alt={`Pizza ${pizza.name}`} />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {pizza.name}
                        </Typography>
                        <Typography variant='body2' color='text.secondary' sx={{ height: 20 }} >
                            Ingredientes: {pizza.ingredients.join(', ')}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' variant='secondary' className='AdicionarBTN' onClick={() => { handleClickAdicionar(pizza) }}>
                            Adicionar</Button>
                    </CardActions>
                </Card>
            )
        } else if (pizza.name === 'Brasileira' || pizza.name === 'Vegetariana' || pizza.name === '4 Queijos') {
            switch (pizza.name) {
                case 'Brasileira':
                    link = 'https://static.phdvasia.com/br/menu/single/desktop_thumbnail_49f967fc-7d02-4087-adae-7731dac50b70.jpg'
                    break;
                case 'Vegetariana':
                    link = 'https://masalabox.com/wp-content/uploads/2022/04/istockphoto-842082336-612x612-1.jpg'
                    break;
                case '4 Queijos':
                    link = 'https://a-static.mlcdn.com.br/800x560/pizza-quatro-queijos-saborosa-e-caprichada/restauranteepizzariasensacao/4bb3c9cabdbc11eba9914201ac18500e/147dae5246b08a5fce86b974ae2fb6df.jpeg'
                    break;
                default: link = 'https://img.freepik.com/vetores-gratis/fatia-de-pizza-bonito-derretido-com-os-polegares-para-cima-dos-desenhos-animados-ilustracao-de-icone-de-vetor-icone-de-objeto-de-comida-isolado_138676-5546.jpg?w=740&t=st=1668586743~exp=1668587343~hmac=cba1cfd3729e47765e61db96ac3e3502b95e8cfb321d311806e9dc5a3e502ca5'
            }

            pizzaListExclusivas.push(
                <Card sx={{ width: 300 }} key={[data.id, index]}>
                    <CardMedia
                        component='img'
                        height='180'
                        image={link}
                        alt={`Pizza ${pizza.name}`} />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {pizza.name}
                        </Typography>
                        <Typography variant='body2' color='text.secondary' sx={{ height: 20 }} >
                            Ingredientes: {pizza.ingredients.join(', ')}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' variant='secondary' className='AdicionarBTN' onClick={() => { handleClickAdicionar(pizza) }}>
                            Adicionar</Button>
                    </CardActions>
                </Card>
            )

        }

    })

    const handleClickAdicionar = (pizza) => {
        if (pizzasCardapioCarrinho.length > 0) {
            setpizzasCardapioCarrinho((oldArray) => [...oldArray, pizza]);
        } else {
            setpizzasCardapioCarrinho(() => [pizza])
        }
        cartRef.current.scrollIntoView({ behavior: 'smooth' })

    }

    const renderCondicional = (listaPizzas) => {
        if (listaPizzas.length === 0 && !loading) {
            return <div>
                <Typography> Parece que já comeram todas as pizzas dessa categoria :'( </Typography>
                <Typography> Mas em breve teremos mais opções para você! </Typography>
            </div>
        } else if (loading) {
            return <div className='loadingCircle'>
                <CircularProgress />
            </div>
        }
    }

    return (

        <Container>
            <Row>
                <Header />
            </Row>
            <Row>
                <Container className='CardapioContainer'>
                    <div>
                        <Container maxwidth='xl' >
                            <h1 className='titulo'>TRADICIONAIS</h1>
                            <Stack direction='row' spacing={2}>
                                {pizzaListTradicionais}
                            </Stack>
                        </Container>
                        {renderCondicional(pizzaListTradicionais)}
                    </div>
                    <div>
                        <Container maxwidth='xl' >
                            <h1 className='titulo'>CLÁSSICAS</h1>
                            <Stack direction='row' spacing={2}>
                                {pizzaListClassicas}
                            </Stack>
                        </Container>
                        {renderCondicional(pizzaListClassicas)}
                    </div>
                    <div>
                        <Container maxwidth='xl' >
                            <h1 className='titulo'>EXCLUSIVAS</h1>
                            <Stack direction='row' spacing={2}>
                                {pizzaListExclusivas}
                            </Stack>
                        </Container>
                        {renderCondicional(pizzaListExclusivas)}
                    </div>
                </Container>
            </Row>

            <Row>
                <div ref={cartRef}>
                    <CartBox />
                </div>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    );
}

export default Cardapio;