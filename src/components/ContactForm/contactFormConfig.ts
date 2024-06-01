import { FormConfig } from "./interfaces";

const contactFormConfig: FormConfig[] = [
  {
    inputSize: "input",
    name: "firstName",
    label: "First name:",
    placeholder: "First name",
    type: "text",
    id: "firstName",
  },
  {
    inputSize: "input",
    name: "lastName",
    label: "Last name:",
    placeholder: "Last name",
    type: "text",
    id: "lastName",
  },
  {
    inputSize: "input",
    name: "email",
    label: "Email:",
    placeholder: "Email",
    type: "email",
    id: "email",
  },
  {
    inputSize: "textarea",
    name: "message",
    label: "Message:",
    placeholder: "Message",
    type: "text",
    id: "message",
  },
];

export default contactFormConfig;
