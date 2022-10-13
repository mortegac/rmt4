import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { SpacerLine } from "../WrapperFormStyles";
import { FormContainer } from "../WrapperFormStyles";
import { typeForm } from "../store/constants";
import { NavigationButtons } from "../components";

const Step02 = (props) => {
  const [formStateStep2, setFormStateStep2] = useState(false);

  const {
    state: { typePerson },
    state: { form },
    textNavigation,
    handlerSubmit,
    formFieldsStep2,
    handlerOnchange,
  } = props;

  const hiddenStep2SubmitRef = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormStateStep2(true);
    typePerson.totalSteps === typePerson.nextStep
      ? handlerSubmit("submit")
      : handlerSubmit("go");
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        {formFieldsStep2.map((item, index) => {
          const TypeFormComponent = typeForm[item.type];

          return (
            <TypeFormComponent
              key={`${item.step}-${index}`}
              {...item}
              register={register}
              errors={errors}
              value={form?.step02[item?.name || ""] || ""}
              handlerOnchange={handlerOnchange}
            />
          );
        })}
        <SpacerLine marginBottom={"52px"} />
        <input
          type="submit"
          style={{ display: "none" }}
          ref={hiddenStep2SubmitRef}
        />
        <NavigationButtons
          handlerSubmit={handlerSubmit}
          {...typePerson}
          textNavigation={textNavigation}
          hiddenSubmitRef={hiddenStep2SubmitRef}
          formState={formStateStep2}
        />
      </FormContainer>
    </>
  );
};

export default Step02;
