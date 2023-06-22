import axios from "axios";
import { API_URL } from "../utils/config";

export const login = (email, password) => {
  // With Spring boot 3
  //   return axios
  //     .post(API_URL + "/auth/signin", {
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       if (response.data.token) {
  //         localStorage.setItem("user", JSON.stringify(response.data));
  //       }
  //       return response.data;
  //     });
  // };

  // export const getCurrentUser = () => {
  //   return JSON.parse(localStorage.getItem("user"));
  // };

  // With Django
  return axios
    .post(API_URL + "/login/token/", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
