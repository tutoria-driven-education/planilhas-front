import { Link } from "react-router-dom";
import { Main, Options, Buttons } from "./components/menuWrapper";

export default function Menu() {
  return (
    <Main>
      <Options>
        <p>Opções:</p>
        <Buttons>
          <Link to={"/planilhas"}>
            <button>Gerar planilhas</button>
          </Link>
          <Link to={"/atualizar"}>
            <button>Atualizar planilha</button>
          </Link>
        </Buttons>
      </Options>
    </Main>
  );
}
