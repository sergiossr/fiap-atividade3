import React from 'react';


//Importa os componentes do Bootstrap
import { Container, Row } from 'react-bootstrap';
//Importa os componentes
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import ClientForm from '../../componentes/ClientForm/ClientForm';
import Pedidos from '../../componentes/Pedidos/Pedidos';


//import Footer from '../components/footer/Footer';
function ClienteCadastroView(props ) {
    return (
        <Container maxWidth = 'lg'>
            <Row>
                <Header />
            </Row>
            <Row>
                    <Pedidos/>
                    <ClientForm/>
            </Row>
            <Row>
                <Footer/>
            </Row>
        </Container>      
    );
}
export default ClienteCadastroView;