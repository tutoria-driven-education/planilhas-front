import Navbar from "../../Global/styles/components/Navbar";
import Loader from "react-loader-spinner";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, PageContent, InputGroup, Select, DecisionButton } from "./components/registerWrapper"


export default function Register() {
  const [disable, setDisable] = useState(false);
  const [fetchData, setFetchData] = useState({
    name: "",
    zoomAccount: "",
    role: "",
  });

  return (
    <PageContent>
      <Navbar />
      <Form>
        <InputGroup>
          <label>Insira so dados do usuário</label>
          <input
            disabled={disable}
            value={fetchData.name}
            type="text"
            placeholder="Nome do usuário"
            onChange={(event) =>
              setFetchData({ ...fetchData, name: event.target.value })
            }
          ></input>
          <input
            disabled={disable}
            value={fetchData.zoomAccount}
            type="text"
            placeholder="Email do zoom"
            onChange={(event) =>
              setFetchData({ ...fetchData, zoomAccount: event.target.value })
            }
          ></input>
        </InputGroup>
        <Select
          onChange={(event) =>
            setFetchData({ ...fetchData, role: event.target.value })
          }
        >
          <option value="">Qual atividade esse usuário exerce?</option>
          <option>Instrutor</option>
          <option>Facilitador</option>
          <option>Tutor</option>
        </Select>
        <DecisionButton disabled={disable} type="submit">
          {disable ? (
            <Loader
              type="ThreeDots"
              color="var(--pink-color)"
              height={10}
              width={60}
            />
          ) : (
            "Criar"
          )}
        </DecisionButton>
        <Link to={"/menu"}>
          <DecisionButton disabled={disable}>Voltar</DecisionButton>
        </Link>
      </Form>
    </PageContent>
  );
}
