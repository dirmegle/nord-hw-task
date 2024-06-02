export interface FormConfig {
  inputSize: "input" | "textarea";
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  id: string;
}

export interface FormObject {
  [key: string]: FormDataEntryValue;
}

export interface FormErrors {
  [name: string]: string | undefined;
}
