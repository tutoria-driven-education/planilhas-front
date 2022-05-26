import styled from "styled-components";
export default function ErrorMessage() {
  return (
    <Main>
      <h1>Não tem nada nessa página, você está perdido? 🤔</h1>
    </Main>
  );
}

const Main = styled.main`
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
