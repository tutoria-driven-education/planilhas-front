import AuthApi from "../Services/auth";
import Execute from "../Services/execute";
import UserGroup from "../Services/userGroup";
import User from "../Services/user";

export default function useApi() {
    return{
        auth: new AuthApi(),
        execute: new Execute(),
        userGroup: new UserGroup(),
        user: new User(),
    }
}