<template>
  <div class="">
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <div class="box d-flex ">
          <div class="lable">الاسم : </div>
          <div class="data"> {{ state.student.f_name }} {{ state.student.l_name }} {{ state.student.m_name }} </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="box d-flex ">
          <div class="lable">رقم التلفون : </div>
          <div class="data"> {{ state.student.phone_name }} </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="box d-flex ">
          <div class="lable">رقم ولى الامر : </div>
          <div class="data"> {{ state.student.guardian_number }} </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="box d-flex ">
          <div class="lable">الايميل : </div>
          <div class="data"> {{ state.student.email }} </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="box d-flex ">
          <div class="lable">الشعبة : </div>
          <div class="data"> {{ state.student.division[1] }} </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="box d-flex ">
          <div class="lable">السنة الدراسية : </div>
          <div class="data">{{ state.student.acedemic_year[1] }} </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="box d-flex ">
          <div class="lable">المحافظة : </div>
          <div class="data"> {{ state.student.governorate_id[1] }} </div>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12">
        <div class="box d-flex ">
          <div class="lable">تاريخ الميلاد : </div>
          <div class="data"> {{ state.student.brith_day }} </div>
        </div>
      </div>
      <div class="col-12 edit">
        <router-link :to="{ name: 'studentSettings' }"> تعديل البيانات </router-link>
      </div>
      <div class="col-12 edit">
        <router-link :to="{ name: 'newPassword' }"> تعديل كلمة السر </router-link>
      </div>
      <div class="col-12 edit">
        <a @click="DeleteAccount()"> حذف الحساب </a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive,onMounted,computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup(props) {
    const store = useStore();
    const router = useRouter();


    const state = reactive({
      student: computed((_) => store.state.student),
    });

    onMounted(async () => {

    });

    const DeleteAccount = async () => {
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
        if(result.isConfirmed) {
          Swal.fire("تم الحذف!","تم حذف الحساب بنجاح","نجاح");

          await axios
            .delete("api/students/" + state.student.id)
            .then((res) => {
              router.push("/");
            })
            .catch((error) => {
              console.log(error);
              console.log(error.response.data.errors);
              console.log(error.response.data.message);
            });
        }
      });

    }

    return { state,DeleteAccount };
  },
};
</script>

<style lang="scss" scoped>
.stu-profile {
  .box {
    font-size: 20px;
    margin-bottom: 20px;
    background-color: var(--gray-blue);
    padding: 5px 15px;
    border-radius: 10px;
    transition: .3s ease-in-out;

    &:hover {
      scale: 1.03;
    }

    .lable {
      margin-left: 20px;
      font-weight: bold;
      color: var(--darker-blue);
    }
  }

  .edit {
    padding: 10px 20px;
    background-color: var(--darker-blue);
    width: fit-content;
    margin-right: 20px;
    border-radius: 25px;
    transition: .3s ease-in-out;

    &:hover {
      background-color: var(--gray-blue);
    }

    a {
      color: #fff;
      transition: .3s ease-in-out;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: #000;
      }
    }
  }
}
</style>
