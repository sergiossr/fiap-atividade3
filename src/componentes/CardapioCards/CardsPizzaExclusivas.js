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

export default function CardsPizzaExclusiva () {
    return (
        <Container maxwidth="xl">
            <h1 className="titulo">EXCLUSIVAS</h1>
            <Stack direction="row" spacing={2}>
                <Card sx={{ width: 300}}>
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://static.phdvasia.com/br/menu/single/desktop_thumbnail_49f967fc-7d02-4087-adae-7731dac50b70.jpg"
                            alt="Pizza brasileira"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Brasileira
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        A hut mais vendida do brasil. Molho de tomate, queijo Hut, requeijão, presunto e azeitonas verdes
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
                            image="https://masalabox.com/wp-content/uploads/2022/04/istockphoto-842082336-612x612-1.jpg"
                            alt="pizza vegetariana"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Vegetariana
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Molho de tomate, queijo Hut, tomate, champignon, pimentão verde, cebola e azeitonas verdes
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
                            image="https://images.aws.nestle.recipes/resized/ec7790c3741418234970f17ade9e50f1_pizza-4-queijos-receitas-nestle_1200_600.jpg"
                            alt="pizza 4quiejos"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            4 Queijos
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Molho de tomate com queijo Hut, fatias de provolone, parmesão ralado e cream cheese.
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

