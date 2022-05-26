import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Contexts/User";
import GlobalStyles from "./Components/GlobalStyles";
import { ToastContainer } from "react-toastify";
import Pages from "./Pages";

export default function App() {
  return (
    <>
      <UserProvider>
        <ToastContainer />
        <GlobalStyles />
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
