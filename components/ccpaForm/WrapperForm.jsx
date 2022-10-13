import React, { useState, useReducer } from "react";

import { ccpaReducer, initialState } from "./store/reducer";
import {
  cn,
  optionsLabel,
  buttonsNavigation,
  formFieldsStep1,
  formFieldsStep2,
  formFieldsStep3,
  formFieldsStep4,
  formFieldsStep5,
} from "./store/constants";
import {
  PageContainer,
  SectionContainer,
  ContainerForm,
} from "./WrapperFormStyles";
import { generateHtmlHeader } from "../../utils/htmlHandling";
import { getfetchCCPA } from "../../services/CCPA.services";
import { HeaderForm } from "./components";
import { H2, Text } from "../common/";
import { usStatesAndCities } from "../../utils/usStatesAndCities";

import {
  StepsConsumer,
  StepsParentLegal,
  StepsAuthorizedAgent,
} from "./steps/";
import { keyframes } from "styled-components";

const WrapperForm = (props) => {
  if (props.error) {
    return <>{console.error(props, "track-a-transfer")}</>;
  }

  const {
    subtitle_ccpa,
    text_intro_form_ccpa,
    text_iam_form_ccpa,
    text_option_authorized_agent_ccpa,
    text_option_consumer_ccpa,
    text_option_legal_guardian_ccpa,
    text_type_of_request_ccpa,
    type_of_requests_html_content,

    text_form_first_name,
    text_form_middle_name,
    text_form_last_name,
    text_form_other_name,
    text_form_email,
    text_form_other_email,
    text_form_phone_number,
    text_form_other_phone_number,

    text_form_street_address,
    text_form_apt_address,
    text_form_city,
    text_form_state,
    text_form_postal_code,
    text_form_other_adresses,
    text_form_declaration,
    icon_fail_file,
    text_form_file_error_upload,
    icon_success_file,
    radio_button_enabled,
    radio_button_disabled,
    checkbox_enabled,
    checkbox_disabled,

    text_form_file_ok_upload,
    text_form_button_upload,
    text_form_title_upload,

    text_form_check,
    text_form_button_back,
    text_form_button_continue,
    text_form_button_submit,
  } = props;

  const [isWasSentApi, setIsWasSentApi] = useState({
    isOk: false,
    title: "",
    text: "",
  });

  const [state, dispatch] = useReducer(ccpaReducer, initialState);

  const getFindCities = (state) => {
    const cities = usStatesAndCities[state];
    if (Array.isArray(cities))
      return cities.length === 1
        ? cities
        : cities.sort((a, b) => a.value.localeCompare(b.value));

    if (cities === undefined) {
      return state;
    }
    return state;
  };

  const typeOfStepComponents = {
    ["consumer"]: StepsConsumer,
    ["parent-legal"]: StepsParentLegal,
    ["authorized-agent"]: StepsAuthorizedAgent,
  };
  const TypeOfStepComponent = typeOfStepComponents[state.typePerson.key];

  const [typeOfRequest, setTypeOfRequest] = useState("");

  const handlerOnchange = (type) => {
    const { target, key, step, payload } = type;
    let newState = {
      ...state.form[step],
      ...payload,
    };

    if (target.name === "state")
      dispatch({ type: "SET_STATE", payload: target.value });
    if (target.name === "stateAgent")
      dispatch({ type: "SET_STATE_AGENT", payload: target.value });
    if (target.name === "form") {
      dispatch({
        type: "SET_FORM",
        payload: { [step]: { ...newState } },
      });

      if (key === "state") {
        let city = getFindCities(target.value)[0].value;
        if (city === undefined) {
          city = target.value;
        }
        dispatch({ type: "SET_STATE", payload: target.value });
        dispatch({
          type: "SET_CITY",
          payload: city,
        });
      }
      if (key === "stateAgent") {
        let city = getFindCities(target.value)[0].value;
        if (city === undefined) {
          city = target.value;
        }
        dispatch({ type: "SET_STATE_AGENT", payload: target.value });
        dispatch({
          type: "SET_CITY_AGENT",
          payload: city,
        });
      }
      if (key === "city") {
        dispatch({ type: "SET_CITY", payload: target.value });
      }
      if (key === "cityAgent") {
        dispatch({ type: "SET_CITY_AGENT", payload: target.value });
      }
    }
  };
  const handlerSubmit = async (type) => {
    if (type === "submit") {
      if (typeof window !== "undefined") {
        window.scrollTo(
          0,
          document.getElementsByClassName("marginBt")[0].getBoundingClientRect()
            .top
        );
        window.scrollTo(
          0,
          document.getElementsByClassName("marginBt")[0].getBoundingClientRect()
            .top - 200
        );
      }

      setIsWasSentApi({
        isOk: true,
        title: "We are processing your request ⏳",
        text: "Bear with us for a moment",
      });

      const responseApi = await getfetchCCPA({
        form: {
          ...state.form,
          typeRequest: state.typeRequest,
          typIdentification: state.typePerson.key,
        },
        state: state.state,
        city: state.city,
        stateAgent: state.stateAgent,
        cityAgent: state.cityAgent,
      });
      
      const status = responseApi?.response?.success || false;

      setIsWasSentApi(
        status
          ? {
              isOk: true,
              title: "Thank you 🎉",
              text: "We’ll get back to you as soon as possible",
            }
          : {
              isOk: "error",
              title: "There was an error on our side",
              text: "We are working to fix this issue",
            }
      );
      return null;
    }

    let currentValue = 0;
    let prevValue = 0;
    if (type === "go") {
      currentValue = state.typePerson.currentStep + 1;
      prevValue = state.typePerson.currentStep - 1;
      if (typeof window !== "undefined") {
        window.scrollTo(
          0,
          document.getElementsByClassName("marginBt")[0].getBoundingClientRect()
            .top
        );
        window.scrollTo(
          0,
          document.getElementsByClassName("marginBt")[0].getBoundingClientRect()
            .top - 200
        );
      }
    } else if (type === "back") {
      currentValue = state.typePerson.currentStep - 1;
      prevValue = state.typePerson.currentStep - 1;
      if (typeof window !== "undefined") {
        window.scrollTo(
          0,
          document.getElementsByClassName("marginBt")[0].getBoundingClientRect()
            .top
        );
        window.scrollTo(
          0,
          document.getElementsByClassName("marginBt")[0].getBoundingClientRect()
            .top - 200
        );
      }
    }

    dispatch({
      type: cn.CHANGE_STEP,
      payload: {
        ...state.typePerson,
        currentStep: currentValue,
        nextStep: currentValue,
        prevStep: prevValue,
      },
    });
  };

  return (
    <>
      <PageContainer bgColor={"white"}>
        
        <SectionContainer>
          <ContainerForm className={isWasSentApi.isOk && "thankYouSection"}>
            {isWasSentApi.isOk === true || isWasSentApi.isOk === "error" ? (
              <>
                <H2>{isWasSentApi.title}</H2>
                <Text>{isWasSentApi.text}</Text>
              </>
            ) : (
              <>
                <H2>{subtitle_ccpa[0]?.text || "Request form"}</H2>
                <Text
                  style={{ "margin-top": "30px", "margin-bottom": "23px" }}
                  className={"firstParagraph"}
                >
                  {generateHtmlHeader(text_intro_form_ccpa[0]?.text || "You must be 18 years of age or older to make a request; <b>if you are under 18</b>, your parent or legal guardian must make the request for you.")}
                </Text>
                <label className="marginBt">{text_iam_form_ccpa[0]?.text || "I am"}</label>

                <HeaderForm
                  state={state}
                  textTooltip={type_of_requests_html_content[0]?.text || `<h3>Type of request</h3>
                  <h4>Information Collection Practices</h4>
                  <p>The categories of information we collected about you, the sources and uses of that information and how it was shared in the last 12 months.</p>
                  <h4>Specific pieces of information</h4>
                  <p>Pieces of information we have collected about you in the last 12 months.</p>
                  <h4>Information Sharing Practices</h4>
                  <p class="lastToolTipP">The categories of information we shared for a business purpose and the categories of information we shared and the recipients of the information where we received value in exchange for the sharing necessary for us to complete a transaction for you or otherwise perform a contract; to detect, protect against, or prosecute security incidents, fraud or illegal activity; to use the information only internally in ways reasonably aligned with your expectations as our customer (such as maintaining sales records), and to comply with legal obligations.</p>
                  `}
                  dispatch={dispatch}
                  optionsLabel={optionsLabel({
                    text_option_consumer_ccpa,
                    text_option_legal_guardian_ccpa,
                    text_option_authorized_agent_ccpa,
                    text_type_of_request_ccpa,
                  })}
                  radioButtonEnabled={radio_button_enabled}
                  radioButtonDisabled={radio_button_disabled}
                />
                <TypeOfStepComponent
                  formFieldsStep1={formFieldsStep1({
                    state,
                    text_form_first_name,
                    text_form_middle_name,
                    text_form_last_name,
                    text_form_other_name,
                    text_form_email,
                    text_form_other_email,
                    text_form_phone_number,
                    text_form_other_phone_number,
                  })}
                  formFieldsStep2={formFieldsStep2({
                    state,
                    text_form_street_address,
                    text_form_apt_address,
                    text_form_city,
                    text_form_state,
                    text_form_postal_code,
                    text_form_other_adresses,
                    text_form_declaration,
                    text_form_button_upload,
                    text_form_file_error_upload,
                    text_form_file_ok_upload,
                    icon_fail_file,
                    icon_success_file,
                  })}
                  formFieldsStep3={formFieldsStep3({
                    state,
                    text_form_first_name,
                    text_form_middle_name,
                    text_form_last_name,
                    text_form_email,
                    text_form_phone_number,
                  })}
                  formFieldsStep4={formFieldsStep4({
                    state,
                    defaultCity: state.state,
                    text_form_street_address,
                    text_form_apt_address,
                    text_form_city,
                    text_form_state,
                    text_form_postal_code,
                    text_form_other_adresses,
                    text_form_declaration,
                    text_form_button_upload,
                    icon_fail_file,
                    text_form_file_error_upload,
                    icon_success_file,
                    text_form_file_ok_upload,
                    text_form_title_upload,
                  })}
                  formFieldsStep5={formFieldsStep5({
                    textNotice:
                      "<b>Notice to current, former and prospective employees of RIA Financial:</b><span style='display:inline; font-weight:400'> The CCPA does not apply to information that we collect from you related to your capacity as an applicant or current or former employee of RIA Financial. Please read our <a href='https://app.riamoneytransfer.com/en-us/privacy-policy' target='_blank'>privacy policy</a> to understand the information we collect, its sources and uses and how we share it.</span>",
                    textConfirm:
                      "<b>I confirm</b><span style='font-weight:400; display:inline'/> that I am requesting <b>Ria to delete my information</span></b><span style='font-weight:400; display:inline'> as required by the CCPA (Optional).</span>",
                    checkboxEnabled: checkbox_enabled,
                    checkboxDisabled: checkbox_disabled,
                  })}
                  textNavigation={buttonsNavigation({
                    text_form_button_back,
                    text_form_button_continue,
                    text_form_button_submit,
                  })}
                  state={state}
                  dispatch={dispatch}
                  handlerSubmit={handlerSubmit}
                  handlerOnchange={handlerOnchange}
                />
              </>
            )}
          </ContainerForm>
        </SectionContainer>
      </PageContainer>
    </>
  );
};

// export default WrapperForm
export const MemoizedWrapperForm = React.memo(WrapperForm);
export default MemoizedWrapperForm;
