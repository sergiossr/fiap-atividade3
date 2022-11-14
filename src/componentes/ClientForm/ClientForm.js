import Button from "@mui/material/Button";
import './ClientForm.css'
import { Container } from 'react-bootstrap';
import * as Yup from "yup";
import { useState } from "react";
import UseAPI from '../../Services/APIs/Common/UseAPI';
import CadastroAPI from "../../Services/APIs/CadastroAPI/CadastroAPI"
import { Formik, Form, ErrorMessage } from "formik";
import { Alert, TextField } from "@mui/material";
import { useContext } from 'react';
import { ClienteIDContext } from '../../Store/ClienteIDContext';
import { useNavigate } from "react-router-dom";

function ClientForm() {

  const addressSchema = Yup.object().shape({
    email: Yup.string().email("*Campo invalido").required("*Campo obrigatorio"),
    name: Yup.string().required("*Campo obrigatorio"),
    numero: Yup.number().required("*Campo obrigatorio").typeError("*Campo invalido"),
    rua: Yup.string().required("*Campo obrigatorio"),
    celular: Yup.number().required("*Campo obrigatorio").typeError("*Campo invalido"),
    bairro: Yup.string().required("*Campo obrigatorio"),
    cidade: Yup.string().required("*Campo obrigatorio"),
  });

  const NovoCadastroAPI = UseAPI(CadastroAPI.postCliente);
  const [connectCode, setConnectCode] = useState(0);
  const context = useContext(ClienteIDContext);
  const navigate = useNavigate();

  const goToPedido = () => {
    navigate("/pedidos");
  }

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
    NovoCadastroAPI
      .requestPromise(payload)
      .then(connectSuccess)
      .catch(connectError);
  };

  const connectSuccess = (info) => {
    console.log("Retornando Info");
    console.log(info.id);
    context.ID_Cliente = info.id;
    if (info.id > 0) {
      setConnectCode(1)
      setTimeout(() => {
        goToPedido();
      }, 4000)
    }
    else {
      setConnectCode(-1);
    }
  };

  const connectError = (info) => {
    console.log("Retornando Info Erro");
    console.log(info);
    setConnectCode(-1);
  };

  let successConnectText = "Cliente cadastrado com sucesso!";
  let failedConnectText = "Erro ao Conectar, operação não realizada!";
  let alerta = null
  if (connectCode === 1) {
    alerta = (
      <Alert className="alerta" severity="success">{successConnectText}</Alert>
    )
  } else {
    if (connectCode !== 0){
      alerta = (
        <Alert className="alerta" severity="error">{failedConnectText}</Alert>
      )
    }
  }

  let saveCliente = (
    <div className="button">
      <Button variant="third" type="submit" >
        SALVAR
      </Button>
    </div>
  );

  return (
    <div>
      <Container className="clientContainer">
        <h1 className="h1">Dados do Cliente</h1>
        <Formik
          initialValues={{
            name: "",
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
            const { setFieldValue, values } = formik;
            return (
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
                {saveCliente}
              </Form>
            );
          }}
        </Formik>
      </Container>
      {alerta}
    </div>
  );
}
export default ClientForm