import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoEnterOutline } from "react-icons/io5";
import DrivenLogo from "../../Assets/DrivenLogo.js";
import UserContext from "../../Contexts/User.js";

export default function Navbar() {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  function logout() {
    setUserData(null);
    navigate("/");
  }

  return (
    <NavbarWrapper>
      <NavbarContent>
        <Link to={"/menu"}>
          <DrivenLogo />
        </Link>
        <UserOptions>
          <p>Admin</p>
          <IconWrapper onClick={logout}>
            <IoEnterOutline />
          </IconWrapper>
        </UserOptions>
      </NavbarContent>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  background-color: var(--navbar-color);
`;

const NavbarContent = styled.div`
  width: 1200px;
  height: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const IconWrapper = styled.span`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: var(--light-purple-color);
  cursor: pointer;
`;

const UserOptions = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  padding-right: 20px;
  font-size: 16px;
  font-weight: bold;
  color: var(--white-color);
`;
