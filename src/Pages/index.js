import { Routes as Switch, Route } from "react-router-dom";
import Login from "./Login";
import Menu from "./Menu";
import Presence from "./Presence";
import Update from "./Update";
import SharedLayout from "./SharedLayout";
import ErrorMessage from "./ErrorMessage";
import Career from "./Career";

export default function Pages() {
  return (
    <Switch>
      <Route path={"/"} element={<SharedLayout />}>
        <Route index element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/planilhas" element={<Presence />} />
        <Route path="/atualizar" element={<Update />} />
        <Route path="/carreira" element={<Career />} />
        <Route path="*" element={<ErrorMessage />} />
      </Route>
    </Switch>
  );
}
