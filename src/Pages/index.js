import { Routes as Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

export default function Pages() {
  return (
    <Switch>
      <Route path="/" exact element={<Login />}></Route>
      <Route path="/home" exact element={<Home />}></Route>
    </Switch>
  );
}
