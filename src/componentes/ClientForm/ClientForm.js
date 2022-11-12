import Button from "@mui/material/Button";
import './ClientForm.css'
import { Container} from 'react-bootstrap';
import * as Yup from "yup";
import { useState } from "react";
import UseAPI from '../../Services/APIs/Common/UseAPI';
import CadastroAPI from "../../Services/APIs/CadastroAPI/CadastroAPI"
import { Formik, Form, ErrorMessage} from "formik";
import { TextField } from "@mui/material";
import { useContext,useEffect } from 'react';
import { ClienteIDContext } from '../../Store/ClienteIDContext';


function ClientForm(){

    const addressSchema  = Yup.object().shape({
    email: Yup.string().email("*Campo invalido").required("*Campo obrigatorio"),
    name: Yup.string().required("*Campo obrigatorio"),
    numero: Yup.number().required("*Campo obrigatorio").typeError("*Campo invalido"),
    rua:Yup.string().required("*Campo obrigatorio"),
    celular: Yup.number().required("*Campo obrigatorio").typeError("*Campo invalido"),
    bairro:Yup.string().required("*Campo obrigatorio"),
    cidade: Yup.string().required("*Campo obrigatorio"),
    });

    const NovoCadastroAPI = UseAPI(CadastroAPI.postCliente);
    const [isLoading, setIsLoading] = useState(false);
    const [connectCode, setConnectCode] = useState(0);
    const context = useContext(ClienteIDContext);
    const getClienteAPI = UseAPI(CadastroAPI.getCliente);
  
   const onClickCadastro = (values) => {
    console.log(values)
    let payload = {
      name: values.name,
      email: values.email,
      celular: values.celular,
      rua: values.rua,
      numero: values.numero,
      bairro: values.bairro,
      cidade: values.cidade,
    };

    setConnectCode(0);
    setIsLoading(true)
    NovoCadastroAPI
    .requestPromise(payload)
    .then(connectSuccess)
  };
    
    const connectSuccess = (info) => {
      console.log("Retornando Info");
      console.log(info);
      context.ID_Cliente = info.id;
      setIsLoading(false);
    };

    useEffect(() => {
      getClienteAPI
        .requestPromise(context.ID_Cliente)
        .then((info) => {
          
          console.log("dentro do getClient usando o ID", info);
          
        })
        .catch((info) => {
          console.log(info);
        });
    })

    
    let info = (
    <div className="button">
      <Button variant="third" type="submit" >
        SALVAR
      </Button>
    </div>
    );

    return(
        <Container className="clientContainer">
            <h1 className="h1">Dados do Cliente</h1>
            <Formik
                initialValues={{
                name:"",
                email: "",
                celular: "",
                rua: "",
                numero: "",
                bairro: "",
                cidade: "",
                }}
                validationSchema={addressSchema}
                onSubmit={onClickCadastro}
            >
            {(formik) => {
              const { errors, setFieldValue, values } = formik;
              return(
                <Form>   
                    <div className="clientForm">
                      <div className="item1">
                            <TextField className="fieldColor"
                                required
                                size="small"
                                id="outlined-required"
                                label="Nome"
                                margin="normal"
                                value={values.name}
                                onChange={(e) => setFieldValue("name", e.target.value)}
                            /> 
                            <span>
                              <ErrorMessage 
                                className="errorMessage"
                                name="name"
                                component="div"
                              />
                            </span>
                      </div>
                        <div className="item2">
                            <TextField className="fieldColor"
                                required
                                size="small"
                                id="outlined-required"
                                label="E-mail"
                                margin="normal"
                                value={values.email}
                                onChange={(e) => setFieldValue("email", e.target.value)} 
                            />
                          <span>
                              <ErrorMessage
                                component="div"
                                className="errorMessage"
                                name="email"
                              />
                          </span>
                        </div>
                         <div className="item3">
                            <TextField className="fieldColor"
                                required
                                size="small"
                                id="outlined-required"
                                label="Cel.:"
                                margin="normal"
                                value={values.celular}
                                onChange={(e) => setFieldValue("celular", e.target.value)}
                            />   
                        <span>
                              <ErrorMessage
                                component="div"
                                className="errorMessage"
                                name="celular"
                              />
                        </span>
                        </div>
                        <div className="item4">
                            <TextField className="fieldColor"
                                required
                                size="small"
                                id="outlined-required"
                                label="Rua:"
                                margin="normal"
                                value={values.rua}
                                onChange={(e) => setFieldValue("rua", e.target.value)}
                            />
                        <span>
                              <ErrorMessage
                                component="div"
                                className="errorMessage"
                                name="rua"
                              />
                        </span>
                        </div>
                        <div className="item5">
                            <TextField className="fieldColor"
                                required
                                size="small"
                                id="outlined-required"
                                label="Numero:"
                                margin="normal"
                                value={values.numero}
                                onChange={(e) => setFieldValue("numero", e.target.value)}
                            />
                        <span>
                              <ErrorMessage
                                component="div"
                                className="errorMessage"
                                name="numero"
                              />
                        </span>
                        </div>
                        <div className="item6">
                            <TextField className="fieldColor"
                                required
                                size="small"
                                id="outlined-required"
                                label="Bairro:"
                                margin="normal"
                                value={values.bairro}
                                onChange={(e) => setFieldValue("bairro", e.target.value)}
                            />
                       <span>
                              <ErrorMessage
                                component="div"
                                className="errorMessage"
                                name="bairro"
                              />
                        </span>
                        </div>
                        <div className="item7">
                            <TextField className="fieldColor"
                                required
                                size="small"
                                id="outlined-required"
                                label="Cidade:"
                                margin="normal"
                                value={values.cidade}
                                onChange={(e) => setFieldValue("cidade", e.target.value)}
                            />
                       <span>
                              <ErrorMessage
                                component="div"
                                className="errorMessage"
                                name="cidade"
                              />
                        </span>
                       </div>
                    </div>
                    {info}
                    
                </Form>
              );
            }}
            </Formik>  
            
               
        </Container>    
        );
 }  
export default ClientForm