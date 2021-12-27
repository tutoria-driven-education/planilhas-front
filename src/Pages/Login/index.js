import React, {useContext, useState} from 'react';

import DrivenLogo from "../../Assets/DrivenLogo";
import LoginPageContent from './Components/LoginPageContent';
import Brand from './Components/Brand';
import LoginForm from './Components/LoginForm';
import InputGroup from './Components/InputGroup';
import SubmitButton from './Components/SubmitButton';
// import UserContext from '../../Contexts/User';

export default function Login() {
    const [loginData, setLoginData] = useState(null);
    // const {setUserData} = useContext(UserContext);

    function getFormInputs(bodyKey, input) {
        setLoginData({ ...loginData, [bodyKey]: input });
    }

    function submitHandler(event) {
        event.preventDefault();
    
        const validate = loginData.email === "thiago" && loginData.password === "1234";

        if(validate) {
            alert('foi');
        } else {
            alert('Email ou senha incorretos');

        }
        // api
        //   .post("/auth", loginData)
        //   .then(({ data }) => {
        //     enqueueSnackbar("Autenticado com sucesso", {
        //       variant: "success",
        //     });
    
        //     setUserData(data);
    
        //     navigate("/collection/");
        //   })
        //   .catch((err) => {
        //     alert('Email ou senha incorretos');
        //   });
      }

    return (
        <LoginPageContent>
        <Brand>
          <DrivenLogo theme={"light"} />
        </Brand>
        <LoginForm onSubmit={submitHandler}>
          <InputGroup>
            <label htmlFor="email">E-mail Driven</label>
            <input
              id="email"
              type="text"
              placeholder="Digite o seu e-mail Driven"
              spellCheck="false"
              onChange={(event) => getFormInputs("email", event.target.value)}
            ></input>
          </InputGroup>
  
          <InputGroup>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite a sua senha"
              onChange={(event) => getFormInputs("password", event.target.value)}
            ></input>
          </InputGroup>
    
          <SubmitButton>Entrar</SubmitButton>
        </LoginForm>
      </LoginPageContent>
    );
  };

  

  

  
