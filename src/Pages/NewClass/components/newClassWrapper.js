import styled from "styled-components";
import SelectLib from "react-select";

export const DecisionButton = styled.button`
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

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  margin-bottom: 75px;
`;

export const Form = styled.form`
  padding: 30px 45px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light-purple-color);
  min-width: 500px;
  p {
    margin: 10px 0;
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--white-color);
  }
  @media (max-width: 992px) {
    width: 100%;
    padding: 25px;
  }
`;

export const SelectHolder = styled.div`
  width: 100%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 5px;
  padding-top: 3px;
  padding-left: 12px;
  color: var(--pink-color);
  font-size: 1rem;
  margin-bottom: 10px;
  button {
    width: 115px;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const TutorsSelect = styled(SelectLib)`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 5px;
  color: var(--pink-color);
  font-size: 1rem;
  margin-bottom: 10px;
  button {
    width: 115px;
  }
  div {
    background-color: ${(props) => (props.isDisabled ? "black" : "")};
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 18px;
    font-weight: bold;
    color: var(--white-color);
  }
  input {
    width: 100%;
    height: 35px;
    padding: 0 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 10px;
    font-family: "Ubuntu", sans-serif;
    &:focus {
      outline: 3px solid var(--pink-color);
    }
    @media (max-width: 992px) {
      width: 100%;
    }
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

export const TutorHolder = styled.div`
  display: flex;
  p {
    padding: 0px 10px;
  }
  button {
    width: 30px;
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
  }
`;
