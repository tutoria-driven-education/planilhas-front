import api from "./api";

export default class Career {
  createCareer(body) {
    return api.post("/career", body);
  }
}
