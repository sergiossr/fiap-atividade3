import Button from "@mui/material/Button";
import Input from "../../Utils/Common/Input";
import './ClientForm.css'
import { Container} from 'react-bootstrap';


function ClientForm(){
    return(
        <Container className="clientContainer">
            <h1 className="h1">Dados do Cliente</h1>
            <div className="clientForm">
                <div className="item1">   
                    <Input 
                        type="text"
                        text="Nome"
                        name="name"
                        placeholder="Nome completo"
                    />
                </div>
                <div className="item2">
                    <Input 
                        type="text"
                        text="E-mail"
                        name="Email"
                        placeholder="Insira seu email"
                    />
                </div>
                <div className="item3">    
                    <Input 
                        type="text"
                        text="Cel"
                        name="Cel"
                        placeholder="(XX)XXXX-XXXX"
                     />   
                </div>
                <div className="item4">
                    <Input 
                        type="text"
                        text="Rua"
                        name="Rua"
                        placeholder="Insira a Rua"
                    />
                </div>
                <div className="item5">
                    <Input 
                        type="text"
                        text="Numero"
                        name="Numero"
                        placeholder="N."
                    />
                </div>
                <div className="item6">
                    <Input 
                        type="text"
                        text="Bairro"
                        name="Bairro"
                        placeholder="Insira o Bairro"
                    />
                </div>
                <div className="item7">
                    <Input 
                        type="text"
                        text="Cidade"
                        name="Cidade"
                        placeholder="Insira a cidade"
                    />
                </div>
            </div>
            <div className="button">
                <Button variant="secondary" className="button">
                    <h1>Fazer Pedido</h1>
                </Button>
            </div>        
        </Container>    
    )
}

export default ClientForm