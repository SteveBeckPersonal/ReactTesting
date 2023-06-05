import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Joi from "joi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormProps {
  inputFields: { [key: string]: string };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ inputFields, handleSubmit }) => {
  const [formData, setFormData] = React.useState({});

  const schema = Joi.object(
    Object.fromEntries(
      Object.keys(inputFields).map((fieldName) => [
        fieldName,
        Joi.string()
          .required()
          .messages({
            "string.empty": `${fieldName} is required`,
          }),
      ])
    )
  );

  const validateForm = () => {
    const { error } = schema.validate(formData);
    if (error) {
      // handle validation error
      toast.error(error.message);
      return false;
    }
    return true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      handleSubmit(event);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        {Object.entries(inputFields).map(([name, type], index) => (
          <div key={index}>
            <label htmlFor={name}>{name}</label>
            <input
              data-testid={`input-${name}`}
              id={name}
              name={name}
              type={type}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        ))}
        <button data-testid="form_submission" type="submit">
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
