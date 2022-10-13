import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  PageContainer,
  SectionContainer,
  FormContainer,
  ContainerItem,
  SpacerLine,
} from "./FormCPPASliceStyles";
import { H3, Dropdown } from "../common";
import { IcoInfo } from "../common/assets/IcoInfo";

import DrowdowmForm from "../common/_dropdown/DrowdowmForm";

const options = [
  {
    value: "Information Collection Practices",
    text: "Information Collection Practices",
  },
  {
    value: "Specific pieces of information",
    text: "Specific pieces of information",
  },
  {
    value: "Information sharing Practices",
    text: "Information sharing Practices",
  },
];

const Input = (register, text, name, errors) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <input
        {...register(name, { required: true, maxLength: 100 })}
        type="text"
        name={name}
        id={name}
      />
      <span className="error">
        {errors[name]?.type === "required" && "Must not exceed 100 characters"}
      </span>
    </>
  );
};

const DropdownForm = (register, text, name, errors) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <ContainerItem>
        <DrowdowmForm
          title={""}
          name={name}
          options={options}
          onChange={(e) => (e) => alert("onchange")}
          // loadingStatus= { evaluateStatus() }
          // value={selections.paymentMethod}
        />
        <a href="#">
          <IcoInfo />
        </a>
      </ContainerItem>
      <span className="error">
        {errors[name]?.type === "required" && "Must not exceed 100 characters"}
      </span>
    </>
  );
};
// const DropdownForm = (register, text, name, errors) => {

//   return (
//     <SelectContainer>
//          <DropboxContainer>
//             <div class="select-dropdown">
//               {/* <Dropdown
//                 options={options}
//                 name='000typeOfRequest'
//                 key={`000typeOfRequest`}
//               value={options.length > 0 ? options[0].value: ''}
//                 // onClick={changeSelect}
//                 // style={{ opacity: loadingStatus ? '0.3' : '1' }}
//               /> */}
//             </div>
//           </DropboxContainer>
//     </SelectContainer>
//   )
// }

const FormCPPASlice = ({ slice }) => {
  const {
    primary: { subtitle_ccpa },
    primary: { text_intro_form_ccpa },
    primary: { text_iam_form_ccpa },

    primary: { text_option_authorized_agent_ccpa },
    primary: { text_option_consumer_ccpa },
    primary: { text_option_legal_guardian_ccpa },

    primary: { text_form_first_name },
    primary: { text_form_middle_name },
    primary: { text_form_last_name },
    primary: { text_form_other_name },
    primary: { text_form_street_address },
    primary: { text_form_city },
    primary: { text_form_state },
    primary: { text_form_postal_code },
    primary: { text_form_other_adresses },
    primary: { text_form_email },
    primary: { text_form_other_email },
    primary: { text_form_phone_number },
    primary: { text_form_other_phone_number },

    primary: { text_form_declaration },

    primary: { icon_fail_file },
    primary: { icon_success_file },
    primary: { text_form_button_upload },
    primary: { text_form_check },

    primary: { text_type_of_request_ccpa },
    primary: { type_of_requests_html_content },
  } = slice;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data)
  };

  const generateHtmlHeader = (object) => {
    try {
      return <div dangerouslySetInnerHTML={{ __html: object }} />;
    } catch (error) {
      return <></>;
    }
  };

  return (
    <PageContainer bgColor={"white"}>
      <SectionContainer>
        <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2>{subtitle_ccpa.text}</h2>
          <p>{generateHtmlHeader(text_intro_form_ccpa.text)}</p>
          <label className="marginBt">{text_iam_form_ccpa.text}</label>

          <ContainerItem>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              checked={true}
            />
              <label for="html">{text_option_authorized_agent_ccpa.text}</label>
          </ContainerItem>
          <ContainerItem>
            <input type="radio" id="htsssml" name="fav_language" value="sss" /> {" "}
            <label for="html">{text_option_consumer_ccpa.text}</label>
          </ContainerItem>
          <ContainerItem className="marginBt labelRadio">
            <input type="radio" id="htsssml" name="fav_language" value="sss" /> {" "}
            <label for="html">{text_option_legal_guardian_ccpa.text}</label>
          </ContainerItem>

          {/* <ul>
            <li>{text_option_authorized_agent_ccpa.text}</li>
            <li>{text_option_consumer_ccpa.text}</li>
            <li>{text_option_legal_guardian_ccpa.text}</li>
          </ul> */}

          {/* { Input(register, text_type_of_request_ccpa.text, 'typeOfRequest', errors) } */}
          {DropdownForm(
            register,
            text_type_of_request_ccpa.text,
            "typeOfRequest",
            errors
          )}

          <SpacerLine />
          <H3 textColor="rgba(0, 17, 51, 0.3)">Consumer information (1/4)</H3>

          {Input(register, text_form_first_name.text, "firtName", errors)}
          {Input(register, text_form_middle_name.text, "midleName", errors)}
          {Input(register, text_form_last_name.text, "lastName", errors)}
          {Input(register, text_form_other_name.text, "otherName", errors)}
          {Input(register, text_form_email.text, "emailName", errors)}
          {Input(register, text_form_other_email.text, "otherEmail", errors)}
          {Input(register, text_form_phone_number.text, "phoneNumber", errors)}
          {Input(
            register,
            text_form_other_phone_number.text,
            "otherPhoneNumber",
            errors
          )}

          <span className="error-cb last">
            {errors.checkboxdata?.type === "required" &&
              "You must accept Dandelion's Data Privacy Policy to proceed"}
          </span>
          <input type="submit" name="Continue" value="Continue" />
        </FormContainer>
      </SectionContainer>
    </PageContainer>
  );
};

export default FormCPPASlice;
