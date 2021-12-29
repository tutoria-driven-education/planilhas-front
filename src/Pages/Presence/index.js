import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Global/styles/components/Navbar";
import {
  LoginPageContent,
  LoginForm,
  InputGroup,
  SubmitButton,
  CancelButton,
} from "./components/presenceWrapper";

export default function Presence() {
  const [fetchData, setFetchData] = useState({ className: "" });

  return (
    <LoginPageContent>
      <Navbar />
      <LoginForm>
        <InputGroup>
          <label>Nome da turma que deseja atualizar</label>
          <input
            value={fetchData.className}
            type="text"
            placeholder="Nome da pasta do drive"
            onChange={(event) =>
              setFetchData({
                ...fetchData,
                className: event.target.value,
              })
            }
          ></input>
        </InputGroup>
        <SubmitButton type="submit">Atualizar</SubmitButton>
        <Link to={"/menu"}>
          <CancelButton>Voltar</CancelButton>
        </Link>
      </LoginForm>
    </LoginPageContent>
  );
}
