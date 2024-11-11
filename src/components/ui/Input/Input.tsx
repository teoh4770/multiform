// const inputs = [
//   { label: 'First Name', type: 'text', name: 'firstName' },
//   { label: 'Last Name', type: 'text', name: 'lastName' },
//   { label: 'Email', type: 'email', name: 'email' }
// ];

// To use this
// <div key={input.name}>
//   <label htmlFor={input.name}>{input.label}</label>
//   <input type={input.type} name={input.name} id={input.name} />
// </div>

import "./Input.css";

interface IInput {
  name: string;
  type: "text" | "email" | "tel";
  label: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  message?: string;
}

// this way is kinda limited, how should i able to display the respective error message
// for example, if the user didn't actually fill the required form, I should render a required message ("This field is required")
// 
function Input({
  name,
  type = "text",
  label = "place your label here",
  placeholder,
  required = false,
  minLength,
  maxLength,
  pattern,
  message = "Error message",
}: IInput) {
  return (
    <div className="form-control">
      <div className="heading">
        <label htmlFor={name}>{label}</label>
        {/* error message */}
        <span className="message">{message}</span>
      </div>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        required={required}
      />
    </div>
  );
}

export { Input };
