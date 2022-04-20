import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 115px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: var(--white-color);
  background-color: var(--pink-color);
  transition: filter 0.1s ease;
  &:hover {
    cursor: pointer;
    filter: brightness(0.85);
  }
  &:focus {
    outline: 3px solid var(--light-grey-color);
  }
`;

export const CancelButton = styled.button`
  width: 115px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: var(--white-color);
  background-color: var(--pink-color);
  transition: filter 0.1s ease;
  &:hover {
    cursor: pointer;
    filter: brightness(0.85);
  }
  &:focus {
    outline: 3px solid var(--light-grey-color);
  }
`;

export const LoginPageContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginForm = styled.form`
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
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const CheckboxGroup = styled.div`
  user-select: none;
  label {
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
    color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  input {
    width: 20px;
    height: 20px;
    margin: 0px;
    margin-left: 10px;
    cursor: pointer;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;
