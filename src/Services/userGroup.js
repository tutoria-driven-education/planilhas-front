import api from "./api";

export default class UserGroup {
  getUserRole() {
    return api.get("/userGroup");
  }
}
