<template>
  <div class="main">
    <ag-grid-vue
      class="ag-theme-alpine"
      style="height: 820px"
      :columnDefs="columnDefs.value"
      :rowData="rowData.value"
      :defaultColDef="defaultColDef"
      rowSelection="multiple"
      animateRows="true"
      :pagination="pagination"
      :paginationPageSize="paginationPageSize"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import { reactive, onMounted, ref } from "vue";

import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import edit_delete from "../Etit_and_delete.vue";
import axios from "axios";
export default {
  name: "Manger",
  components: {
    AgGridVue,
    edit_delete,
  },

  data() {
    return {
      pagination: true,
      paginationPageSize: 25,
    };
  },
  mounted() {
    console.log(localStorage.getItem("token"));
    let token = "Bearer " + localStorage.getItem("token");
    let maneger = axios
      .get("http://127.0.0.1:8000/api_dashboard/head-branch", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((res) => {
        this.rowData.value = res.data.data;
        // console.log(res.data.data)
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors);
      });
  },
  setup() {
    const rowData = reactive({});
    const columnDefs = reactive({
      value: [
        {
          field: "Propirtis",
          cellRenderer: "edit_delete",
          width: 120,
          maxWidth: 150,
          resizable: false,
        },
        // { field: "manage" },
        { field: "email" },
        { field: "name" },
        { field: "id", width: 70, maxWidth: 70, resizable: false },
      ],
    });

    const defaultColDef = {
      sortable: true,
      filter: true,
      flex: 1,
      lemit: 2,
      resizable: true,
    };
    return {
      columnDefs,
      rowData,
      defaultColDef,
    };
  },
};
</script>

<style lang="scss">
.main {
  width: 100%;
}
.ag-theme-alpine {
  width: 100% !important;
  direction: rtl !important;
}
.ag-ltr .ag-body-viewport {
  &::-webkit-scrollbar {
    width: 15px !important;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(#312776d2, #363062);
    border: 5px solid#fff;
    border-radius: 10px !important;
  }
}

.ag-header {
  background-color: #363062;
}
.ag-header-cell-label {
  color: white !important;
}
.ag-header-cell-menu-button:not(.ag-header-menu-always-show) {
  color: white !important;
}
.ag-root-wrapper {
  border: none !important;
}
.ag-paging-panel {
  border-top: 1px solid var(--darker-blue);
  color: var(--darker-blue) !important;
}
.ag-paging-panel .ag-icon {
  color: var(--darker-blue);
  font-size: 25px;
  font-weight: bold;
}
</style>
