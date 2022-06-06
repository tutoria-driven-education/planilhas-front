import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import DrivenLogo from "../../Assets/DrivenLogo.js";
import UserContext from "../../Contexts/User.js";
import {
  NavbarContent,
  NavbarWrapper,
  UserOptions,
  IconWrapper,
} from "./components/NavbarWrapper";

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
