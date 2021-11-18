import { useState } from "react";

export const useInputs = () => {
  const [isActive, setIsActive] = useState(false);
  const [yepActive, setYepActive] = useState(false);
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  const emailInput = (text) => {
    setValue(text);
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const passwordInput = (text) => {
    setPassword(text);
    if (text !== "") {
      setYepActive(true);
    } else {
      setYepActive(false);
    }
  };

  return {
    isActive,
    yepActive,
    value,
    password,
    emailInput,
    passwordInput,
  };
};
