<template>
  <div class="row mt-5 align-items-center justify-content-center ">
    <div class="col-lg-4 col-12" v-for="course in state.courses" :key="course.id">
      <div class="card course-box" style="width: 18rem">
        <img :src="'http://127.0.0.1:8000/Subject_image/maha_2023-06-16.PNG'" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ course.subject_name }}</h5>
          <p class="card-text text-muted">أ.{{ course.teacher_name }}</p>
          <p class="mt-2 mb-0 course-date text-muted">{{ course.start_date }}</p>
        </div>
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
      allcourses: [],
      courses: [],
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
          console.log(res.data.data.allStudent);
          state.allcourses = res.data.data.allStudent;
          state.courses.push(state.allcourses[0])
          state.courses.push(state.allcourses[1])
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

<style lang="scss">
.course-box {
  min-height: 350px !important;
  position: relative;
  padding-bottom: 35px;

  @media (max-width: 993px) {
    margin: 10px auto;
  }

  .course-date {
    border-top: 1px solid grey;
    padding: 5px;
    text-align: center;
    word-spacing: 8px;
    position: absolute;
    bottom: 0;
    width: 90%;
  }
}
</style>
