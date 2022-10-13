import { SliceFactory } from "../../../../commonComponents/Containers/";
import React, { useState, useEffect, useRef, useReducer } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import emailjs, { init } from "emailjs-com";
import countries from "../../../../utils/countries.json";
import CustomDropDown from "../../../../commonComponents/Dropdown/CustomDropdown";
import DialCodeDropDown from "../../../../commonComponents/Dropdown/DialCodeDropdown";
import AutocompleteInput from "../../../../commonComponents/Dropdown/AutocompleteInput";
import { Btn } from "../../../../commonComponents/Buttons";
import { Container, Section } from "../../components";

import {
  PageContainer,
  SectionContainer,
  FormContainer,
  HoneypotContainer,
} from "./defaultStyles";

init("user_Aoottg2z6mwF5X4187jV2");

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  jobtitle: "",
  company: "",
  country: "",
  inquiry: "",
  checkbox: "",
};

const inquiries = ["Sales", "Customer Support", "Media and PR", "Other"];

const Base = slice => {
  const {
    firstNameLabel,
    lastNameLabel,
    workEmailLabel,
    title,
    privacyPolicyTerms,
    phoneLabel,
    jobTitleLabel,
    inquiryPlaceholder,
    inquiryLabel,
    description,
    countryPlaceholder,
    countryLabel,
    contactCtaText,
    companyLabel,
  } = slice.primary;
  const hiddenSubmitRef = useRef(null);

  const [isSentEmail, setIsSentEmail] = useState({
    sentEmail: false,
    isFailure: false,
    title: "Page not found 😭",
    text: "We can’t seem to find the page you’re looking for ",
  });

  const router = useRouter();

  const reducer = (state, action) => {
    switch (action.type) {
      case "SAVE_DATA":
        return { ...state, ...action.payload };
      default:
        return { ...state };
    }
  };

  const [emailValue, setEmailValue] = useState(
    router.query ? router.query.email : ""
  );
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [countryValue, setCountryValue] = useState("");
  const [inquiryValue, setInquiryValue] = useState("");
  const [phoneCode, setPhoneCode] = useState("");

  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    setIsSentEmail({
      sentEmail: true,
      isFailure: false,
      title: "Bear with us for a moment ⌛",
      text: "We are submitting your request.",
    });

    const templateParams = {
      from_name: "Partnerships Dandelionpayments",
      to_email: data.email,
      to_name: data.firstname + " " + data.lastname,
      to_phone: phoneCode + data.phone,
      to_company: data.company,
      message: "",
      reply_to: data.email,
      checkboxdata: data.checkboxdata,
    };

    dispatch({
      type: "SAVE_DATA",
      payload: {
        ...formState,
        ...data,
      },
    });

    emailjs.send("service_8wt0lyx", "template_d2o8skr", templateParams).then(
      function (response) {
        setIsSentEmail({
          sentEmail: true,
          isFailure: false,
          title: "Thank you 🎉",
          text: "We’ll get back to as soon as possible.",
          response: response,
        });
      },
      function (error) {
        setIsSentEmail({
          sentEmail: true,
          isFailure: true,
          title: "Page not found 😭",
          text: "We can’t seem to find the page you’re looking for.",
          response: response,
        });
        console.error("FAILED...", error);
      }
    );

    // The following line is to be used when doing the Pardot integration.
    // hiddenSubmitRef.current.click();
  };

  useEffect(() => {
    setEmailValue(router.query.email);
  }, [router.query]);

  useEffect(() => {
    if (countryValue !== "") {
      clearErrors("country");
    }

    if (inquiryValue !== "") {
      clearErrors("inquiry");
    }
  }, [countryValue, inquiryValue]);

  const emailValidation = (e, errors) => {
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        e.target.value
      );
    setEmailValue(e.target.value);
    if (emailPattern) {
      delete errors?.email;
    } else {
    }
  };

  return (
    <PageContainer bgColor={"white"}>
      {isSentEmail.sentEmail ? (
        <Container
          type="solid-white"
          direction={"column"}
          isCenterImage={"center"}
        >
          <Section
            type="solid-white"
            directionItems="column"
            directionItemsMedia="column"
            justifyContent="left"
          >
            <p
              id="formsubmittedgtm"
              style={{ "font-size": "0px", "line-height": "0px" }}
            >
              Google Tag Manager flag
            </p>
            <h2>{isSentEmail.title}</h2>
            <p> {isSentEmail.text}</p>
            <Btn
              url={"/"}
              fullwidth={true}
              type={"primary"}
              innerText={"Take me home"}
              style={{ width: "170px", marginTop: "52px" }}
            />
          </Section>
        </Container>
      ) : (
        /*It is important to clarify that the end goal was to both send an email using emailjs (what was currently)
    being done before this ticket), and also send the submitted info to Pardot. The pardot documentation states
    that this can only be done through an action in a form, and it was not possible to both execute a javascript
    function on handleSubmit and execute the form action. 
    Therefore I put a hidden form that gets the values from the visible one and sends the post action*/

        <SectionContainer>
          <form
            noValidate
            action="https://business.xe.com/l/637751/2022-05-03/3fbbns"
            method="post"
            encType="application/x-www-form-urlencoded"
            id="hiddenForm"
          >
            <input name="firstname" defaultValue={formState.firstname}></input>
            <input name="lastname" defaultValue={formState.lastname}></input>
            <input name="email" defaultValue={formState.email}></input>
            <input
              name="phone"
              defaultValue={phoneCode + formState.phone}
            ></input>
            <input name="jobtitle" defaultValue={formState.jobtitle}></input>
            <input name="company" defaultValue={formState.company}></input>
            <input name="country" defaultValue={countryValue}></input>
            <input name="inquiry" defaultValue={inquiryValue}></input>
            <input
              name="checkbox"
              defaultValue={formState.checkboxdata}
            ></input>
            <input type="submit" ref={hiddenSubmitRef} />
          </form>

          <FormContainer noValidate onSubmit={handleSubmit(onSubmit)}>
            <h2>{title[0].text || "Contact Us"}</h2>
            <p>
              {description[0].text ||
                "Tell us about yourself and we'll connect you with a Dandelion expert who can answer any questions you have."}
            </p>
            <label htmlFor="firstname">
              {firstNameLabel[0].text || "First name"}
            </label>
            <input
              {...register("firstname", {
                required: true,
                minLength: 2,
              })}
              type="text"
              name="firstname"
              id="firstname"
              className={errors.firstname && "error"}
            />
            <span className="error">
              {errors.firstname && "Please enter your first name"}
            </span>

            <label htmlFor="lastname">
              {lastNameLabel[0].text || "Last name"}
            </label>
            <input
              {...register("lastname", {
                required: true,
                minLength: {
                  value: 2,
                },
              })}
              type="text"
              name="lastname"
              id="lastname"
              className={errors.lastname && "error"}
            />
            <span className="error">
              {errors.lastname && "Please enter your last name"}
            </span>

            <label htmlFor="email">
              {workEmailLabel[0].text || "Work email"}
            </label>
            <input
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                minLenght: {
                  value: 2,
                },
              })}
              type="email"
              name="email"
              id="email"
              value={emailValue}
              onChange={e => emailValidation(e, errors)}
              className={errors.email && "error"}
            />
            <span className="error">
              {errors.email && "Please enter your email address"}
            </span>
            <div className="dial-dropdown">
              <label htmlFor="phone">
                {phoneLabel[0].text || "Phone number"}
              </label>
              <div className="dial-items">
                <DialCodeDropDown
                  {...register("phonecode")}
                  name="phonecode"
                  id="phonecode"
                  suggestions={countries}
                  setPhoneCode={setPhoneCode}
                  error={errors.phone}
                  phoneInput={true}
                />
                <input
                  {...register("phone", {
                    required: true,
                    minLength: {
                      value: 6,
                    },
                    maxLength: {
                      value: 12,
                    },
                  })}
                  type="number"
                  name="phone"
                  id="phone"
                  className={errors.phone && "error"}
                />
              </div>
            </div>
            <span className="error">
              {errors.phone && "Please enter a valid phone number"}
            </span>
            <label htmlFor="jobtitle">
              {jobTitleLabel[0].text || "Job title"}
            </label>
            <input
              {...register("jobtitle", {
                required: true,
                minLength: {
                  value: 2,
                },
              })}
              type="text"
              name="jobtitle"
              id="jobtitle"
              className={errors.jobtitle && "error"}
            />
            <span className="error">
              {errors.jobtitle && "Please enter your job title"}
            </span>
            <label htmlFor="company">
              {companyLabel[0].text || "Company name"}
            </label>
            <input
              {...register("company", {
                required: true,
                minLength: {
                  value: 2,
                },
              })}
              type="text"
              name="company"
              id="company"
              className={errors.company && "error"}
            />
            <span className="error">
              {errors.company && "Please enter your company name"}
            </span>
            <div className="country-dropdown">
              <label htmlFor="country">
                {countryLabel[0].text || "Country"}
              </label>
              <AutocompleteInput
                placeholder={countryPlaceholder[0].text || "Select one"}
                register={register("country", { required: true })}
                setValue={setValue}
                type="text"
                name="country"
                countryValue={countryValue}
                setCountryValue={setCountryValue}
                countries={countries}
                error={errors.country}
              />
            </div>
            <span className="error">
              {errors.country && "Please select a country"}
            </span>
            <label htmlFor="inquiry">
              {inquiryLabel[0].text || "Inquiry type"}
            </label>
            <CustomDropDown
              placeholder={inquiryPlaceholder[0].text || "Select one"}
              register={register("inquiry", { required: true })}
              setValue={setValue}
              setInquiryValue={setInquiryValue}
              error={errors.inquiry}
              name="inquiry"
              id="inquiry"
              suggestions={inquiries}
            />

            <span className="error">
              {errors.inquiry?.type === "required" &&
                "Please select an inquiry type"}
            </span>

            <div className="checkbox-container">
              <input
                {...register("checkboxdata", { required: true, checked: true })}
                type="checkbox"
                name="checkboxdata"
                id="checkboxdata"
              />
              <p>
                {privacyPolicyTerms[0].text ||
                  "I want to receive marketing offers in accordance with Dandelion's"}
                <a href={"home"}> Privacy Policy.</a>
              </p>
            </div>

            <HoneypotContainer>
              <label htmlFor="pardot_extra_field">Comments</label>
              <input
                type="text"
                id="pardot_extra_field"
                name="pardot_extra_field"
              />
            </HoneypotContainer>
            <span className="error-cb last">
              {errors.checkboxdata?.type === "required" &&
                "You must accept Dandelion's Data Privacy Policy to proceed"}
            </span>
            <input
              type="submit"
              name="Contact Us"
              value={contactCtaText[0].text || "Contact us"}
            />
          </FormContainer>
        </SectionContainer>
        //The field that is on position absolute, left:-9999px and top:-9999px is a honeycomb field, to detect bots.
      )}
    </PageContainer>
  );
};

let options = {
  sectionContainerProps: { paddingMobileTop: "64px" },
};

export const Default = SliceFactory(Base, options);
