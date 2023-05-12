import { CONSTANTS } from "./Constants";
export const buildUrl = (baseUrlWithEndPoint, params) => {
  let url = new URL(baseUrlWithEndPoint);
  // url.searchParams.set(QUERY_TYPE.LANGUAGE, QUERY_TYPE.LANGUAGE_VALUES.ENGLISH);
  if (params && params.length > 0) {
    params.forEach((param) => {
      if (param.key && param.value) {
        url.searchParams.set(param.key, param.value);
      }
    });
  }
  url.searchParams.set("api_key", CONSTANTS.ENV.REACT_APP_API_KEY);
  return url;
};
