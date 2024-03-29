import styled from "styled-components";

export const FlagsPageContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const PresenceForm = styled.form`
  padding: 30px 45px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light-purple-color);
  @media (max-width: 992px) {
    width: 100%;
    padding: 25px;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  label {
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
    color: var(--white-color);
  }
  input {
    width: 350px;
    height: 35px;
    padding: 0 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-family: "Ubuntu", sans-serif;
    &:focus {
      outline: 3px solid var(--pink-color);
    }
    @media (max-width: 992px) {
      width: 100%;
    }
  }
  span {
    color: var(--white-color);
  }
  :disabled {
    cursor: default;
    background-color: var(--light-grey-color);
    filter: brightness(1);
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 5px;
`;

export const Button = styled.button`
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
  :focus {
    outline: 3px solid var(--light-grey-color);
  }
  :disabled {
    cursor: default;
    background-color: var(--light-grey-color);
    filter: brightness(1);
  }
`;
