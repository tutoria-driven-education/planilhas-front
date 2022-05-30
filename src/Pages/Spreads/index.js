import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useApi from "../../Hooks/useApi";
import UserContext from "../../Contexts/User";
import Swal from "sweetalert2";
import {
  LoginPageContent,
  SubmitButton,
  CancelButton,
  LoginForm,
  InputGroup,
} from "./components/SpreadsWrapper";
import Loader from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { InputInformation } from "./components/InputInformation";

export default function Spreads() {
  const { userData } = useContext(UserContext);
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      linkSpreadsheetStudents: "",
      linkSpreadsheetTemplate: "",
      amountStudents: "",
      className: "",
    },
  });
  const api = useApi();

  function submitHandler(data) {
    const parsedUserData = JSON.parse(userData);
    const body = {
      ...data,
      token: parsedUserData,
      timeout: 1000 * 60 * 20, //20 minutes
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
            Swal.fire("Planilhas geradas com sucesso!");
          })
          .catch(() => {
            setDisable(false);
            reset({
              linkSpreadsheetStudents: "",
              linkSpreadsheetTemplate: "",
              amountStudents: "",
              className: "",
            });
            Swal.fire(
              "Ocorreu um erro, verifique o drive ou as planilhas enviadas!"
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
            ></input>
            <ErrorMessage
              errors={errors}
              name={info.htmlFor}
              render={({ message }) => <span>{message}</span>}
            />
          </InputGroup>
        ))}
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
