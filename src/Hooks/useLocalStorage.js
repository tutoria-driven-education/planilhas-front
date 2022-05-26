/* eslint-disable no-console */
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const storedItem = window.localStorage.getItem(key);

      return storedItem ? JSON.parse(storedItem) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      if (!value) {
        setStoredValue(null);
        localStorage.removeItem("token");
        return;
      }
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
