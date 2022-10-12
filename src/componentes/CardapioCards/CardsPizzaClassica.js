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

export default function CardsPizzaClassica () {
    return (
        <Container maxwidth="xl">
            <h1 className="titulo">CLASSICAS</h1>
            <Stack direction="row" spacing={2}>
                <Card sx={{ width: 300 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://www.sabornamesa.com.br/media/k2/items/cache/0b242dd5a6f3b60d9c07a5d96a2bc449_XL.jpg"
                            alt="Pizza napolitana"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Napolitana
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Parmesão, queijo Hut, rodelas de tomates, orégano e alho.
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
                            image="https://maluvisita.com/wp-content/uploads/2017/07/Pizza-Calabria.jpg"
                            alt="pizza calabria"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Calabria
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Fatias de calabresa com de cebola, queijo e tiras requeijão.
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
                            image="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-de-pepperoni-0.jpg"
                            alt="pizza pepperoni"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pepperoni
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Pepperoni servida com queijo cobertas por tiras de requeijão
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

