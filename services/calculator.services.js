import { fetchAxios } from "./fetchAxios";

export const fetchInitialize = async jwtToken => {
  const url = "/Calculator/Initialize";
  try {
    const { response, loading, error } = await fetchAxios({
      method: "GET",
      url,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    return { response, loading, error };
  } catch (error) {
    console.error(`
            url: ${url},
            error: ${error}
        `);
  }
};

export const calculate = async req => {
  const url = "/MoneyTransferCalculator/Calculate";
  try {
    const response = await fetchAxios({
      method: "POST",
      url,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${req.jwtToken}`,
      },
      data: {
        selections: {
          ...req.selections,
        },
      },
    });

    return response;
  } catch (error) {
    console.error(`
            url: ${url},
            error: ${error}
        `);
    return { error };
  }
};
