import api from "./api";

export default class Presence {
  createPresence(body) {
    return api.post("/execute", body);
  }
}
