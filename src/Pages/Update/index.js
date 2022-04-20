import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../Contexts/User";
import Navbar from "../../Global/styles/components/Navbar";
import {
  LoginPageContent,
  LoginForm,
  InputGroup,
  SubmitButton,
  CancelButton,
  CheckboxGroup,
} from "./components/updateWrapper";
import useApi from "../../Hooks/useApi";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function Update() {
  const api = useApi();
  const { userData } = useContext(UserContext);
  const [disable, setDisable] = useState(false);
  const [fetchData, setFetchData] = useState({
    folderLinkSpreadsheet: "",
    linkSpreadsheetTemplate: "",
    spreadsheetPageName: "",
    isProtected: false,
  });

  function submitHandler(event) {
    event.preventDefault();
    if (
      fetchData.folderLinkSpreadsheet === "" ||
      fetchData.linkSpreadsheetTemplate === "" ||
      fetchData.spreadsheetPageName === ""
    ) {
      return toast("Algum campo está vázio!");
    }
    const parsedUserData = JSON.parse(userData);
    const body = {
      ...fetchData,
      token: parsedUserData,
    };
    Swal.fire({
      title: "As informações estão certa?",
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
        Swal.fire("Atualizando planilhas!");
        api.update
          .updateSpread(body)
          .then(() => {
            setDisable(false);
            setFetchData({
              folderLinkSpreadsheet: "",
              linkSpreadsheetTemplate: "",
              spreadsheetPageName: "",
              isProtected: false,
            });
            Swal.fire("Planilhas atualizadas com sucesso!");
          })
          .catch(() => {
            setDisable(false);
            Swal.fire(
              "Ocorreu um erro, verifique o drive ou se todas as planilhas foram atualizadas!"
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
          <label>Link da pasta dos alunos</label>
          <input
            value={fetchData.folderLinkSpreadsheet}
            type="text"
            disabled={disable}
            placeholder="Link da pasta"
            onChange={(event) =>
              setFetchData({
                ...fetchData,
                folderLinkSpreadsheet: event.target.value,
              })
            }
          ></input>
        </InputGroup>
        <InputGroup>
          <label>Template que pretende atualizar</label>
          <input
            value={fetchData.linkSpreadsheetTemplate}
            type="text"
            disabled={disable}
            placeholder="Link do template"
            onChange={(event) =>
              setFetchData({
                ...fetchData,
                linkSpreadsheetTemplate: event.target.value,
              })
            }
          ></input>
        </InputGroup>
        <InputGroup>
          <label>Nome da aba que pretende atualizar</label>
          <input
            value={fetchData.spreadsheetPageName}
            type="text"
            disabled={disable}
            placeholder="Nome da aba"
            onChange={(event) =>
              setFetchData({
                ...fetchData,
                spreadsheetPageName: event.target.value,
              })
            }
          ></input>
        </InputGroup>
        <CheckboxGroup>
          <label>
            Deseja que essa aba seja protegida?
            <input
              value={fetchData.isProtected}
              type="checkbox"
              disabled={disable}
              placeholder="Nome da aba"
              onChange={() =>
                setFetchData({
                  ...fetchData,
                  isProtected: !fetchData.isProtected,
                })
              }
            ></input>
          </label>
        </CheckboxGroup>
        <SubmitButton disabled={disable} type="submit">
          Atualizar
        </SubmitButton>
        <Link disabled={disable} to={"/menu"}>
          <CancelButton>Voltar</CancelButton>
        </Link>
      </LoginForm>
    </LoginPageContent>
  );
}
