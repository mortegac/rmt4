import { fetchAxios } from "./fetchAxios";
import { fetchSession } from "../services/auth.services";

export const unsuscribeServices = async (idUser = "") => {
  const bodyFormData = new FormData();
  try {
    const sessionData = await fetchSession();
    const fetchToken = await sessionData.response.authToken;

    bodyFormData.append("CustomerId", `"${idUser}"` || "");

    const res = await fetchAxios({
      method: "POST",
      url: `/marketing/email/unsubscribe`,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${fetchToken.jwtToken}`,
        Accept: "*/*",
        ApplicationId: "220",
      },
      data: {
        CustomerId: idUser.toString(),
      },
    });

    return res;
  } catch (error) {
    return error;
  }
};
