import api from "./api";

export default class User {
    createUser(body) {
        return api.post("/user", body);
    }
    getAllUser() {
        return api.get("/user");
    }
}