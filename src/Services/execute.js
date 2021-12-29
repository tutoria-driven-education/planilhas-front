import api from "./api";

export default class Execute {
  createSpreads(body) {
    return api.post("/execute", { body });
  }
}
