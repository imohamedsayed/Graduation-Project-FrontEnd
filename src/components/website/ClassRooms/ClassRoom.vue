<template>
  <div class="col-lg-4 col-md-6 col-12 mb-3">
    <div class="card">
      <img
        src="../../../../public/images/intro_background.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">
          <a :href="`/course/${data.id}`">{{ data.name }}</a>
        </h5>
        <p class="card-text">
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
        <button
          class="btn btn-success"
          @click="apply(data.id)"
          v-if="!state.alreadySubscribed"
          :id="'Subscribedincource' + data.id"
        >
          التقديم
        </button>
        <button
          class="btn btn-danger"
          :id="'Subscribedincource' + data.id"
          v-else
          @click="revoke(data.id)"
        >
          الغاء الاشتراك
        </button>
      </div>
    </div>
  </div>
  <teleport to="body">
    <Toast :theme="toast.theme" :showNotification="toast.showNotification">
      <p>{{ toast.notify }}</p>
    </Toast>
  </teleport>
</template>

<script>
import { onMounted, reactive, computed } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import Toast from "../../Toast.vue";
export default {
  props: ["data"],
  components: { Toast },
  setup(props) {
    const state = reactive({
      student: computed(() => useStore().state.student),
      alreadySubscribed: false,
    });

    onMounted(async () => {
      const res = await axios.get(
        "/api/classrooms-get-subscribed-classrooms/" + state.student.id
      );

      let classArray = res.data.data;
      classArray.forEach((cr) => {
        if (cr.id == props.data.id) {
          state.alreadySubscribed = true;
        }
      });
    });
    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });
    const notification = (theme, message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      }, 60000);
    };

    const apply = async (cId) => {
      let data = {
        classroom_id: cId,
      };
      let res = await axios.post("api/register-classroom", data);

      if (res.status == 200) {
        console.log(res);
        state.alreadySubscribed = true;
        notification("success", "لقد تم ارسال طلبك للاشتراك");
      } else {
        notification("error", err.response.data.message);
      }
    };
    const revoke = async (cId) => {
      let data = {
        classroom_id: cId,
      };
      console.log(data);

      let res = await axios.delete("api/unsubscribe-classroom/" + cId);

      if (res.status == 200) {
        console.log(res);
        state.alreadySubscribed = false;
        notification("success", "لقد تم الغاء الاشتراك");
      } else {
        notification("error", "حدث خطأ ما حاول مجددا لاحقا");
      }
    };
    return { state, apply, toast, revoke };
  },
};
</script>

<style scoped>
.card-body,
.list-group li {
  background: #d5def5;
}
.card-title a {
  color: black !important;
  font-size: 22px;
  font-weight: 500;
}
.card-text {
  color: black !important;
  font-size: 20px;
}
</style>
