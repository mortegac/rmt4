import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FormContainer } from "../WrapperFormStyles";
import { typeForm } from "../store/constants";
import { NavigationButtons } from "../components";

const Step05 = (props) => {
  const [formStateStep5, setFormStateStep5] = useState(false);
  const {
    state: { typePerson },
    state: { form },
    textNavigation,
    handlerSubmit,
    formFieldsStep5,
    handlerOnchange,
    checkboxEnabled,
    checkboxDisabled,
  } = props;

  const hiddenStep5SubmitRef = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormStateStep5(true);
    typePerson.totalSteps === typePerson.nextStep
      ? handlerSubmit("submit")
      : handlerSubmit("go");
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        {formFieldsStep5.map((item, index) => {
          const TypeFormComponent = typeForm[item.type];

          return (
            <>
              <TypeFormComponent
                key={`${item.step}-${index}`}
                {...item}
                register={register}
                errors={errors}
                value={form?.step05[item?.name || ""] || ""}
                handlerOnchange={handlerOnchange}
                state={form.step05}
                checked={item.type === "check" ? form.step05[item.name] : null}
                checkboxEnabled={props.formFieldsStep5[1].checkboxEnabled}
                checkboxDisabled={props.formFieldsStep5[1].checkboxDisabled}
              />
            </>
          );
        })}
        <input
          type="submit"
          style={{ display: "none" }}
          ref={hiddenStep5SubmitRef}
        />
        <NavigationButtons
          handlerSubmit={handlerSubmit}
          {...typePerson}
          textNavigation={textNavigation}
          hiddenSubmitRef={hiddenStep5SubmitRef}
          formState={formStateStep5}
        />
      </FormContainer>
    </>
  );
};

export default Step05;
