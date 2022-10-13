import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { FormContainer } from "./inputStyles";

const Input = (props) => <InputBase {...props} />;

const InputBase = ({ ...rest }) => {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    router.push(
      {
        pathname: "/contact-us",
        query: { email: data.email },
      },
      "/contact-us"
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate {...rest}>
      <div direction="column">
        <input
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
          placeholder={rest.inputPlaceholder[0].text || "Your work email"}
          type="email"
          required
          id="email"
        />
        <input
          type="submit"
          name="Contact Us"
          value={rest.ctaText[0].text || "Contact us"}
        />
      </div>
    </FormContainer>
  );
};

export default Input;
