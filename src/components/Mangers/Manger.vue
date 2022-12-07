<template>
  <!-- <button @click="deselectRows">deselect rows</button> -->
  <div class="main">
    <ag-grid-vue
      class="ag-theme-alpine"
      style="height: 260px"
      :columnDefs="columnDefs.value"
      :rowData="rowData.value"
      :defaultColDef="defaultColDef"
      rowSelection="multiple"
      animateRows="true"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";
import { reactive } from "vue";
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import edit_delete from "../Etit_and_delete.vue";
export default {
  name: "Manger",
  components: {
    AgGridVue,
    edit_delete,
  },
  data() {
    return {
      id: 1,
      name: "",
      eamil: "abc@gmail.com",
      branch: "اسيوط",
    };
  },
  setup() {
    const rowData = reactive({
      value: [
        {
          ID: "1",
          Name: "اسم المدير",
          Email: "abc@gmail.com",
          Manage: "اسيوط",
        },
        {
          ID: "2",
          Name: "اسم المدير",
          Email: "abc@gmail.com",
          Manage: "القاهرة",
        },
        {
          ID: "3",
          Name: "اسم المدير",
          Email: "abc@gmail.com",
          Manage: "اسيوط",
        },
        {
          ID: "4",
          Name: "اسم المدير",
          Email: "abc@gmail.com",
          Manage: "القاهرة",
        },
        {
          ID: "5",
          Name: "اسم المدير",
          Email: "abc@gmail.com",
          Manage: "الاسكندرية",
        },
      ],
    });
    const columnDefs = reactive({
      value: [
        { field: "Propirtis", cellRenderer: "edit_delete" },
        { field: "Manage" },
        { field: "Email" },
        { field: "Name" },
        { field: "ID" },
      ],
    });
    const defaultColDef = {
      sortable: true,
      filter: true,
      flex: 1,
      lemit: 2,
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
</style>
