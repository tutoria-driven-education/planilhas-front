import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../Global/styles/components/Loading";
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
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function NewClass() {
  const api = useApi();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [disable, setDisable] = useState(false);
  const [result, setResult] = useState({
    tutors: [],
    instrutors: [],
    facilitators: [],
  });
  const [fetchData, setFetchData] = useState({
    className: "",
    instructorId: "",
    facilitatorId: "",
    tutors: [],
  });

  useEffect(() => {
    api.user.getAllUser().then(({ data }) => {
      const response = data.userList;
      response.forEach((eachResponse) => {
        switch (eachResponse.UserGroup.name) {
        case "Tutores":
          setResult((current) => {
            current?.tutors.push(eachResponse);
            return current;
          });
          break;
        case "Instrutores":
          setResult((current) => {
            current?.instrutors.push(eachResponse);
            return current;
          });
          break;
        case "Facilitadores":
          setResult((current) => {
            current?.facilitators.push(eachResponse);
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

  const options = result?.tutors.map((option) => {
    return { value: option.id, label: option.name };
  });

  function handleTutorSelection(event) {
    const arrayOfTutors = event.map((eachTutor) => {
      return eachTutor.value;
    });
    setFetchData({ ...fetchData, tutors: arrayOfTutors });
  }

  function submitHandler(event) {
    event.preventDefault();
    setDisable(true);
    api.team
      .createTeam(fetchData)
      .then(() => {
        toast("Turma criada com sucesso!");
        setDisable(false);
        history.psuh("/menu");
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setDisable(false);
      });
  }

  if (isLoading) return <Loading />;

  return (
    <PageContent>
      <Navbar />
      <Form onSubmit={submitHandler}>
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
            disabled={disable}
            onChange={(event) =>
              setFetchData({
                ...fetchData,
                instructorId: parseInt(event.target.value),
              })
            }
          >
            <option value={""}>Selecione o(a) instrutor(a)</option>
            {result.instrutors.map((instrutor) => (
              <option value={instrutor.id} key={instrutor.id}>
                {instrutor.name}
              </option>
            ))}
          </Select>
        </SelectHolder>
        <SelectHolder>
          <p>Facilitador(a)</p>
          <Select
            disabled={disable}
            onChange={(event) =>
              setFetchData({
                ...fetchData,
                facilitatorId: parseInt(event.target.value),
              })
            }
          >
            <option value={""}>Selecione o(a) facilitador(a)</option>
            {result.facilitators.map((facilitator) => (
              <option value={facilitator.id} key={facilitator.id}>
                {facilitator.name}
              </option>
            ))}
          </Select>
        </SelectHolder>
        <TutorHolder>
          <p>Tutores</p>
        </TutorHolder>
        <TutorsSelect
          isDisabled={disable}
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
