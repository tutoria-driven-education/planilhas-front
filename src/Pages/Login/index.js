import { useState, useContext, useEffect } from "react";
import DrivenLogo from "../../Assets/DrivenLogo";
import {
  LoginPageContent,
  Brand,
  LoginForm,
  InputGroup,
  SubmitButton,
} from "./components/LoginWrapper";
import useApi from "../../Hooks/useApi";
import Swal from "sweetalert2";
import UserContext from "../../Contexts/User";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { InputInformation } from "./components/InputInformation";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [disable, setDisable] = useState(false);
  const { setUserData } = useContext(UserContext);
  const api = useApi();
  const navigate = useNavigate();
  const params = useSearchParams();

  useEffect(() => {
    const code = params[0]?.get("code");
    if (code) {
      api.auth
        .sendAuth(code)
        .then((res) => {
          Swal.fire("Acesso confirmado!");
          const stringfyToken = JSON.stringify(res.data.token);
          setUserData(stringfyToken);
          navigate("/menu");
        })
        .catch((_err) => {
          return;
        });
    }
  }, []);

  function submitHandler(data) {
    setDisable(true);
    api.auth
      .getAuth(data)
      .then((res) => {
        setDisable(false);
        window.open(`${res.data.link}`, "_self");
      })
      .catch((err) => {
        setDisable(false);
        reset({
          email: "",
          password: "",
        });
        if (err.response.status === 401) {
          return toast("Email ou senha não confere!");
        } else if (err.response.status === 500) {
          return toast("Avise a alguem que ocorreu esse error!");
        }
      });
  }

  return (
    <LoginPageContent>
      <Brand>
        <DrivenLogo theme={"light"} />
      </Brand>
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
        <SubmitButton disabled={disable}>Entrar</SubmitButton>
      </LoginForm>
    </LoginPageContent>
  );
}
