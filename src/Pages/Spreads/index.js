import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Navbar from "../../Global/styles/components/Navbar";
import useApi from "../../Hooks/useApi";
import UserContext from "../../Contexts/User";
import Swal from "sweetalert2";
import {
  LoginPageContent,
  SubmitButton,
  CancelButton,
  LoginForm,
  InputGroup,
} from "./components/spreadsWrapper";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

export default function Spreads() {
  const { userData } = useContext(UserContext);
  const [disable, setDisable] = useState(false);
  const [fetchData, setFetchData] = useState({
    linkSpreadsheetStudents: "",
    linkSpreadsheetTemplate: "",
    amountStudents: "",
    className: "",
  });
  const api = useApi();

  function submitHandler(event) {
    event.preventDefault();
    if (
      fetchData.linkSpreadsheetStudents === "" ||
      fetchData.linkSpreadsheetTemplate === "" ||
      fetchData.amountStudents === "" ||
      fetchData.className === ""
    ) {
      return toast("Algum campo está vázio!");
    }

    const parsedUserData = JSON.parse(userData);
    const body = {
      ...fetchData,
      token: parsedUserData,
    };

    Swal.fire({
      title: "As planilhas estão publicas?",
      text: "Depois que iniciar esse processo, terá que espera-lo terminar, isso pode tomar algum tempo!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "var(--pink-color)",
      cancelButtonColor: "var(--yellow-color)",
      confirmButtonText: "Tenho certeza!",
      cancelButtonText: "Cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setDisable(true);
        Swal.fire("Gerando planilhas!");
        api.execute
          .createSpreads(body)
          .then(() => {
            setDisable(false);
            setFetchData({
              linkSpreadsheetStudents: "",
              linkSpreadsheetTemplate: "",
              amountStudents: "",
              className: "",
            });
            Swal.fire("Planilhas geradas com sucesso!");
          })
          .catch(() => {
            setDisable(false);
            Swal.fire(
              "Ocorreu um erro, verifique o drive ou as planilhas enviadas!"
            );
          });
      }
    });
  }

  return (
    <LoginPageContent>
      <Navbar />
      <LoginForm onSubmit={submitHandler}>
        <InputGroup>
          <label>Template planilha principal</label>
          <input
            disabled={disable}
            value={fetchData.linkSpreadsheetStudents}
            type="url"
            placeholder="Link da planilha"
            onChange={(event) =>
              setFetchData({
                ...fetchData,
                linkSpreadsheetStudents: event.target.value,
              })
            }
          ></input>
        </InputGroup>
        <InputGroup>
          <label>Template planilha aluno</label>
          <input
            disabled={disable}
            value={fetchData.linkSpreadsheetTemplate}
            type="url"
            placeholder="Link da planilha aluno"
            onChange={(event) =>
              setFetchData({
                ...fetchData,
                linkSpreadsheetTemplate: event.target.value,
              })
            }
          ></input>
        </InputGroup>
        <InputGroup>
          <label>Nome da pasta a ser criada</label>
          <input
            disabled={disable}
            value={fetchData.className}
            type="text"
            placeholder="Nome da pasta que será gerada"
            onChange={(event) =>
              setFetchData({ ...fetchData, className: event.target.value })
            }
          ></input>
        </InputGroup>
        <InputGroup>
          <label>Quantidade de alunos na planilha</label>
          <input
            disabled={disable}
            value={fetchData.amountStudents}
            type="text"
            placeholder="Quantidade de alunos presente na planilha"
            onChange={(event) =>
              setFetchData({ ...fetchData, amountStudents: event.target.value })
            }
          ></input>
        </InputGroup>
        <SubmitButton disabled={disable} type="submit">
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
        </SubmitButton>
        <Link to={"/menu"}>
          <CancelButton disabled={disable}>Voltar</CancelButton>
        </Link>
      </LoginForm>
    </LoginPageContent>
  );
}
