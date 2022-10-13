import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { SpacerLine } from "../WrapperFormStyles";
import { FormContainer } from "../WrapperFormStyles";
import { typeForm } from "../store/constants";
import { NavigationButtons } from "../components";

const Step03 = (props) => {
  const [formStateStep3, setFormStateStep3] = useState(false);

  const {
    state: { typePerson },
    state: { form },
    textNavigation,
    handlerSubmit,
    formFieldsStep3,
    handlerOnchange,
  } = props;
  const hiddenStep3SubmitRef = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormStateStep3(true);
    typePerson.totalSteps === typePerson.nextStep
      ? handlerSubmit("submit")
      : handlerSubmit("go");
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        {formFieldsStep3.map((item, index) => {
          const TypeFormComponent = typeForm[item.type];

          return (
            <TypeFormComponent
              key={`${item.step}-${index}`}
              {...item}
              register={register}
              errors={errors}
              value={form?.step03[item?.name || ""] || ""}
              handlerOnchange={handlerOnchange}
            />
          );
        })}
        <input
          type="submit"
          style={{ display: "none" }}
          ref={hiddenStep3SubmitRef}
        />
        <NavigationButtons
          handlerSubmit={handlerSubmit}
          {...typePerson}
          textNavigation={textNavigation}
          hiddenSubmitRef={hiddenStep3SubmitRef}
          formState={formStateStep3}
        />
      </FormContainer>
    </>
  );
};

export default Step03;
