<template>
  <div class="col-lg-3 col-md-6 col-1">
    <div class="card">
      <img
        src="../../../../public/images/intro_background.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ data.name }}</h5>
        <p class="card-text text-primary">
          {{ data.branch_name }}
        </p>
      </div>
      <ul class="list-group list-group-flush p-0" dir="rtl">
        <li class="list-group-item">موعد البدء : {{ data.start_date }}</li>
        <li class="list-group-item">
          موعد انتهاء التسجيل : {{ data.registration_deadline }}
        </li>
        <li class="list-group-item">
          السعة الاستعابية: {{ data.max_capacity }}
        </li>
        <li class="list-group-item">السعر: {{ data.price }}</li>
        <li class="list-group-item">
          امتحان مسبق: {{ data.prerequisite_exam == "Off" ? "لا" : "نعم" }}
        </li>
      </ul>
      <div class="card-body text-center">
        <button class="btn btn-success" @click="apply(data.id)">التقديم</button>
        <!-- <button class="btn btn-danger">الغاء التقديم</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from "vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  props: ["data"],

  setup(props) {
    const state = reactive({
      student: computed(() => useStore().state.student),
    });

    onMounted(async () => {
      //   const res = await axios.get(
      //     "/api/get-remaining-students/" + state.student.branch_id
      //   );
    });

    const apply = async (cId) => {
      let data = {
        classroom_id: cId,
      };

      let res = await axios.post("api/register-classroom");

      console.log(res);
    };

    return { apply };
  },
};
</script>

<style></style>
