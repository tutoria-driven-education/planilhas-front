import AuthApi from "../Services/auth";
import Execute from "../Services/execute";
import Update from "../Services/update";

export default function useApi() {
  return {
    auth: new AuthApi(),
    execute: new Execute(),
    update: new Update(),
  };
}
