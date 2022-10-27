import Button from "@mui/material/Button";
import Input from "../../Utils/Common/Input";
import './ClientForm.css'
import { Container} from 'react-bootstrap';
import * as Yup from "yup";
import { useState, useEffect } from "react";
import UseAPI from '../../Services/APIs/Common/UseAPI';
import CadastroAPI from "../../Services/APIs/CadastroAPI/CadastroAPI"
import { Formik, Form} from "formik";


function ClientForm(){

    const getClienteAPI = UseAPI(CadastroAPI.getCliente)
  
  useEffect(() => {
    
    getClienteAPI
      .requestPromise()
      .then((info) => {
        console.log(info);
      })
      .catch((info) => {
        console.log(info);
      });
  }, [])

    const NovoCadastroAPI = UseAPI(CadastroAPI.postCliente);
    const [connectMessage, setConnectMessage] = useState("");
    const [connectCode, setConnectCode] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    

 

  const onClickCadastro = (values) => {
    let infoSend = {
      name: values.name,
      email: values.email,
      cel: values.cel,
      rua: values.rua,
      numero: values.numero,
      bairro: values.bairro,
      cidade: values.cidade,
    };
    console.log('You clicked submit.');
    setConnectMessage("");
    setIsLoading(true);
    NovoCadastroAPI
      .requestPromise(infoSend)
      .then((info) => {
        setIsLoading(false);
        console.log(info);
        setConnectCode(-1);
        setConnectMessage("Logado com sucesso");
      })
      .catch((error) => {
        setIsLoading(false);
        setConnectCode(-1);
        console.log(error.data);
        if (error.status === 401) {
          setConnectMessage(error.data.message);
        } else {
          setConnectMessage("O servidor retornou um erro= " + error.status);
        }
      });
  };
  let infoMessage = null;
  let info = (
    <div >
      <Button variant="primary" type="submit" >
        SALVAR
      </Button>
    </div>
  );

    return(
        <Container className="clientContainer">
            <h1 className="h1">Dados do Cliente</h1>
            <Formik
                initialValues={{
                name: "",
                email: "",
                cel: "",
                rua: "",
                numero: "",
                bairro: "",
                cidade: "",
                }}
               
                onSubmit={onClickCadastro}
            >

            
            {(formik) => {
              const { errors, setFieldValue } = formik;
              return(
                <Form>
                    
                    <div className="clientForm">
                        <div className="item1">   
                            <Input 
                                type="text"
                                text="Nome"
                                name="name"
                                placeholder="Nome completo"
                                onChange={(e) => setFieldValue("name", e.target.value)}
                            />
                        </div>
                        <div className="item2">
                            <Input 
                                type="email"
                                text="E-mail"
                                name="email"
                                placeholder="Insira seu email"
                                onChange={(e) => setFieldValue("email", e.target.value)} 
                            />
                        </div>
                        <div className="item3">    
                            <Input 
                                type="text"
                                text="Cel"
                                name="cel"
                                placeholder="(XX)XXXX-XXXX"
                                onChange={(e) => setFieldValue("cel", e.target.value)}
                            />   
                        </div>
                        <div className="item4">
                            <Input 
                                type="text"
                                text="Rua"
                                name="rua"
                                placeholder="Insira a Rua"
                                onChange={(e) => setFieldValue("rua", e.target.value)}
                            />
                        </div>
                        <div className="item5">
                            <Input 
                                type="text"
                                text="Numero"
                                name="numero"
                                placeholder="N."
                                onChange={(e) => setFieldValue("numero", e.target.value)}
                            />
                        </div>
                        <div className="item6">
                            <Input 
                                type="text"
                                text="Bairro"
                                name="bairro"
                                placeholder="Insira o Bairro"
                                onChange={(e) => setFieldValue("bairro", e.target.value)}
                            />
                        </div>
                        <div className="item7">
                            <Input 
                                type="text"
                                text="Cidade"
                                name="cidade"
                                placeholder="Insira a cidade"
                                onChange={(e) => setFieldValue("cidade", e.target.value)}
                            />
                        </div>
                        {infoMessage}
                        {info}
                    </div>
                </Form>
              );
            }}
            </Formik>
                   
        </Container>    
        )
    }

export default ClientForm