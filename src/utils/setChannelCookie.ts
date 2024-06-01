const getExpirationDate = () => {
  // Setting expiration date 30 days from cookie creation
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 30);
  return currentDate.toUTCString();
};

const setChannelCookie = (queryParameters: URLSearchParams) => {
  let channelValue = queryParameters.get("utm_medium");

  if (channelValue === null) {
    channelValue = "direct";
  }
  document.cookie = `EGLEDIRMEITYTE_channel=${channelValue}; expires=${getExpirationDate()}`;
};

export default setChannelCookie;
