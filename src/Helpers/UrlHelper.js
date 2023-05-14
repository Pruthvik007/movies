import { CONSTANTS } from "./Constants";
export const buildUrl = (baseUrlWithEndPoint, params) => {
  let url = new URL(baseUrlWithEndPoint);
  if (params) {
    Object.keys(params).forEach((key) => {
      if (key && params[key]) {
        url.searchParams.set(key, params[key]);
      }
    });
  }
  url.searchParams.set("api_key", CONSTANTS.ENV.REACT_APP_API_KEY);
  return url;
};
