<template>
  <tr v-if="dell">
    <td class="check" @click="opened = !opened">
      {{ section.id }}
      <i v-if="opened" class="fa fa-circle-plus plus"></i>
      <i v-else class="fa-solid fa-circle-minus minus"></i>
    </td>
    <td>{{ section.name }}</td>
    <td class="open">
      <a
        class="show"
        @click="
          this.redirectTo({
            name: 'classRoom',
            params: {id:section.id },
          })
        "
      >
        عرض التفاصيل
      </a>
    </td>
  </tr>
  <tr class="close" v-if="!opened">
    <td colspan="9">
      <ul>
        <li>
          التفاصيل :
          <a
            class="btn"
            @click="
              this.redirectTo({
                name: 'classRoom',
                params: {id:section.id },
              })
            "
          >
            عرض التفاصيل
          </a>
        </li>
      </ul>
    </td>
  </tr>
  <tr v-if="!opened && dell">
    <td colspan="9">
      <div class="close">
        <div>الخصائص</div>
        <ul>
          <li
            class="btn"
            @click="
              $router.push({ name: 'Editesection', params: { id: section.id } })
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
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "Manger",
  props: ["section"],
  data() {
    return {
      opened: true,
      showEditForm: false,
      dell: true,
      id: 0,
    };
  },
  methods: {
    ...mapActions(["redirectTo"]),
    Delete() {
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
          this.dell = false;
          try {
            await axios.delete("api_dashboard/classRooms/" + this.section.id);
            Swal.fire("تم الحذف!", "تم حذف الفصل", "نجاح");
          } catch (err) {
            console.error("error while deleting section : ", err);
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
.table-responsive tbody tr {
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
  a.show , a.btn{
    background-color: var(--darker-blue) !important;
    display: block;
    width: fit-content;
    padding: 5px 10px;
    margin: auto;
    color: var(--white-color);
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      color: antiquewhite;
    }
  }

}
</style>
