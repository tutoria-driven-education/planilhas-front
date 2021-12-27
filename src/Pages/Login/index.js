import React from 'react';
import styled from "styled-components";

import DrivenLogo from "../../Assets/DrivenLogo";

export default function Login() {
    return (
        <SignInPageContent>
        <Brand>
          <DrivenLogo theme={"light"} />
        </Brand>
        <SignInForm >
          <InputGroup>
            <label htmlFor="email">E-mail Driven</label>
            <input
              id="email"
              type="text"
              placeholder="Digite o seu e-mail Driven"
              spellCheck="false"
            ></input>
          </InputGroup>
  
          <InputGroup>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite a sua senha"
            ></input>
          </InputGroup>
    
          <SubmitBtn>Entrar</SubmitBtn>
        </SignInForm>
      </SignInPageContent>
    );
  };

  
  const SignInPageContent = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  
  const Brand = styled.p`
    margin: 25px 0;
    font-size: 42px;
    font-weight: bold;
    color: #fff;
  `;
  
  const SignInForm = styled.form`
    padding: 55px 45px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3e3d53;
    @media (max-width: 992px) {
      width: 100%;
      padding: 25px;
    }
  `;
  
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
  
  const SubmitBtn = styled.button`
    width: 115px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 10px 0;
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