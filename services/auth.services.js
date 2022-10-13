import { fetchAxios } from "./fetchAxios";

export const fetchSession = async () => {
  try {
    const { response, loading, error } = await fetchAxios({
      method: "GET",
      url: "/Authorization/session",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });

    return { response, loading, error };
  } catch (error) {
    console.error("--ERROR--", error);
  }
};
