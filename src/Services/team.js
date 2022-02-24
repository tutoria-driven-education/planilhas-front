import api from "./api";

export default class Team {
  createTeam(body) {
    return api.post("/team", body);
  }
}
