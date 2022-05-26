import { toast } from "react-toastify";

export default function validateMethod(navigate, userData, setUserData) {
  const parsedUserData = JSON.parse(userData);
  const validations = allValidations(parsedUserData);

  window.onstorage = (event) => {
    if (event.key === "token") {
      setUserData(event.newValue);
    }
  };

  for (const condition of validations) {
    if (!condition.check) {
      if (condition.message) {
        toast(condition.message);
      }
      navigate(`${condition.to}`);
    }
  }
}

function allValidations(parsedUserData) {
  return [
    {
      to: "/",
      check: parsedUserData?.access_token,
      message: "Por favor, faça login!",
    },
  ];
}
