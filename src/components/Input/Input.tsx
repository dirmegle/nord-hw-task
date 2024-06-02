import classNames from "classnames";
import { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  id: string;
  type?: string;
  errorMessage?: string;
  hasError?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Input({
  name,
  label,
  placeholder,
  errorMessage,
  id,
  type,
  hasError = false,
  onChange,
  onBlur,
}: InputProps) {
  const inputClasses = classNames(styles.input, {
    [styles.inputInError]: hasError,
  });

  return (
    <div>
      <label htmlFor={id} className={label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={inputClasses}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}

export function Textarea({
  name,
  label,
  placeholder,
  errorMessage,
  id,
  hasError = false,
  onChange,
  onBlur,
}: InputProps) {
  const inputClasses = classNames(styles.input, {
    [styles.inputInError]: hasError,
  });
  return (
    <div>
      <label htmlFor={id} className={label}>
        {label}
      </label>
      <textarea
        rows={5}
        id={id}
        name={name}
        placeholder={placeholder}
        className={inputClasses}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}
