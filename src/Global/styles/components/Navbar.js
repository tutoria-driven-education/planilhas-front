import styled from "styled-components";

// import { IoCaretDownSharp } from "react-icons/io5";

import DrivenLogo from "../../../Assets/DrivenLogo.js";

export default function Navbar () {
  return (
    <NavbarWrapper>
      <NavbarContent>
        <DrivenLogo />
        <UserOptions>
          Admin
        </UserOptions>
      </NavbarContent>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;

  background-color: #131114;
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

// const DropdownIconWrapper = styled.span`
//   width: 35px;
//   height: 35px;
//   border-radius: 50%;
//   margin-left: 10px;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   font-size: 18px;

//   background-color: #3e3d53;
// `;

const UserOptions = styled.p`
  height: inherit;

  display: flex;
  align-items: center;
  padding-right: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
