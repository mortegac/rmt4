export const addUTCSeconds = (dt, seconds = 0) => {
  try {
    // const secondsValid = isNaN(seconds)=== false? seconds:0;
    const date = new Date(dt * 1000);
    const newDateUTC = date.setUTCSeconds(seconds);

    return newDateUTC;
  } catch (err) {
    console.error("--ERROR--", err);
  }
};

export const isNotValidSession = (finishedDate = -5364615539) => {
  // Return true is INVALID TOKEN
  try {
    const nowDate = new Date();
    const nowDateUTC = new Date(nowDate * 1000);

    return finishedDate < nowDate.getTime();
  } catch (err) {
    console.error("----err---", err);
    return false;
  }
};
