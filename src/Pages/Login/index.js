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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [fetchData, setFetchData] = useState({ email: "", password: "" });
  const [disable, setDisable] = useState(false);
  const { setUserData } = useContext(UserContext);
  const api = useApi();
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    if (fetchData.email === "") {
      return toast("O campo do email está vazio!");
    }
    if (fetchData.password === "") {
      return toast("O campo da senha está vazia!");
    }
    setDisable(true);
    api.auth
      .getAuth(fetchData)
      .then((res) => {
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
            api.auth
              .sendAuth(code)
              .then((res) => {
                Swal.fire("Acesso confirmado!");
                const stringfyToken = JSON.stringify(res.data.token);
                setUserData(stringfyToken);
                navigate("/menu");
              })
              .catch((_err) => {
                return;
              });
          },
          allowOutsideClick: () => !Swal.isLoading(),
        });
      })
      .catch((err) => {
        setDisable(false);
        if (err.response.status === 401) {
          return toast("Email ou senha não confere!");
        } else if (err.response.status === 500) {
          return toast("Avise a alguem que ocorreu esse error!");
        }
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
