import { useContext, useState } from "react";
import { InputInformation } from "./components/InputInformation";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import useApi from "../../Hooks/useApi";
import UserContext from "../../Contexts/User";
import {
  Button,
  ButtonGroup,
  FlagsPageContent,
  InputGroup,
  PresenceForm,
} from "./components/FlagsWrapper";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Flags() {
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
      spreadsheetUpdate: "",
      start: "",
      end: "",
      week: "",
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
        Swal.fire("Atualizando bandeiras!");
        api.flags
          .updateFlags(body)
          .then(() => {
            setDisable(false);
            Swal.fire("Bandeiras atualizadas com sucesso!");
            reset({
              linkSpreadsheetStudents: "",
              spreadsheetUpdate: "",
              start: "",
              end: "",
              week: "",
            });
          })
          .catch(() => {
            setDisable(false);
            reset({
              linkSpreadsheetStudents: "",
              spreadsheetUpdate: "",
              start: "",
              end: "",
              week: "",
            });
            Swal.fire(
              "Ocorreu um erro, verifique o drive ou as planilhas enviadas!"
            );
          });
      }
    });
  }

  return (
    <FlagsPageContent>
      <PresenceForm onSubmit={handleSubmit(submitHandler)}>
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
        <ButtonGroup>
          <Button disabled={disable} type="submit">
            {disable ? (
              <Loader
                type="ThreeDots"
                color="var(--pink-color)"
                height={10}
                width={60}
              />
            ) : (
              "Atualizar bandeiras"
            )}
          </Button>
          <Link disabled={disable} to={"/menu"}>
            <Button disabled={disable}>Voltar</Button>
          </Link>
        </ButtonGroup>
      </PresenceForm>
    </FlagsPageContent>
  );
}
