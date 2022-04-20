import api from "./api";

export default class Update {
  updateSpread(body) {
    return api.post("/update", body);
  }
}
