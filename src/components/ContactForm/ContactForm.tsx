import { FormEvent } from "react";
import TagManager from "react-gtm-module";
import Input, { Textarea } from "../../components/Input/Input";
import contactFormConfig from "./contactFormConfig";
import { FormObject } from "./interfaces";

export default function ContactForm() {
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

    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "formSubmission",
    //   formData: formObject,
    // });
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
                onChange={() => console.log("Change")}
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
                onChange={() => console.log("Change")}
              />
            );
          }
          return null;
        }
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
