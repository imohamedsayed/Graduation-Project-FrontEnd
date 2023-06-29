import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

import store from "./store/index";
let x = false;
axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !x) {
      x = true;
      try {
        await store.dispatch("studentLogout");
      } catch (err) {
        store.dispatch("adminLogout");
      }
    }
    return error;
  }
);
