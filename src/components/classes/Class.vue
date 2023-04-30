<template v-if="exists">
  <tr class="class-item" dir="rtl">
    <td class="class-id">{{ year.id }}</td>
    <td class="class-name">{{ year.year_name }}</td>
    
    <td class="class-actions">
      <div class="d-flex align-items-center gap-4">
        <button class="btn" @click="showEditForm = true">
          <i class="fa-regular fa-pen-to-square ms-1"></i> تعديل
        </button>
        <button class="btn" @click="Delete">
          <i class="fa-solid fa-trash ms-1"></i> حذف
        </button>
      </div>
    </td>
  </tr>
  <teleport to="body">
    <div class="edit-class-form" v-if="showEditForm">
      <form dir="rtl" @submit.prevent="upadte_class">
        <div class="row">
          <div class="col-lg-12">
            <div v-if="save" class="alert alert-success" role="alert">
              تم تعديل صف دراسى بنجاح .
            </div>
          </div>
        </div>
        <label>تغير اسم الصف</label>
        <select v-model="className" class="">
          <option selected disabled value="">اختيار من القائمة</option>
          <option value="1">الصف الاول الثانوى</option>
          <option value="2">الصف الثانى الثانوى</option>
          <option value="3">الصف الثالث الثانوى</option>
        </select>
        <label>تغير السنة الدراسية</label>
        <input type="text" v-model="classyear" />
        <div class="actions text-center mt-5" dir="rtl">
          <button class="btn btn-success m-2" type="submit">
            حفظ التغييرات
          </button>
          <button class="btn btn-danger m-2" @click="showEditForm = false">
            الغاء
          </button>
        </div>
      </form>
    </div>
  </teleport>
</template>

<script>
import axios from "axios";
export default {
  props: ["year"],
  data() {
    return {
      className: this.year.name,
      classyear: this.year.year,
      exists: true,
      showEditForm: false,
      save: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async upadte_class() {
      let data = {
        name: this.className,
        year: this.classyear,
        branch_id: this.user.exter_info.branch_id,
      };
      console.log(data);
      await axios
        .post("api_dashboard/academicYears/" + this.year.id, data)
        .then((res) => {
          this.save = true;
          setTimeout(() => {
            this.showEditForm = false;
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.message);
          console.log(error.message);
        });
    },
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
          Swal.fire("تم الحذف!", "تم حذف الصف", "نجاح");
          this.exists = false;
          await axios
            .delete("api_dashboard/academicYears/" + this.year.id)
            .then((res) => {
              console.log(res.data);
              setTimeout(() => {
                location.reload();
              }, 1500);
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
.class-item {
  .btn {
    padding: 10px 20px;
    color: white;
    background: var(--blue-color);

    &:hover {
      background: var(--darker-blue);
      color: #fff;
    }
  }
}

.edit-class-form {
  position: fixed;
  min-width: 30%;
  top: 20%;
  left: 5%;
  transform: translate(-10%, -20%);
  background: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba($color: #000000, $alpha: 0.2);

  label {
    display: block;
    font-size: 1.3rem;
    margin-bottom: 40px;
    color: #777;
    font-weight: bold;
  }

  input,
  select {
    width: 100%;
    border: none;
    padding: 10px 15px;
    border-bottom: 3px solid var(--blue-color);
    font-size: 1.2rem;

    &:focus {
      outline: none;
    }
  }

  .btn {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  }

  animation: fadeIn 0.8s ease;
}

@keyframes fadeIn {
  0% {
    transform: translate(-100%, -20%);
  }

  100% {
    transform: translate(-10%, -20%);
  }
}
</style>
