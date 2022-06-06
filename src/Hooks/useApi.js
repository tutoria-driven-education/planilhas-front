import AuthApi from "../Services/auth";
import Presence from "../Services/presence";
import Update from "../Services/update";
import Career from "../Services/career";

export default function useApi() {
  return {
    auth: new AuthApi(),
    presence: new Presence(),
    update: new Update(),
    career: new Career(),
  };
}
