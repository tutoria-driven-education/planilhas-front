import Navbar from "../../Global/styles/components/Navbar";
import Loader from "react-loader-spinner";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  PageContent,
  InputGroup,
  Select,
  DecisionButton,
} from "./components/registerWrapper";
import useApi from "../../Hooks/useApi";
import { toast } from "react-toastify";

export default function Register() {
  const [disable, setDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [roles, setRoles] = useState([]);
  const [fetchData, setFetchData] = useState({
    name: "",
    email: "",
    userGroupId: "",
  });
  console.log(fetchData);
  const api = useApi();
  const history = useHistory();

  useEffect(() => {
    api.userGroup.getUserRole().then(({ data }) => {
      setRoles(data.userGroup);
      setIsLoading(false);
    });
  }, []);

  function createUser(event) {
    event.preventDefault();
    if (
      fetchData.userGroupId === "" ||
      fetchData.email === "" ||
      fetchData.name === ""
    )
      return toast("Algum campo está vazio!");
    setDisable(true);
    api.user
      .createUser(fetchData)
      .then(() => {
        toast("Usuário criado com sucesso");
        setDisable(false);
        history.push("/menu");
      })
      .catch((err) => {
        setDisable(false);
        if (err.response.status === 422)
          return toast("Algum dado digitado está errado!");
        if (err.response.status === 409) return toast("Usuário já cadastrado!");
        toast("Algum erro aconteceu, avise a alguem!");
      });
  }

  if (isLoading)
    return (
      <PageContent>
        <Navbar />
        <Form>
          <Loader
            type="TailSpin"
            color="var(--pink-color)"
            height={100}
            width={100}
          />
        </Form>
      </PageContent>
    );

  return (
    <PageContent>
      <Navbar />
      <Form onSubmit={createUser}>
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
            value={fetchData.email}
            type="text"
            placeholder="Email do zoom"
            onChange={(event) =>
              setFetchData({ ...fetchData, email: event.target.value })
            }
          ></input>
        </InputGroup>
        <Select
          disabled={disable}
          onChange={(event) =>
            setFetchData({ ...fetchData, userGroupId: event.target.value })
          }
        >
          <option value={""}>Qual atividade esse usuário exerce?</option>
          {roles.map((role, index) => (
            <option value={role.id} key={index}>
              {role.name}
            </option>
          ))}
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
