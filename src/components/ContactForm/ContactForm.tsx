import React, { ChangeEvent, FormEvent, useState } from "react";
import TagManager from "react-gtm-module";
import Input, { Textarea } from "../../components/Input/Input";
import contactFormConfig from "./contactFormConfig";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { FormErrors, FormObject } from "./interfaces";
import {
  getInitialErrors,
  resetErrors,
  setErrorMessage,
} from "../../utils/handleFormErrors";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const [contactFormErrors, setContactFormErrors] = useState<FormErrors>(
    getInitialErrors(contactFormConfig)
  );

  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [isSubmitButtonDisabled, setSubmitButtonStatus] = useState(true);
  const [isMessageSent, setMessageSentStatus] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    resetErrors(contactFormErrors, name, setContactFormErrors);
    setFormValues({ ...formValues, [name]: value });
    const newErrors = {
      ...contactFormErrors,
      [name]: setErrorMessage(name, value),
    };
    setContactFormErrors(newErrors);
    setButtonStatusBasedOnErrors(newErrors, formValues);
  };

  const handleFocusChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const errorMessage = setErrorMessage(name, value);
    const newErrors = { ...contactFormErrors, [name]: errorMessage };
    setContactFormErrors(newErrors);
    setButtonStatusBasedOnErrors(newErrors, formValues);
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
        formData: formObject,
      },
    });

    setMessageSentStatus(true);
  };

  const setButtonStatusBasedOnErrors = (
    newErrors: Record<string, string | undefined>,
    newValues: Record<string, string>
  ) => {
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    const allFieldsFilled = contactFormConfig.every(
      ({ name }) => newValues[name]
    );
    setSubmitButtonStatus(hasErrors || !allFieldsFilled);
  };

  return isMessageSent ? (
    <div>
      <p className={styles.paragraphText}>
        Message was sent successfully.
        <br />
        Thank you for reaching out. We will get back to you as soon as possible!
      </p>
      <Button onClick={() => navigate("/")}>Back to homepage</Button>
    </div>
  ) : (
    <div>
      <p className={styles.paragraphText}>
        Please note that all the fields are required.
      </p>
      <form onSubmit={handleSubmit} noValidate className={styles.containerForm}>
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
        <div className={styles.containerButton}>
          <Button isDisabled={isSubmitButtonDisabled} type="submit">
            Contact now
          </Button>
        </div>
      </form>
    </div>
  );
}
