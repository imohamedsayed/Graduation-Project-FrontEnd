<template>
    <tr v-if="dell">
      <td class="check" @click="opened = !opened">
        {{ category.id }} <i v-if="opened" class="fa fa-circle-plus plus"></i>
        <i v-else class="fa-solid fa-circle-minus minus"></i>
      </td>
      <td>{{ category.name }}</td>
      
      <td class="open">
        <i class="fa-solid fa-circle-check exam" v-if="category.status=='on'"></i>
        <i class="fa-solid fa-circle-xmark exam" v-else></i>
      </td>
      <td class="open">
        <a
          class="show"
          @click="
            $router.push({ name: 'showProducts', params: { category_id: category.id } })
          "
        >
          عرض المنتجات
        </a>
      </td>
    </tr>
    <tr class="close" v-if="!opened">
    <td colspan="9">
      <ul>
        <li>
          عرض:
          <a
            class="btn"
            @click="
              $router.push({ name: 'showProducts', params: { category_id: category.id } })
            "
          >
            عرض المنتجات
          </a>
        </li>
      </ul>
    </td>
  </tr>
    <tr v-if="!opened && dell">
      <td colspan="7">
        <div class="close">
          <div>الخصائص</div>
          <ul>
            <li
              class="btn"
              @click="
                $router.push({
                  name: 'editCategory',
                  params: {
                    id: category.id,  
                  },
                })
              "
            >
              <i class="fa fa-trash"></i> تعديل
            </li>
            <li class="btn" @click="Delete()"><i class="fa fa-trash"></i> حذف</li>
          </ul>
        </div>
      </td>
    </tr>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  import axios from "axios";
  export default {
    name: "Cشفثلخقغ",
    props: ["category"],
    data() {
      return {
        opened: true,
        dell: true,
        showEditForm: false,
      };
    },
    methods: {
      async Delete() {
        Swal.fire({
          title: "هل انت متاكد",
          text: "لن تتمكن من التراجع عن هذا!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#363062",
          cancelButtonColor: "#d33",
          confirmButtonText: "نعم ، احذفها!",
          cancelButtonText: "لا ، إلغاء!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await axios
              .delete("api_dashboard/categories/" + this.category.id)
              .then((res) => {
                Swal.fire("تم الحذف!", "تم حذف الامتحان", "نجاح");
                this.dell = false;
              })
              .catch((error) => {
                console.log(error);
                console.log(error.response.data.errors);
                console.log(error.response.data.message);
              });
          }
        });
      },
    },
  };
  </script>
  
  <style lang="scss">
  tr {
    img {
      width: 100px;
      border-radius: 5px;
    }
  
    div.close {
      display: flex;
  
      ul {
        display: flex !important;
        flex-wrap: wrap;
        gap: 5px;
  
        @media (min-width: 767px) {
          flex-direction: row;
        }
  
        li {
          width: -moz-fit-content !important;
          width: fit-content !important;
          border: none !important;
          border-radius: 5px;
          display: flex;
          justify-content: start;
          gap: 5px !important;
          align-items: center;
          cursor: pointer;
  
          a {
            color: white !important;
          }
        }
      }
    }
  }
  
  tr.close {
    @media (min-width: 767px) {
      display: none !important;
    }
  }
  
  .thumb_img {
    width: 100px;
    margin: 0 auto;
  }
  
  td {
    width: fit-content !important;
    border-left: 1px solid #efefef !important;
    font-weight: 500;
  
    .plus,
    .minus {
      margin-right: 5px;
      color: var(--darker-blue) !important;
      padding: 2px;
      background-color: #f7f7f7;
      border: var(--border);
      border-radius: 50%;
    }
  }
  
  tr div.close ul > div {
    margin: 0 auto;
  }
  
  td.check {
    cursor: pointer;
  }
  
  .edit-class-form {
    label {
      margin: 5px 0 !important;
    }
  
    input {
      padding: 5px 15px !important;
      font-size: 1rem !important;
    }
  }
  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    margin-top: 30px;
    border-radius: 5px;
    margin-bottom: 12px;
    thead {
      font-weight: 500;
      padding: 12px !important;
      border-radius: 4px;
      background-color: var(--darker-blue);
      color: #333 !important;
      th {
        border-bottom-left-radius: 0;
        border: 1px solid rgba(119, 119, 119, 0.239);
        font-size: 14px;
        color: white;
        padding: 12px;
        font-weight: bold;
      }
    }
    tbody {
      tr {
        background-color: #fff;
      }
    }
    &::-webkit-scrollbar {
      height: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: #8f94fb87;
      border: 1px solid #fff;
      border-radius: 20px;
    }
  }
  .thumb_img {
    width: 120px;
    margin: 0 auto;
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
  tr td {
    text-align: center;
    font-weight: 500;
  }
  </style>
  