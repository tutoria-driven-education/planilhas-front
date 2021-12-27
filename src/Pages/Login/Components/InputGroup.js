import styled from "styled-components";

const InputGroup = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  label {
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
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
      outline: 3px solid #f5508e;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export default InputGroup;