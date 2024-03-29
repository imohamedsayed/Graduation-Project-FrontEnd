import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";
import createPersistedState from "vuex-persistedstate";
import * as cookies from "js-cookie";
// State

const state = {
  user: null,
  student: null,
};

// Getters

const getters = {
  student: (state) => {
    return state.student;
  },
};

// Mutations

const mutations = {
  // Admin
  setUser(state, user) {
    state.user = user;
  },

  // Student
  setStudent(state, student) {
    state.student = student;
  },

  setStudentBrach(state, bID) {
    state.student.branch_id = bID;
  },

  redirectTo(state, payload) {
    router.push({
      name: payload.name,
      params: payload.params,
    });
  },
};

// Actions

const actions = {
  redirectTo({ commit }, payload) {
    commit("redirectTo", { name: payload.name, params: payload.params });
  },

  // Login Admin
  async AdminLogin(context, { email, password }) {
    try {
      let response = await axios.post("api_dashboard/auth/login", {
        email: email,
        password: password,
      });
      if (response.status == 200) {
        localStorage.setItem("token", response.data.access_token);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("token");
        if (response.data.user.role_id == 2) {
          localStorage.setItem(
            "branch_id",
            response.data.user.branchHead_manager[0].id
          );
        }
        context.commit("setUser", response.data.user);
      } else {
        throw new Error("Could not Complete Admin Login ..");
      }
    } catch (err) {
      throw new Error(err.response.data.error);
    }
  },

  adminLogout(context) {
    try {
      context.commit("setUser", null);
      localStorage.clear();
      router.push("/dashboard/login");
    } catch (err) {
      throw new Error("حدث خطأ ما, حاول مجددا");
    }
  },

  // Admin
  user(context, user) {
    context.commit("user", user);
  },

  //Student Signup

  async studentSignup(context, data) {
    try {
      let response = await axios.post("/api/register", data);
      if (response.status == 201) {
        const resData = response.data.student.original;

        localStorage.setItem("Std_id", resData.user.id);
        localStorage.setItem("Std_name", resData.user.f_name);
        context.commit("setStudent", resData.user);
        localStorage.setItem("token", resData.access_token);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("token");
        console.log(localStorage.getItem("token"));
      } else {
        const errors = response.response.data;
        // console.log(errors);
        var err_str = "";
        for (var prop in errors) {
          err_str += errors[prop][0] + "\n";
        }
        // console.log(err_str);
        throw new Error(err_str);
      }
    } catch (err) {
      if (err_str) {
        throw new Error(err_str);
      } else {
        throw new Error("حدث خطأ ما , عاود المحاولة في وقت اخر");
      }
    }
  },

  //Student Update

  async studentUpdate(context, data) {
    let response = await axios.post("/api/students/" + data.id, data.data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(localStorage.getItem("token"));

    if (response.status == 200) {
      await axios.get("/api/students/refresh").then((res) => {
        localStorage.setItem("token", res.data.access_token);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("token");
        localStorage.setItem("Std_id", res.data.user.id);
        localStorage.setItem("Std_name", res.data.user.name);
        context.commit("setStudent", res.data.user);
      });
      console.log(localStorage.getItem("token"));

      // localStorage.setItem("token", response.data.access_token);
    } else {
      throw new Error("Could not Complete Student update ..");
    }
  },

  // student brach

  studentBrach(context, id) {
    context.commit("setStudentBrach", id);
  },

  // Login Student
  async StudentLogin(context, { email, password }) {
    try {
      let response = await axios.post("api/login", {
        email: email,
        password: password,
      });
      if (response.status == 200) {
        localStorage.setItem("Std_id", response.data.user.id);
        localStorage.setItem("Std_name", response.data.user.name);
        context.commit("setStudent", response.data.user);
        localStorage.setItem("token", response.data.access_token);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("token");
      } else {
        throw new Error("Could not Complete Student Login ..");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async studentLogout(context) {
    try {
      let res = await axios.post("/api/logout");
      context.commit("setStudent", null);
      localStorage.clear();
      router.push("/login");
    } catch (err) {
      throw new Error("حدث خطأ ما, حاول مجددا");
    }
  },

  // Student
  student(context, student) {
    context.commit("student", student);
  },
}; // end actions
const modules = {};
export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [
    createPersistedState({
      getState: (key) => cookies.getJSON(key),
      setState: (key, state) =>
        cookies.set(key, state, { expires: 3, secure: true }),
    }),
  ],
});
