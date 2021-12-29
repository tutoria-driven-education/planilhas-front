import AuthApi from "../Services/auth";

export default function useApi() {
    return{
        auth: new AuthApi(),
    }
}