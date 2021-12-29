import api from "./api";

export default class Auth {
  getAuth() {
    return api.get("/auth");
  }
  sendAuth(code) {
    return api.post("/auth", { code });
  }
}
