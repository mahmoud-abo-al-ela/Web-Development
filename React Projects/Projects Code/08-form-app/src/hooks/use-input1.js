import { useState } from "react";

const UseInput = (validation) => {
  const [isValue, setIsValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validation(isValue);
  const error = !isValid && isTouched;

  const inputChangeHandler = (e) => {
    setIsValue(e.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setIsValue("");
    setIsTouched(false);
  };
  return {
    isValue,
    isValid,
    error,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default UseInput;
