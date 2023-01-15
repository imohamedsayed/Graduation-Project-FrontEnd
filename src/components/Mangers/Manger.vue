<template>
  <div class="main">
    <ag-grid-vue
      class="ag-theme-alpine"
      style="height: 820px;"
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
export default {
  name: "Manger",
  components: {
    AgGridVue,
    edit_delete,
  },
  props:["select"],
  data() {
    return {
      pagination : true,
      paginationPageSize : this.select,
      // paginationPageSize : 10,
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
        {
          ID: "1",
          Name: "اسم المدير",
          Email: "abc@gmail.com",
          Manage: "اسيوط",
        },
        {
          ID: "1",
          Name: "اسم المدير",
          Email: "abc@gmail.com",
          Manage: "اسيوط",
        },
        {
          ID: "1",
          Name: "اسم المدير",
          Email: "abc@gmail.com",
          Manage: "اسيوط",
        },
        {
          ID: "1",
          Name: "اسم المدير",
          Email: "abc@gmail.com",
          Manage: "اسيوط",
        },
        {
          ID: "1",
          Name: "اسم المدير",
          Email: "abc@gmail.com",
          Manage: "اسيوط",
        },
        {
          ID: "1",
          Name: "اسم المدير",
          Email: "abc@gmail.com",
          Manage: "اسيوط",
        },
      ],
    });
    const columnDefs = reactive({
      value: [
        { field: "Propirtis", cellRenderer: "edit_delete",
          cellRendererParams:{edit:"Update_Manger",
        },
        },
        { field: "Manage" },
        { field: "Email" },
        { field: "Name" },
        { field: "ID" },
      ],
    });
    


    // onMounted(() => {
    //   fetch("")
    //     .then((result) => result.json())
    //     .then((remoteRowData) => (rowData.value = remoteRowData));
    // });
    

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
.ag-ltr .ag-body-viewport{
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
