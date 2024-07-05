import { authHeader } from "./authHeader";
import { baseUrl } from "./apiCalls";
import axios from "axios";

export const SC = {
  getCall,
  postCall,
  putCall,
  deleteCall,
};

function getCall(url) {
  return axios
    .get(baseUrl + url, { headers: authHeader() })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

function postCall(url, data, callbackProgressUpload = null, source) {
  const requestOptions = {
    headers: {
      ...authHeader(),
      // Do not set 'Content-Type' header, let axios handle it for form data
    },
    onUploadProgress: function (progressEvent) {
      if (callbackProgressUpload) callbackProgressUpload(progressEvent);
    },
  };

  if (source) {
    requestOptions.cancelToken = source.token;
  }

  return axios
    .post(baseUrl + url, data, requestOptions)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

function putCall(url, data) {
  return axios
    .put(baseUrl + url, data, { headers: authHeader() })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

function deleteCall(url) {
  return axios
    .delete(baseUrl + url, { headers: authHeader() })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}
