import useApi from "../../Hooks/useApi";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Contexts/User";
import {
  CareerPageContent,
  CareerForm,
  InputGroup,
  ButtonGroup,
  Button,
} from "./components/CareerWrapper";
import { InputInformation } from "./components/InputInformation";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";

export default function Career() {
  const api = useApi();
  const [disable, setDisable] = useState(false);
  const { userData } = useContext(UserContext);
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
      folderName: "",
    },
  });

  function submitHandler(data) {
    const parsedUserData = JSON.parse(userData);
    const body = {
      ...data,
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
        Swal.fire("Gerando planilhas de carreira!");
        api.career
          .createCareer(body)
          .then(() => {
            setDisable(false);
            reset({
              folderLinkSpreadsheet: "",
              linkSpreadsheetTemplate: "",
              spreadsheetPageName: "",
              folderName: "",
            });
            Swal.fire("Planilhas geradas com sucesso!");
          })
          .catch(() => {
            setDisable(false);
            reset({
              folderLinkSpreadsheet: "",
              linkSpreadsheetTemplate: "",
              spreadsheetPageName: "",
              folderName: "",
            });
            Swal.fire(
              "Ocorreu um erro, verifique o drive ou se todas as planilhas foram atualizadas!"
            );
          });
      }
    });
  }

  return (
    <CareerPageContent>
      <CareerForm onSubmit={handleSubmit(submitHandler)}>
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
              "Criar"
            )}
          </Button>
          <Link disabled={disable} to={"/menu"}>
            <Button disabled={disable}>Voltar</Button>
          </Link>
        </ButtonGroup>
      </CareerForm>
    </CareerPageContent>
  );
}
