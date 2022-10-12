import api from "./api";

export default class Flags {
  updateFlags(body) {
    return api.post("/flags", body);
  }
}
