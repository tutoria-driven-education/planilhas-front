import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import validateMethod from "../../Router/ValidateMethod";
import { useContext } from "react";
import UserContext from "../../Contexts/User";

export default function SharedLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    if (pathname === "/") return;
    validateMethod(navigate, userData, setUserData);
  }, [pathname]);

  return (
    <>
      {pathname !== "/" && <Navbar />}
      <Outlet />
    </>
  );
}
