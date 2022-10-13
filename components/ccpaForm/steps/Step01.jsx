import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FormContainer } from "../WrapperFormStyles";
import { typeForm } from "../store/constants";
import { NavigationButtons } from "../components";

const Step01 = (props) => {
  const [formStateStep1, setFormStateStep1] = useState(false);

  const {
    state: { typePerson },
    state: { form },
    textNavigation,
    handlerSubmit,
    formFieldsStep1,
    handlerOnchange,
  } = props;

  const hiddenSubmitRef = useRef(null);
  const {
    trigger,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormStateStep1(true);
    typePerson.totalSteps === typePerson.nextStep
      ? handlerSubmit("submit")
      : handlerSubmit("go");
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        {formFieldsStep1.map((item, index) => {
          const TypeFormComponent = typeForm[item.type];

          return (
            <TypeFormComponent
              key={`${item.step}-${index}`}
              {...item}
              register={register}
              errors={errors}
              value={form?.step01[item?.name || ""] || ""}
              handlerOnchange={handlerOnchange}
              form={item.type === "upload" && form}
              trigger={trigger}
            />
          );
        })}

        <input
          type="submit"
          style={{ display: "none" }}
          ref={hiddenSubmitRef}
        />
        <NavigationButtons
          handlerSubmit={handlerSubmit}
          {...typePerson}
          textNavigation={textNavigation}
          hiddenSubmitRef={hiddenSubmitRef}
          formState={formStateStep1}
        />
      </FormContainer>
    </>
  );
};

export default Step01;
