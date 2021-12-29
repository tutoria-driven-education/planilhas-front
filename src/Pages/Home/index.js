import { useContext, useState } from "react";
import Navbar from "../../Global/styles/components/Navbar";
import {
  Main,
  Container,
  FormContainer,
  SubmitBtn,
} from "./components/HomeWrapper";
import useApi from "../../Hooks/useApi";
import Swal from "sweetalert2";
import UserContext from "../../Contexts/User";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [fetchData, setFetchData] = useState("");
  const [disable, setDisable] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const api = useApi();
  console.log(userData);

  function submitHandler(event) {
    event.preventDefault();
    setDisable(true);
    api.auth.getAuth().then((res) => {
      setDisable(false);
      window.open(`${res.data.link}`, "_blank");
      Swal.fire({
        title:
          "Uma nova janela será aberta, caso apareça um aviso não se preocupe, clique em avançado e aceite as permissões que está sendo pedido, após autorizar volte aqui e cole o código 😁",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Enviar código",
        showLoaderOnConfirm: true,
        preConfirm: (code) => {
          api.auth.sendAuth(code).then((res) => {
            const stringfyToken = JSON.stringify(res.data.token);
            setUserData(stringfyToken);
            navigate("/menu");
          });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(result);
          Swal.fire("Acesso confirmado!");
        }
      });
    });
  }

  return (
    <Main>
      <Navbar />
      <Container>
        <FormContainer onSubmit={submitHandler}>
          <label htmlFor="link">Link da Planilha de Matrícula</label>
          <input
            value={fetchData}
            onChange={(e) => setFetchData(e.target.value)}
            id="link"
            type="url"
            disabled={disable}
          ></input>
          <SubmitBtn disabled={disable}>Enviar</SubmitBtn>
        </FormContainer>
      </Container>
    </Main>
  );
}
