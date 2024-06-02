export function validateIfEmailInputCorrect(value: string) {
  const regexForEmailValidation =
    /^[\p{L}!#-'*+\-/\d=?^-~]+(.[\p{L}!#-'*+\-/\d=?^-~])*@[^@\s]{2,}$/u;
  if (!regexForEmailValidation.test(value)) {
    return "Please enter a valid email address";
  }
  return "";
}

export function validateIfInputEmpty(value: string) {
  if (!value) {
    return "Field cannot be empty";
  }
  return "";
}

export default function validateInput(name: string, value: string) {
  const errorMessage = validateIfInputEmpty(value);
  if (errorMessage === "") {
    if (name === "email") {
      return validateIfEmailInputCorrect(value);
    }
  }
  return errorMessage;
}
