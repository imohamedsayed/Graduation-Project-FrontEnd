import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";

import 'ag-grid-enterprise';
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

import Swal from 'sweetalert2';
window.Swal=Swal;

createApp(App).use(store).use(router).mount("#app");
