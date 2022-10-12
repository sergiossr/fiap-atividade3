import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import './Cards.css'


export default function CardsPizzaTradicional () {
    return (
        <Container maxwidth="xl">
            <h1 className="titulo">TRADICIONAIS</h1>
            <Stack direction="row" spacing={2}>
                <Card sx={{ width: 300 }}>
                        <CardMedia
                           component="img"
                           height="180"
                           image="https://t2.rg.ltmcdn.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg"
                           alt="Pizza calabresa"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Calabresa
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Calabresa acompanhadas de cebola, azeitonas verdes e queijo
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='secondary' className='AdicionarBTN'>Adicionar</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width: 300 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://pizzariadesucesso.com/wp-content/uploads/2018/11/images-4-2.jpeg"
                            alt="Pizza marguerita"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Marguerita
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Queijo coberto com tomates fatiados e um toque de manjericão
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='secondary' className='AdicionarBTN'>Adicionar</Button>
                    </CardActions>
                </Card>
                <Card sx={{ width: 300 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://simoesfilhoonline.com.br/wp-content/uploads/2021/09/pizza.jpg"
                            alt="pizza mussarela"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Mussarela
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Queijo Hut servido sobre molho de tomate especial pizza hut
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='secondary' className='AdicionarBTN'>Adicionar</Button>
                    </CardActions>
                </Card>
            </Stack>
        </Container>
    );
};

