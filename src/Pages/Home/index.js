import React, { useState } from "react";
import styled from "styled-components";

import Navbar from "../../global/styles/components/Navbar";

export default function Home() {
    // const [formsData, setFormsData] = useState(null);
    return (
        <Container>
            <Navbar />
            <FormContainer>
                <label htmlFor="link">Link da Planilha de Matrícula</label>
                <input
                    id="link"
                    type="url"
                ></input>            
                <SubmitBtn>Enviar</SubmitBtn>


            </FormContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 90px;
`;


const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    label {
        padding: 15px;
    }
    input {
        width: 350px;
        height: 35px;
        margin: 5px 15px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        font-family: "Ubuntu", sans-serif;
    }
    
    background-color: #3e3d53;

    &:focus {
      outline: 3px solid #f5508e;
    }
    @media (max-width: 992px) {
      width: 100%;
    }
`;

const SubmitBtn = styled.button`
  width: 115px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 15px;

  font-size: 16px;
  font-weight: bold;
  color: #fff;

  background-color: #f5508e;

  transition: filter 0.1s ease;

  &:hover {
    cursor: pointer;

    filter: brightness(0.85);
  }

  &:focus {
    outline: 3px solid #dddbe6;
  }
`;