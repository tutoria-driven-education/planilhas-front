import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import Navbar from "../../Global/styles/components/Navbar";
import useApi from "../../Hooks/useApi";
import {
  PageContent,
  Form,
  Select,
  DecisionButton,
  SelectHolder,
  InputGroup,
  TutorHolder,
  TutorsSelect,
} from "./components/newClassWrapper";
import Loader from "react-loader-spinner";

export default function NewClass() {
  const api = useApi();
  const [isLoading, setIsLoading] = useState(true);
  const [disable, setDisable] = useState(false);
  const [result, setResult] = useState({
    tutores: [],
    instrutores: [],
    facilitadores: [],
  });
  const [fetchData, setFetchData] = useState({
    className: "",
    instrutor: "",
    facilitador: "",
    tutores: [],
  });

  useEffect(() => {
    api.user.getAllUser().then(({ data }) => {
      const response = data.userList;
      response.forEach((eachResponse) => {
        switch (eachResponse.UserGroup.name) {
          case "Tutores":
            setResult((current) => {
              current?.tutores.push(eachResponse);
              return current;
            });
            break;
          case "Instrutores":
            setResult((current) => {
              current?.instrutores.push(eachResponse);
              return current;
            });
            break;
          case "Facilitadores":
            setResult((current) => {
              current?.facilitadores.push(eachResponse);
              return current;
            });
            break;
          default:
            break;
        }
      });
      setResult({ ...result });
      setIsLoading(false);
    });
  }, []);

  const options = result?.tutores.map((option) => {
    return { value: option.id, label: option.name };
  });

  function handleTutorSelection(event) {
    const arrayOfTutors = event.map((eachTutor) => {
      return eachTutor.value;
    });
    setFetchData({ ...fetchData, tutores: arrayOfTutors });
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
      <Form>
        <InputGroup>
          <label>Nome da turma</label>
          <input
            disabled={disable}
            value={fetchData.name}
            type="text"
            placeholder="Nome da turma"
            onChange={(event) =>
              setFetchData({ ...fetchData, className: event.target.value })
            }
          ></input>
        </InputGroup>
        <SelectHolder>
          <p>Instrutor(a)</p>
          <Select
            onChange={(event) =>
              setFetchData({
                ...fetchData,
                instrutor: parseInt(event.target.value),
              })
            }
          >
            <option value={""}>Selecione o(a) instrutor(a)</option>
            {result.instrutores.map((instrutor) => (
              <option value={instrutor.id} key={instrutor.id}>
                {instrutor.name}
              </option>
            ))}
          </Select>
        </SelectHolder>
        <SelectHolder>
          <p>Facilitador(a)</p>
          <Select
            onChange={(event) =>
              setFetchData({
                ...fetchData,
                facilitador: parseInt(event.target.value),
              })
            }
          >
            <option value={""}>Selecione o(a) facilitador(a)</option>
            {result.facilitadores.map((facilitador) => (
              <option value={facilitador.id} key={facilitador.id}>
                {facilitador.name}
              </option>
            ))}
          </Select>
        </SelectHolder>
        <TutorHolder>
          <p>Tutores</p>
        </TutorHolder>
        <TutorsSelect
          onChange={(event) => handleTutorSelection(event)}
          options={options}
          isMulti
        />
        <DecisionButton type="submit">Criar</DecisionButton>
        <Link to={"/menu"}>
          <DecisionButton>Voltar</DecisionButton>
        </Link>
      </Form>
    </PageContent>
  );
}
