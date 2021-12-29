import AuthApi from "../Services/auth";
import Execute from "../Services/execute";

export default function useApi() {
    return{
        auth: new AuthApi(),
        execute: new Execute(),
    }
}