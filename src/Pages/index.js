import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Menu from "./Menu";
import Spreads from "./Spreads";
import NewClass from "./NewClass";
import Register from "./Register";
import { useContext } from "react";
import UserContext from "../Contexts/User";
import ConditionalRouter from "../Router/ConditionalRouter";

export default function Pages() {
  return (
    <Switch>
      <Route exact path={"/"} component={Login} />
      <ConditionalRouter
        path="/menu"
        exact
        check={ensureToken}
        component={Menu}
      ></ConditionalRouter>
      <ConditionalRouter
        exact
        path={"/planilhas"}
        check={ensureToken}
        component={Spreads}
      ></ConditionalRouter>
      <ConditionalRouter
        exact
        path={"/register"}
        check={ensureToken}
        component={Register}
      ></ConditionalRouter>
      <ConditionalRouter
        exact
        path={"/new-class"}
        check={ensureToken}
        component={NewClass}
      ></ConditionalRouter>
    </Switch>
  );
}

function ensureToken() {
  const { userData } = useContext(UserContext);
  const parsedUserData = JSON.parse(userData);
  return [
    {
      to: "/",
      check: () => parsedUserData?.access_token,
      message: "Por favor, faça login!",
    },
  ];
}
