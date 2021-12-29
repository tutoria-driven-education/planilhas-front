import { useState } from "react";
import DrivenLogo from "../../Assets/DrivenLogo";
import {
  LoginPageContent,
  Brand,
  LoginForm,
  InputGroup,
  SubmitButton,
} from "./components/LoginWrapper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [fetchData, setFetchData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    if (
      fetchData.email !== process.env.REACT_APP_LOGIN ||
      fetchData.password !== process.env.REACT_APP_PASSWORD
    ) {
      return toast("Campo do email ou senha não confere!");
    }
    navigate("/home")
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
            value={fetchData.password}
            id="password"
            type="password"
            placeholder="Digite a sua senha"
            onChange={(event) =>
              setFetchData({ ...fetchData, password: event.target.value })
            }
          ></input>
        </InputGroup>
        <SubmitButton>Entrar</SubmitButton>
      </LoginForm>
    </LoginPageContent>
  );
}
