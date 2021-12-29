import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  background-color: var(--light-purple-color);
  border-radius: 20px;
  p {
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    color: var(--white-color);
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  :nth-child(2) {
    margin-top: 30px;
  }
  :last-child {
    margin-bottom: 30px;
  }
  button {
    width: 200px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    color: var(--white-color);
    background-color: var(--pink-color);
    transition: filter 0.1s ease;
    :hover {
      cursor: pointer;
      filter: brightness(0.85);
    }
  }
`;
