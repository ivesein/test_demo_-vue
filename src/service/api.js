import axios from "axios";
let baseUrl = "http://localhost:3000/";

export const signUp = param => {
  return axios.post(baseUrl + "sign_up", param);
};

export const login = param => {
  return axios.post(baseUrl + "login", param);
};
