import { Fragment } from "react";
import styled from "styled-components";

interface InputProps {
  type: string;
  register?: any;
  errors?: any;
  keyName: string;
  placeholder: string;
  value?: any;
  validate?: any;
  minLength?: string;
  required?: boolean;
}

const Field = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 220px;
  margin-right: 10px;
  padding: 10px 20px 10px 10px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 15px;
`;

const Required = styled.span`
  display: block;
  font-size: 12px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  margin: 3px 3px 0;
`;

const Index = (props: InputProps) => {
  const {
    type,
    register,
    errors,
    keyName,
    placeholder,
    value,
    validate,
    minLength,
    required,
  } = props;
  return (
    <Fragment>
      <Field>
        <Input
          {...register(keyName, {
            required: required,
            validate: validate,
            minLength: minLength,
            valueAsNumber: type === "number" ? true : false,
          })}
          value={value}
          type={type}
          placeholder={placeholder}
        />
        {errors[keyName] && <Required>Este campo es requerido</Required>}
      </Field>
    </Fragment>
  );
};

export default Index;
