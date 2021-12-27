import styled from "styled-components";
import Login from "..";

const LoginForm = styled.form`
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

export default LoginForm;