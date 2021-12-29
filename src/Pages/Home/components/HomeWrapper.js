import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 90px;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  label {
    padding: 15px;
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
    background-color: ${(props) => props.disable};
    &:focus {
      outline: 3px solid var(--pink-color);
    }
    :disabled {
      cursor: default;
    }
  }
  background-color: var(--light-purple-color);
  &:focus {
    outline: 3px solid var(--pink-color);
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const SubmitBtn = styled.button`
  width: 115px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 15px;

  font-size: 16px;
  font-weight: bold;
  color: var(--white-color);

  background-color: var(--pink-color);

  transition: filter 0.1s ease;

  :hover {
    cursor: pointer;

    filter: brightness(0.85);
  }

  &:focus {
    outline: 3px solid var(--light-grey-color);
  }
  :disabled {
    cursor: default;
    background-color: var(--light-grey-color);
  }
`;
