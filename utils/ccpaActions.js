import React from "react";
import { fetchSession } from "../services/auth.services";
import axios from "axios";

export default function submitCCPAForm() {
  const submitCCPAForm = async () => {
    //Fetching JWT Token
    const sessionData = await fetchSession();
    const fetchToken = await sessionData.response.authToken;

    //Creating the FormData object to send in the post request with the form fields entered by the user
    const data = new FormData();

    const AuthorizedPersonInfo = {
      AgentFirstName: "aa",
      AgentMiddleName: "aaa",
      AgentLastName: "aaa",
      AgentAddress: "aaa",
      AgentUnitNumber: "aaaa",
      AgentCity: "FLORIDA",
      AgentState: "",
      AgentPostalCode: "33160",
      AgentCurrentPhoneNumber: "232323",
      AgentEmailAddress: "sds@asa.cl",
    };

    const ConsumerInfo = {
      FirstName: "mathew",
      MiddleName: "thomas",
      LastName: "johnson",
      NameOther: "johnny",
      Address: "123 house",
      UnitNumber: "21",
      City: "san francisco",
      State: "CA",
      PostalCode: "2323",
      AddressOther: "",
      EmailAddress: "asd@gmail.com",
      EmailOther: "",
      PhoneNumber: "+1 209-200-8376",
      PhoneNumberOther: "+1 209-200-8376",
    };

    //Appending first set of parameters
    data.append("PrivacyRequestType", "InformationCollectionPractices");
    data.append("Identification", "Consumer");
    data.append("AuthorizedPersonInfo", JSON.stringify(AuthorizedPersonInfo));
    data.append("ConsumerInfo", JSON.stringify(ConsumerInfo));
    data.append("DeletionAcknowledgement", true);

    //Creating sample Blob object to simulate an uploaded file.
    //This should be changed when we get a file uploaded in the form.
    const obj = { hello: "world" };
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });

    //Appending uploaded file related info
    const verificationDeclarationFile = blob;
    data.append("VerificationDeclaration", verificationDeclarationFile);
    data.append("VerificationDeclarationFileName", "file.png");

    //Sending the POST using axios
    try {
      axios({
        method: "post",
        url: "https://www.riamoneytransfer.com/api/communication/ccpa",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${fetchToken.jwtToken}`,
          Accept: "*/*",
          AppType: "2",
          CultureCode: "en-US",
          IsoCode: "US",
          "X-Forwarded-For": "149.142.201.252",
        },
        data: data,
      }).then(res => console.log(res));
    } catch (error) {
      console.error(">>>>>>>>>error>>", error);
    }
  };

  submitCCPAForm();
}
