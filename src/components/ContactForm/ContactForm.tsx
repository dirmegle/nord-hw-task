import React, { ChangeEvent, FormEvent, useState } from "react";
import TagManager from "react-gtm-module";
import Input, { Textarea } from "../../components/Input/Input";
import contactFormConfig from "./contactFormConfig";
import Button from "../Button/Button";
import { FormErrors, FormObject } from "./interfaces";
import {
  getInitialErrors,
  resetErrors,
  setErrorMessage,
} from "../../utils/handleFormErrors";

export default function ContactForm() {
  const [contactFormErrors, setContactFormErrors] = useState<FormErrors>(
    getInitialErrors(contactFormConfig)
  );

  const [isSubmitButtonDisabled, setSubmitButtonStatus] = useState(true);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    resetErrors(contactFormErrors, name, setContactFormErrors);
    const newErrors = {
      ...contactFormErrors,
      [name]: setErrorMessage(name, value),
    };
    setContactFormErrors(newErrors);
    setButtonStatusBasedOnErrors(newErrors);
  };

  const handleFocusChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const errorMessage = setErrorMessage(name, value);
    const newErrors = { ...contactFormErrors, [name]: errorMessage };
    setContactFormErrors(newErrors);
    setButtonStatusBasedOnErrors(newErrors);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formObject: FormObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    TagManager.dataLayer({
      dataLayer: {
        event: "formSubmission",
        formData: formObject,
      },
    });
  };

  const setButtonStatusBasedOnErrors = (
    newErrors: Record<string, string | undefined>
  ) => {
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    setSubmitButtonStatus(hasErrors);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {contactFormConfig.map(
        ({ inputSize, name, label, placeholder, type, id }) => {
          if (inputSize === "input") {
            return (
              <Input
                key={id}
                id={id}
                name={name}
                label={label}
                placeholder={placeholder}
                type={type}
                hasError={!!contactFormErrors[name]}
                errorMessage={contactFormErrors[name]}
                onChange={handleInputChange}
                onBlur={handleFocusChange}
              />
            );
          } else if (inputSize === "textarea") {
            return (
              <Textarea
                key={id}
                id={id}
                name={name}
                label={label}
                placeholder={placeholder}
                hasError={!!contactFormErrors[name]}
                errorMessage={contactFormErrors[name]}
                onChange={handleInputChange}
                onBlur={handleFocusChange}
              />
            );
          }
          return null;
        }
      )}
      <Button isDisabled={isSubmitButtonDisabled} type="submit">
        Contact now
      </Button>
    </form>
  );
}
