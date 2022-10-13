import {
  Input,
  InputPhoneNumber,
  TextForm,
  UploadForm,
  CheckForm,
  DropdownForm,
} from "../components";
import {
  usStates,
  usStatesAndCities,
} from "../../../utils/usStatesAndCities";

export const cn = {
  CHANGE_TYPE_PERSON: "CHANGE_TYPE_PERSON",
  CHANGE_TYPE_REQUEST: "CHANGE_TYPE_REQUEST",
  CHANGE_STEP: "CHANGE_STEP",
  SET_STATE: "SET_STATE",
  SET_STATE_AGENT: "SET_STATE_AGENT",
  SET_CITY: "SET_CITY",
  SET_CITY_AGENT: "SET_CITY_AGENT",
  SET_FORM: "SET_FORM",
};

export const typeForm = {
  ["input"]: Input,
  ["inputPhone"]: InputPhoneNumber,
  ["text"]: TextForm,
  ["upload"]: UploadForm,
  ["check"]: CheckForm,
  ["dropdown"]: DropdownForm,
};

export const typePersonOption = [
  {
    key: "consumer",
    value: "Consumer information",
    totalSteps: 3,
    currentStep: 1,
    nextStep: 2,
    prevState: 1,
  },
  {
    key: "parent-legal",
    value: "Parent/Legal Guardian information",
    totalSteps: 5,
    currentStep: 1,
    nextStep: 2,
    prevState: 1,
  },
  {
    key: "authorized-agent",
    value: "Authorized agent information",
    totalSteps: 5,
    currentStep: 1,
    nextStep: 2,
    prevState: 1,
  },
];
export const options = [
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

const getFindCities = (state) => {
  const cities = usStatesAndCities[state];
  if (Array.isArray(cities))
    return cities.length === 1
      ? cities
      : cities.sort((a, b) => a.value.localeCompare(b.value));

  return [{ value: "", text: "-" }];
};
// DATA FROM PRISMIC
export const formFieldsStep1 = (data) => [
  {
    name: "firstName",
    type: "input",
    step: "step01",
    text: data?.text_form_first_name[0]?.text || "",
    validations: {
      name: "firstName",
      required: {
        value: true,
        message: "You must enter a first name",
      },
      maxLength: 100,
    },
  },
  {
    name: "midleName",
    type: "input",
    step: "step01",
    text: data?.text_form_middle_name[0]?.text || "",
    validations: {
      name: "midleName",
      required: false,
      maxLength: 100,
      message: "Must contain a minimum of 5 characters",
    },
  },
  {
    name: "lastName",
    type: "input",
    step: "step01",
    text: data?.text_form_last_name[0]?.text || "",
    validations: {
      name: "lastName",
      required: {
        value: true,
        message: "You must enter a last name",
      },
      maxLength: 100,
    },
  },
  {
    name: "otherName",
    type: "input",
    step: "step01",
    text: data?.text_form_other_name[0]?.text || "",
    validations: {
      name: "otherName",
      required: false,
      maxLength: 100,
    },
  },
  {
    name: "emailName",
    type: "input",
    step: "step01",
    text: data?.text_form_email[0]?.text || "",
    validations: {
      name: "emailName",
      required: {
        value: true,
        message: "Enter a valid email",
      },
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Enter a valid email",
      },
    },
  },
  {
    name: "otherEmail",
    type: "input",
    step: "step01",
    text: data?.text_form_other_email[0]?.text || "",
    validations: {
      name: "otherEmail",
      required: false,
      maxLength: 100,
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Enter a valid email",
      },
    },
  },
  {
    name: "phoneNumber",
    type: "inputPhone",
    step: "step01",
    text: data?.text_form_phone_number[0]?.text || "",
    validations: {
      name: "phoneNumber",
      required: {
        value: true,
        message: "You must enter a phone number",
      },
      maxLength: 100,
      minLength: {
        value: 6,
        message: "Number must be at least 6 digits",
      },
    },
    currentState: data.state,
  },
  {
    name: "otherPhoneNumber",
    type: "inputPhone",
    step: "step01",
    text: data?.text_form_other_phone_number[0]?.text || "",
    validations: {
      name: "otherPhoneNumber",
      maxLength: 100,
    },
    currentState: data.state,
  },
];

export const formFieldsStep2 = (data) => [
  {
    name: "address",
    type: "input",
    step: "step02",
    text: data?.text_form_street_address[0]?.text || "",
    validations: {
      required: {
        value: true,
        message: "Must enter an address",
      },
      maxLength: 100,
    },
  },
  {
    name: "apt",
    type: "input",
    step: "step02",
    text: data?.text_form_apt_address[0]?.text || "",
    validations: {
      required: false,
      maxLength: 100,
      message: "Must contain a minimum of 5 characters",
    },
  },
  {
    name: "state",
    type: "dropdown",
    options: usStates,
    className: "step2StatesDropdown",
    step: "step02",
    text: data?.text_form_state[0]?.text || "",
    validations: {
      required: true,
      maxLength: 100,
      message: "Must contain a minimum of 5 characters",
    },
  },
  {
    name: "city",
    type: "dropdown",
    options: getFindCities(data.state.form.step02.state),
    step: "step02",
    text: data?.text_form_city[0]?.text || "",
    validations: {
      required: true,
      maxLength: 100,
      message: "Must contain a minimum of 5 characters",
    },
  },
  {
    name: "postalCode",
    type: "input",
    step: "step02",
    text: data?.text_form_postal_code[0]?.text || "",
    validations: {
      required: {
        value: true,
        message: "You must enter a postal code",
      },
      maxLength: 100,
      pattern: {
        value: /^-?\d+\.?\d*$/,
        message: "You must enter a valid post code, only numbers",
      },
    },
  },
  {
    name: "otherAdresses",
    type: "input",
    step: "step02",
    text: data?.text_form_other_adresses[0]?.text || "",
    validations: {
      required: false,
      maxLength: 100,
    },
  },
  {
    name: "formdeclaration",
    type: "text",
    step: "step02",
    id: "formdeclaration",
    text: data?.text_form_declaration[0]?.text || "",
    validations: {
      required: true,
      maxLength: 100,
      pattern: " ",
      message: "Must contain a minimum of 5 characters",
    },
    className: "verifDeclaration",
  },
  {
    name: "upload",
    type: "upload",
    step: "step02",
    status: 2,
    text: data?.text_form_button_upload[0]?.text || "",
    messageFail:
      data?.text_form_file_error_upload[0]?.text || "Error uploading your file",
    icoFail: data?.icon_fail_file?.url || "",
    messageSuccess: data?.text_form_file_ok_upload[0]?.text || "Succesful upload",
    icoSuccess: data?.icon_success_file?.url || "",
    fileName: "file.png",
    currentState: data.state,
  },
];

export const formFieldsStep3 = (data) => [
  {
    name: "firstNameAgent",
    type: "input",
    step: "step03",
    text: data?.text_form_first_name[0]?.text || "",
    validations: {
      required: {
        value: true,
        message: "Must enter a first name",
      },
      maxLength: 100,
    },
  },
  {
    name: "midleNameAgent",
    type: "input",
    step: "step03",
    text: data?.text_form_middle_name[0]?.text || "",
    validations: {
      required: false,
      maxLength: 100,
    },
  },
  {
    name: "lastNameAgent",
    type: "input",
    step: "step03",
    text: data?.text_form_last_name[0]?.text || "",
    validations: {
      required: {
        value: true,
        message: "Must enter a last name",
      },
      maxLength: 100,
    },
  },
  {
    name: "emailNameAgent",
    type: "input",
    step: "step03",
    text: data?.text_form_email[0]?.text || "",
    validations: {
      name: "emailNameAgent",
      required: {
        value: true,
        message: "Enter a valid email",
      },
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Enter a valid email",
      },
    },
  },
  {
    name: "phoneNumberAgent",
    type: "inputPhone",
    step: "step03",
    text: data?.text_form_phone_number[0]?.text || "",
    validations: {
      name: "phoneNumberAgent",
      required: {
        value: true,
        message: "You must enter a phone number",
      },
      maxLength: 100,
      minLength: {
        value: 6,
        message: "Number must be at least 6 digits",
      },
    },
    currentState: data.state,
  },
];

export const formFieldsStep4 = (data) => [
  {
    name: "addressAgent",
    type: "input",
    step: "step04",
    text: data?.text_form_street_address[0]?.text || "",
    validations: {
      required: {
        value: true,
        message: "Must enter an address",
      },
      maxLength: 100,
    },
  },
  {
    name: "aptAgent",
    type: "input",
    step: "step04",
    text: data?.text_form_apt_address[0]?.text || "",
    validations: {
      required: false,
      maxLength: 100,
    },
  },
  {
    name: "stateAgent",
    type: "dropdown",
    options: usStates,
    step: "step04",
    text: data?.text_form_state[0]?.text || "",
    validations: {
      required: true,
      maxLength: 100,
      pattern: " ",
      message: "Must contain a minimum of 5 characters",
    },
  },
  {
    name: "cityAgent",
    type: "dropdown",
    options: getFindCities(data.state.form.step04.stateAgent),
    step: "step04",
    text: data?.text_form_city[0]?.text || "",
    validations: {
      required: true,
      maxLength: 100,
      pattern: " ",
      message: "Must contain a minimum of 5 characters",
    },
  },
  {
    name: "postalCodeAgent",
    type: "input",
    step: "step04",
    text: data?.text_form_postal_code[0]?.text || "",
    validations: {
      required: {
        value: true,
        message: "You must enter a postal code",
      },
      maxLength: 100,
      pattern: {
        value: /^-?\d+\.?\d*$/,
        message: "You must enter a valid post code, only numbers",
      },
    },
  },
  {
    name: "otherAdressesAgent",
    type: "input",
    step: "step04",
    text: data?.text_form_other_adresses[0]?.text || "",
    validations: {
      required: false,
      maxLength: 100,
      pattern: " ",
      message: "-",
    },
  },
  {
    name: "",
    type: "text",
    step: "step04",
    text: data?.text_form_title_upload[0]?.text || "Written authorization upload",
    validations: {
      required: true,
      maxLength: 100,
      pattern: " ",
      message: "Must contain a minimum of 5 characters",
    },
    className: "writtenAuth",
  },
  {
    name: "uploadAgent",
    type: "upload",
    step: "step04",
    status: 2,
    text: data?.text_form_button_upload[0]?.text || "Consumer" ,
    messageFail:
      data?.text_form_file_error_upload[0]?.text || "Error uploading your file",
    icoFail: data?.icon_fail_file?.url || "",
    messageSuccess: data?.text_form_file_ok_upload[0]?.text|| "Succesful upload",
    icoSuccess: data?.icon_success_file?.url || "",
    currentState: data.state,
  },
];

export const formFieldsStep5 = (data) => [
  {
    name: "",
    type: "text",
    step: "step05",
    className: "textNotice",
    text: data.textNotice,
    validations: {
      required: true,
      maxLength: 100,
      pattern: " ",
      message: "Must contain a minimum of 5 characters",
    },
  },
  {
    name: "acceptTerms",
    type: "check",
    step: "step05",
    text: data.textConfirm,
    checkboxEnabled: data.checkboxEnabled,
    checkboxDisabled: data.checkboxDisabled,
    validations: {
      required: true,
      maxLength: 100,
      pattern: " ",
      message: "Must contain a minimum of 5 characters",
    },
  },
];

export const buttonsNavigation = (data) => [
  { text: data?.text_form_button_back[0]?.text || "Back" },
  { text: data?.text_form_button_continue[0]?.text || "Continue" },
  { text: data?.text_form_button_submit[0]?.text || "Submit" },
];

export const optionsLabel = (data) => [
  { text: data?.text_option_consumer_ccpa[0]?.text || "Consumer" },
  { text: data?.text_option_legal_guardian_ccpa[0]?.text || "Parent / Legal Guardian" },
  { text: data?.text_option_authorized_agent_ccpa[0]?.text || "Authorized agent" },
  { text: data?.text_type_of_request_ccpa[0]?.text || "Type of request" },
];
