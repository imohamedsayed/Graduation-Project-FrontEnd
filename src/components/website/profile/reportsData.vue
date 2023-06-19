<template>
  <div class="">
    <div class="row">
      <div class="col-lg-6 col-sm-12" v-for="cours in state.accepted_courses" :key="cours.id">
        <div class="box d-flex ">
          <router-link :to="{ name: 'course', params: { id: cours.id } }"> {{ cours.name }} </router-link>
        </div>
      </div>
      <div class="col-12" v-if="!state.accepted_courses.length">
        <div class="box"> لم تقم بالتسجيل فى اى مقرر </div>
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
import Toast from "@/components/Toast.vue";
import { reactive,onMounted,computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  components: { Toast },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });

    const state = reactive({
      accepted_courses: [],
      std_id: computed(() => useStore().state.student.id),

    });

    const notification = (theme,message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      },2000);
    };

    onMounted(async () => {
      await axios
        .get("api/all-classroom-basedOnAuthStudent/3")
        .then((res) => {
          state.accepted_courses = res.data.data.allStudent;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.message)
          notification('error',error.response.data.message)
        });
    });


    return { state,toast };
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

    a {
      color: var(--darker-blue);
      transition: .3s ease-in-out;
      font-weight: bold;
    }
  }
}
</style>
