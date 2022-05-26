import { Routes as Switch, Route } from "react-router-dom";
import Login from "./Login";
import Menu from "./Menu";
import Spreads from "./Spreads";
import Update from "./Update";
import SharedLayout from "./SharedLayout";
import ErrorMessage from "./ErrorMessage";

export default function Pages() {
  return (
    <Switch>
      <Route path={"/"} element={<SharedLayout />}>
        <Route index element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/planilhas" element={<Spreads />} />
        <Route path="/atualizar" element={<Update />} />
        <Route path="*" element={<ErrorMessage />} />
      </Route>
    </Switch>
  );
}
