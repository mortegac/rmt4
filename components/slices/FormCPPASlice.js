import React from "react";

import { CcpaForm } from "../ccpaForm";

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
    primary: { text_form_email },
    primary: { text_form_other_email },
    primary: { text_form_phone_number },
    primary: { text_form_other_phone_number },

    primary: { text_form_street_address },
    primary: { text_form_apt_address },
    primary: { text_form_city },
    primary: { text_form_state },
    primary: { text_form_postal_code },
    primary: { text_form_other_adresses },
    primary: { text_form_declaration },
    primary: { icon_fail_file },
    primary: { icon_success_file },
    primary: { radio_button_enabled },
    primary: { radio_button_disabled },
    primary: { checkbox_enabled },
    primary: { checkbox_disabled },

    primary: { text_form_button_upload },

    primary: { text_form_check },
    primary: { text_type_of_request_ccpa },

    primary: { text_form_button_back },
    primary: { text_form_button_continue },
    primary: { text_form_button_submit },

    primary: { text_form_title_upload },
    primary: { text_form_file_ok_upload },
    primary: { text_form_file_error_upload },

    primary: { type_of_requests_html_content },
  } = slice;

  const data = {
    subtitle_ccpa,
    text_intro_form_ccpa,
    text_iam_form_ccpa,
    type_of_requests_html_content,
    text_option_authorized_agent_ccpa,
    text_option_consumer_ccpa,
    text_option_legal_guardian_ccpa,
    text_type_of_request_ccpa,

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
    icon_success_file,
    radio_button_enabled,
    radio_button_disabled,
    checkbox_enabled,
    checkbox_disabled,
    text_form_button_upload,
    text_form_title_upload,
    
    text_form_check,
    text_form_button_back,
    text_form_button_continue,
    text_form_button_submit,

    text_form_file_ok_upload,
    text_form_file_error_upload,
  };

  return <CcpaForm {...data} />;
};

export default FormCPPASlice;
