import { Container} from 'react-bootstrap';
import './Pedidos.css'

function Pedidos(){
    return(
        <Container className='predidosContainer'>
            <h1 className='h1'>Revise seu pedido</h1>
            <Container className='detalheContainer'>
                <p>pedido1</p>
                <p>pedido2</p>
            </Container>

        </Container>
    )
}
export default Pedidos