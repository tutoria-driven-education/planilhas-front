import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Global/styles/components/Navbar";
import {
  PageContent,
  Form,
  Select,
  DecisionButton,
  SelectHolder,
  InputGroup,
  TutorHolder,
} from "./components/newClassWrapper";

export default function NewClass() {
  const [amountTutor, setAmountTutor] = useState(1);
  const [fetchData, setFetchData] = useState({ className: "", instrutor: "", facilitador: "", tutores: [] });

  const createdTutorElement = (
    <Select>
      <option>Escolha o tutor</option>
      <option>Guga</option>
      <option>Kuritza</option>
      <option>Yann</option>
      <option>Marcus</option>
      <option>Leo</option>
      <option>Gabriel</option>
      <option>Thiago</option>
      <option>Edu</option>
    </Select>
  );

  function handleTutorAmount(event, boolean) {
    event.preventDefault();
    if(boolean) setAmountTutor(amountTutor + 1);
    if(!boolean) amountTutor > 1 ? setAmountTutor(amountTutor - 1) : "";
  }
  
  return (
    <PageContent>
      <Navbar />
      <Form>
        <InputGroup>
          <label>Nome da turma</label>
          <input
            // disabled={disable}
            // value={fetchData.name}
            type="text"
            placeholder="Nome da turma"
            // onChange={(event) =>
            //   setFetchData({ ...fetchData, name: event.target.value })
            // }
          ></input>
        </InputGroup>
        <SelectHolder>
          <p>Instrutor(a)</p>
          <Select>
            <option value="">teste</option>
            <option value="">teste1</option>
            <option value="">teste2</option>
            <option value="">teste3</option>
            <option value="">teste4</option>
            <option value="">teste5</option>
            <option value="">teste6</option>
          </Select>
        </SelectHolder>
        <SelectHolder>
          <p>Facilitador(a)</p>
          <Select>
            <option value="">teste</option>
            <option value="">teste1</option>
            <option value="">teste2</option>
            <option value="">teste3</option>
            <option value="">teste4</option>
            <option value="">teste5</option>
            <option value="">teste6</option>
          </Select>
        </SelectHolder>
        <TutorHolder>
          <button onClick={(event) => handleTutorAmount(event, false)}>-</button>
          <p>Tutores</p>
          <button onClick={(event) => handleTutorAmount(event, true)}>+</button>
        </TutorHolder>
        {Array(amountTutor)
          .fill(createdTutorElement)
          .map((element, index) => {
            return <div key={index}>{element}</div>;
          })}
        <DecisionButton type="submit">Criar</DecisionButton>
        <Link to={"/menu"}>
          <DecisionButton>Voltar</DecisionButton>
        </Link>
      </Form>
    </PageContent>
  );
}
