import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { SpacerLine } from "../WrapperFormStyles";
import { FormContainer } from "../WrapperFormStyles";
import { typeForm } from "../store/constants";
import { NavigationButtons } from "../components";

const Step04 = (props) => {
  const [formStateStep4, setFormStateStep4] = useState(false);

  const {
    state: { typePerson },
    state: { form },
    textNavigation,
    handlerSubmit,
    formFieldsStep4,
    handlerOnchange,
  } = props;

  const hiddenStep4SubmitRef = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormStateStep4(true);
    typePerson.totalSteps === typePerson.nextStep
      ? handlerSubmit("submit")
      : handlerSubmit("go");
  };
  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        {formFieldsStep4.map((item, index) => {
          const TypeFormComponent = typeForm[item.type];

          return (
            <TypeFormComponent
              key={`${item.step}-${index}`}
              {...item}
              register={register}
              errors={errors}
              value={form?.step04[item?.name || ""] || ""}
              handlerOnchange={handlerOnchange}
              form={item.name === "uploadAgent" && form}
            />
          );
        })}
        <SpacerLine marginBottom={"52px"} />
        <input
          type="submit"
          style={{ display: "none" }}
          ref={hiddenStep4SubmitRef}
        />
        <NavigationButtons
          handlerSubmit={handlerSubmit}
          {...typePerson}
          textNavigation={textNavigation}
          hiddenSubmitRef={hiddenStep4SubmitRef}
          formState={formStateStep4}
        />
      </FormContainer>
    </>
  );
};

export default Step04;
