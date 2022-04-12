import axios from "axios";
import isEmpty from "lodash/isEmpty";
// import ApiErrorHandler from "./components/ApiErrorHandler/ApiErrorHandler";

const base_url =
  process.env.REACT_APP_BASEURL === ""
    ? "https://jsonplaceholder.typicode.com/"
    : process.env.REACT_APP_BASEURL;

const client = axios.create({
    baseURL: base_url,
    json: true,
    timeout: 30000,
  });
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Platform: "web",
  };
  
const call = async (method, url, data = {}) => {
    const sreailized = JSON.parse(localStorage.getItem("store"));
    const token = sreailized !== null ? sreailized.auth.token : null;
  
    if (token !== "") {
      headers.Authorization = `Bearer ${token}`;
    }
  
    const request = { headers, method, url };
  
    if (!isEmpty(data)) {
      request.data = data;
    }
  
    try {
      const response = await client(request);
    //   ApiErrorHandler(response.status);
      // myFunc();
      return Promise.resolve(response.data);
    } catch (error) {
      if (error.response !== null) {
        // ApiErrorHandler(error.response.status);
        // myFunc();
      }
      return Promise.reject(error.response);
    }
  };
  
  const general = {
    base: base_url,
    // token: token,
  };
  
  const User ={
    getUserList: (id, name, username, email, address) =>
    call(
      "GET",
      `users?id=${id}&name=${name}&username=${username}&email=${email}&address=${address}`
    ),

  }
  const method ={
      ...User,
      delete: (url, data = {}) => call("delete", url, data),
      get: (url, data = {}) => call("get", url, data),
      patch: (url, data = {}) => call("patch", url, data),
      post: (url, data = {}) => call("post", url, data),
      put: (url, data = {}) => call("put", url, data),
    };
    export default {
        ...method,
      };

