import React from "react";
import { FormConfig, FormErrors } from "../components/ContactForm/interfaces";
import validateInput from "./handleFormValidation";

export function setErrorMessage(name: string, value: string): string {
  return validateInput(name, value);
}

export function resetErrors(
  errors: FormErrors,
  name: string,
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>
) {
  if (errors[name]) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }
}

export function getInitialErrors(config: FormConfig[]) {
  return config.reduce((accumulator: Record<string, string>, field) => {
    accumulator[field.name] = "";
    return accumulator;
  }, {});
}
