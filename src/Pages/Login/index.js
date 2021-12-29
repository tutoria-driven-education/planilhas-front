import { useState, useContext } from "react";
import DrivenLogo from "../../Assets/DrivenLogo";
import {
  LoginPageContent,
  Brand,
  LoginForm,
  InputGroup,
  SubmitButton,
} from "./components/LoginWrapper";
import useApi from "../../Hooks/useApi";
import Swal from "sweetalert2";
import UserContext from "../../Contexts/User";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [fetchData, setFetchData] = useState({ email: "", password: "" });
  const [disable, setDisable] = useState(false);
  const { setUserData } = useContext(UserContext);
  const api = useApi();
  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    if (
      fetchData.email !== process.env.REACT_APP_LOGIN ||
      fetchData.password !== process.env.REACT_APP_PASSWORD
    ) {
      return toast("Campo do email ou senha não confere!");
    }
    setDisable(true);
    api.auth.getAuth().then((res) => {
      setDisable(false);
      window.open(`${res.data.link}`, "_blank");
      Swal.fire({
        title:
          "Uma nova janela será aberta, caso apareça um aviso não se preocupe, clique em avançado e aceite as permissões que está sendo pedido, após autorizar volte aqui e cole o código 😁",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Enviar código",
        showLoaderOnConfirm: true,
        preConfirm: (code) => {
          api.auth.sendAuth(code).then((res) => {
            const stringfyToken = JSON.stringify(res.data.token);
            setUserData(stringfyToken);
            history.push("/menu");
          });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Acesso confirmado!");
        }
      });
    });
  }

  return (
    <LoginPageContent>
      <Brand>
        <DrivenLogo theme={"light"} />
      </Brand>
      <LoginForm onSubmit={submitHandler}>
        <InputGroup>
          <label htmlFor="email">E-mail Driven</label>
          <input
            disabled={disable}
            value={fetchData.email}
            id="email"
            type="text"
            placeholder="Digite o seu e-mail Driven"
            spellCheck="false"
            onChange={(event) =>
              setFetchData({ ...fetchData, email: event.target.value })
            }
          ></input>
        </InputGroup>
        <InputGroup>
          <label htmlFor="password">Senha</label>
          <input
            disabled={disable}
            value={fetchData.password}
            id="password"
            type="password"
            placeholder="Digite a sua senha"
            onChange={(event) =>
              setFetchData({ ...fetchData, password: event.target.value })
            }
          ></input>
        </InputGroup>
        <SubmitButton disabled={disable}>Entrar</SubmitButton>
      </LoginForm>
    </LoginPageContent>
  );
}
