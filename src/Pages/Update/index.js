import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../Contexts/User";
import {
  LoginPageContent,
  LoginForm,
  InputGroup,
  SubmitButton,
  CancelButton,
  CheckboxGroup,
} from "./components/UpdateWrapper";
import useApi from "../../Hooks/useApi";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  InputInformation,
  CheckBoxInformation,
} from "./components/InputInformation";

export default function Update() {
  const api = useApi();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      folderLinkSpreadsheet: "",
      linkSpreadsheetTemplate: "",
      spreadsheetPageName: "",
    },
  });
  const { userData } = useContext(UserContext);
  const [disable, setDisable] = useState(false);
  const [fetchData, setFetchData] = useState({
    isProtected: false,
    isHidden: false,
  });

  function submitHandler(data) {
    const parsedUserData = JSON.parse(userData);
    const body = {
      ...data,
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
            reset({
              folderLinkSpreadsheet: "",
              linkSpreadsheetTemplate: "",
              spreadsheetPageName: "",
            });
            setFetchData({
              isProtected: false,
              isHidden: false,
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
      <LoginForm onSubmit={handleSubmit(submitHandler)}>
        {InputInformation.map((info, index) => (
          <InputGroup key={index}>
            <label htmlFor={info.htmlFor}>{info.label}</label>
            <input
              id={info.id}
              type={info.type}
              disabled={disable}
              placeholder={info.placeholder}
              {...register(`${info.htmlFor}`, { required: info.error })}
            />
            <ErrorMessage
              errors={errors}
              name={info.htmlFor}
              render={({ message }) => <span>{message}</span>}
            />
          </InputGroup>
        ))}
        {CheckBoxInformation.map((info, index) => (
          <CheckboxGroup key={index}>
            <label>
              {info.label}
              <input
                value={fetchData + info.id}
                type={info.type}
                disabled={disable}
                onChange={() =>
                  setFetchData({
                    ...fetchData,
                    [info.id]: !fetchData[info.id],
                  })
                }
              ></input>
            </label>
          </CheckboxGroup>
        ))}
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
