import { customFetchAxios } from "./fetchAxios";
import { fetchSession } from "./auth.services";
import { usStatesAndCities } from "../utils/usStatesAndCities";

export const getfetchCCPA = async (data) => {
  const url = "/communication/ccpa";
  const {
    form: { step01 },
    form: { step02 },
    form: { step03 },
    form: { step04 },
    form: { step05 },
    form: { typeRequest },
    form: { typIdentification },
    form: { city },
    form: { state },
  } = data;
  try {
    const sessionData = await fetchSession();
    const fetchToken = await sessionData.response.authToken;

    const formData = new FormData();

    const ConsumerInfo = {
      FirstName: step01?.firstName || "",
      MiddleName: step01?.midleName || "",
      LastName: step01?.lastName || "",
      NameOther: step01?.otherName || "",
      Address: step02?.address || "",
      UnitNumber: step02?.apt || "",
      City: data.city || "",
      State: data.state || "",
      PostalCode: step02?.postalCode || "",
      AddressOther: step02?.otherAdresses || "",
      EmailAddress: step01?.emailName || "",
      EmailOther: step01?.otherEmail || "",
      PhoneNumber:
        (step01?.codephoneNumber + step01?.phoneNumber !== "1"
          ? step01.codephoneNumber + step01?.phoneNumber
          : "") || "",
      PhoneNumberOther:
        (step01?.codeotherPhoneNumber + step01?.otherPhoneNumber !== "1"
          ? step01.codeotherPhoneNumber + step01.otherPhoneNumber
          : "") || "",
    };

    const AuthorizedPersonInfo = {
      AgentFirstName: step03?.firstNameAgent || "",
      AgentMiddleName: step03?.midleNameAgent || "",
      AgentLastName: step03?.lastNameAgent || "",
      AgentAddress: step04?.addressAgent || "",
      AgentUnitNumber: step04?.aptAgent || "",
      AgentCity: (step03?.firstNameAgent !== "" && data.cityAgent) || "",
      AgentState: (step03?.firstNameAgent !== "" && data.stateAgent) || "",
      AgentPostalCode: step04?.postalCodeAgent || "",
      AgentCurrentPhoneNumber:
        (step03?.codephoneNumberAgent + step03?.phoneNumberAgent !== "1"
          ? step03?.codephoneNumberAgent + step03?.phoneNumberAgent
          : "") || "",
      AgentEmailAddress: step03?.emailNameAgent || "",
    };

    formData.append("PrivacyRequestType", typeRequest);
    formData.append("Identification", typIdentification);
    formData.append(
      "AuthorizedPersonInfo",
      JSON.stringify(AuthorizedPersonInfo)
    );
    formData.append("ConsumerInfo", JSON.stringify(ConsumerInfo));
    formData.append("DeletionAcknowledgement", step05?.acceptTerms || false);

    const obj = { hello: "world" };
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });

    const verificationDeclarationFile = blob;
    formData.append(
      "VerificationDeclaration",
      step02?.upload || verificationDeclarationFile
    );
    formData.append(
      "VerificationDeclarationFileName",
      step02?.uploadedFileName
    );

    formData.append(
      "WrittenAuthorization",
      step04?.uploadAgent || verificationDeclarationFile
    );
    formData.append("WrittenAuthorizationFileName", step04?.uploadedFileName);

    const response = await customFetchAxios({
      method: "POST",
      url,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${fetchToken.jwtToken}`,
        Accept: "*/*",
        AppType: "2",
        CultureCode: "en-US",
        IsoCode: "US",
      },
      data: formData,
    });

    return response;
  } catch (error) {
    console.log(`
            url: ${`url`},
            error: ${error}
        `);
    return { error };
  }
};
