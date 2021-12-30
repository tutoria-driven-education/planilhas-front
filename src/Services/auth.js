import api from "./api";

export default class Auth {
  getAuth(fetchData) {
    return api.post("/auth", fetchData);
  }
  sendAuth(code) {
    return api.post("/auth/token", { code });
  }
}
