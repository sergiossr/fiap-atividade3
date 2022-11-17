import React, { useState } from 'react';

import './Monte.css'

import { Container, Row, Col } from 'react-bootstrap';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Typography } from '@mui/material';

import StickyBox from 'react-sticky-box';

import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import CartBox from '../../componentes/CartBox/CartBox';

import { useAtom } from 'jotai'
import { pizzaMontadaAtom } from '../../Atoms/pizzaMontadaAtom'

function Monte() {

    const [expanded, setExpanded] = React.useState(false);
    const [pizzasMontadasCarrinho, setpizzasMontadasCarrinho] = useAtom(pizzaMontadaAtom);

    const handleClickAccordion = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const ingredients = [];

    var [choiceMassa, setChoiceMassa] = useState('');
    ingredients.push(choiceMassa);

    var [choiceQueijo, setChoiceQueijo] = useState([]);
    const handleQueijoChange = (event) => {
        const index = choiceQueijo.indexOf(event.target.value);
        if (index === -1) {
            setChoiceQueijo([...choiceQueijo, event.target.value])
        } else {
            setChoiceQueijo(choiceQueijo.filter((choiceQueijo) => choiceQueijo !== event.target.value))
        }
    };
    ingredients.push(...choiceQueijo);

    var [choiceProteina, setChoiceProteina] = useState('');
    ingredients.push(choiceProteina);
    var [choiceTopping, setChoiceTopping] = useState([]);
    const handleToppingChange = (event) => {
        const index = choiceTopping.indexOf(event.target.value);
        if (index === -1) {
            setChoiceTopping([...choiceTopping, event.target.value])
        } else {
            setChoiceTopping(choiceTopping.filter((choiceTopping) => choiceTopping !== event.target.value))
        }
    };
    ingredients.push(...choiceTopping);

    const handleClickAdicionar = (e) => {

        e.preventDefault();
        if (choiceMassa.length === 0) {
            alert("selecione um tipo de massa!");
            return;
        } else if (choiceProteina.length === 0 && choiceQueijo.length === 0) {
            alert("selecione pelo menos um queijo ou proteína!");
            return;
        } else {
            var pizzaMontadaJSON = {
                "name": "Pizza Personalizada",
                "ingredients": ingredients.filter(e => e !== '')
            }
            setpizzasMontadasCarrinho((prevState) => [...prevState, pizzaMontadaJSON]);
            pizzaMontadaJSON = "";
            setChoiceMassa('');
            setChoiceProteina('');
            setChoiceQueijo([]);
            setChoiceTopping([]);
            setExpanded(false);
        }
    }

    return (
        <Container>
            <Typography component={'span'}>
                <Row>
                    <Header />
                </Row>
                <Row className='MonteContainer'>
                    <h1>Monte Sua Pizza!</h1>
                </Row>
                <Row className='MonteContainer' >
                    <Col className='MonteColunaIngredientes'>
                        <Row>Selecione os ingredientes!</Row>
                        <Row>
                            <Accordion expanded={expanded === "panel1"} onChange={handleClickAccordion("panel1")}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel1a-content'
                                    id='panel1a-header'>
                                    Selecione a massa
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl>
                                        <RadioGroup
                                            value={choiceMassa} onChange={e => setChoiceMassa(e.target.value ?? ' ')}>
                                            <FormControlLabel value='Padrão' control={<Radio />} label='Padrão' />
                                            <FormControlLabel value='Integral' control={<Radio />} label='Integral' />
                                            <FormControlLabel value='Grossa' control={<Radio />} label='Grossa' />
                                            <FormControlLabel value='Fina' control={<Radio />} label='Fina' />

                                        </RadioGroup>
                                    </FormControl>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === "panel2"} onChange={handleClickAccordion("panel2")}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel2a-content'
                                    id='panel2a-header'>
                                    Selecione o(s) queijo(s)
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox value='Prato' checked={choiceQueijo.includes('Prato')}
                                                onChange={handleQueijoChange} />} label='Prato' />
                                            <FormControlLabel control={<Checkbox value='Mussarela' checked={choiceQueijo.includes('Mussarela')}
                                                onChange={handleQueijoChange} />} label='Mussarela' />
                                            <FormControlLabel control={<Checkbox value='Gorgonzola' checked={choiceQueijo.includes('Gorgonzola')}
                                                onChange={handleQueijoChange} />} label='Gorgonzola' />
                                            <FormControlLabel control={<Checkbox value='Cheddar' checked={choiceQueijo.includes('Cheddar')}
                                                onChange={handleQueijoChange} />} label='Cheddar' />
                                        </FormGroup>
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === "panel3"} onChange={handleClickAccordion("panel3")}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel2a-content'
                                    id='panel2a-header'>
                                    Selecione a proteína
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl>
                                        <RadioGroup
                                            value={choiceProteina} onChange={e => setChoiceProteina(e.target.value ?? ' ')}>
                                            <FormControlLabel value='Frango' control={<Radio />} label='Frango' />
                                            <FormControlLabel value='Atum' control={<Radio />} label='Atum' />
                                            <FormControlLabel value='Pepperoni' control={<Radio />} label='Pepperoni' />
                                            <FormControlLabel value='Calabresa' control={<Radio />} label='Calabresa' />
                                        </RadioGroup>
                                    </FormControl>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === "panel4"} onChange={handleClickAccordion("panel4")}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel2a-content'
                                    id='panel2a-header'>
                                    Selecione o(s) topping(s)
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox value='Tomate' checked={choiceTopping.includes('Tomate')}
                                            onChange={handleToppingChange} />} label='Tomate' />
                                        <FormControlLabel control={<Checkbox value='Cebola' checked={choiceTopping.includes('Cebola')}
                                            onChange={handleToppingChange} />} label='Cebola' />
                                        <FormControlLabel control={<Checkbox value='Pimentão' checked={choiceTopping.includes('Pimentão')}
                                            onChange={handleToppingChange} />} label='Pimentão' />
                                        <FormControlLabel control={<Checkbox value='Azeitona' checked={choiceTopping.includes('Azeitona')}
                                            onChange={handleToppingChange} />} label='Azeitona' />
                                        <FormControlLabel control={<Checkbox value='Champignon' checked={choiceTopping.includes('Champignon')}
                                            onChange={handleToppingChange} />} label='Champignon' />
                                        <FormControlLabel control={<Checkbox value='Catupiry' checked={choiceTopping.includes('Catupiry')}
                                            onChange={handleToppingChange} />} label='Catupiry' />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                        </Row>

                    </Col>

                    <Col className='MonteColunaResumo'>

                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <Card className='CardResumo'>
                                <CardContent>
                                    Ingredientes selecionados:
                                    <li>Massa: {choiceMassa}</li>
                                    <li>Queijo: {choiceQueijo.join(', ')} </li>
                                    <li>Proteína: {choiceProteina}</li>
                                    <li>Toppings: {choiceTopping.join(', ')}</li>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" variant='secondary' className='FazerPedidoBTN' onClick={handleClickAdicionar}>Adicionar</Button>
                                </CardActions>
                            </Card>

                        </StickyBox>

                    </Col>

                </Row>
                <Row>
                    <CartBox />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Typography>
        </Container>
    );
}

export default Monte;