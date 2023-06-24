<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="Editesection">
      <div class="cover">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="st_title">
                <i class="fas fa-plus-circle"></i> تعديل فصل :
                {{ state.name }}
              </h2>
            </div>
            <div class="col-lg-6">
              <div
                v-if="state.save"
                class="alert alert-success"
                style="position: fixed; top: 100px; right: 10px; z-index: 1000"
                role="alert"
              >
                تم تعديل فصل بنجاح .
                <span
                  style="
                     {
                      font-size: 18px;
                      cursor: pointer;
                      display: inline-block;
                      transition: 0.5s a;
                    }
                  "
                  @click="$router.push({ name: 'showsections' })"
                >
                  عرض جميع الفصول
                </span>
              </div>
            </div>
          </div>
          <div class="bg">
            <div class="row">
              <div class="col-12">
                <form class="form" @submit.prevent="updateSection">
                  <div class="form_content">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label> اسم الفصل</label>
                          <input
                            type="text"
                            v-model="state.name"
                            name=""
                            id=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.name.$error"
                          >
                            {{ v$.name.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i>اسم الدورة
                          </label>
                          <select v-model="state.course" class="">
                            <option
                              v-for="sub in state.subjects"
                              :key="sub.id"
                              :value="sub.id"
                            >
                              {{ sub.name }}
                            </option>
                          </select>
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.course.$error"
                          >
                            {{ v$.course.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-chalkboard-user"></i> اسم
                            المدرس</label
                          >
                          <select v-model="state.tech" class="">
                            <option
                              v-for="teacher in state.teachers"
                              :key="teacher.id"
                              :value="teacher.id"
                            >
                              {{ teacher.name }} - {{ teacher.id }}
                            </option>
                          </select>
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.tech.$error"
                          >
                            {{ v$.tech.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-dollar-sign"></i> السعر</label
                          >
                          <input
                            type="number"
                            v-model="state.price"
                            name=""
                            id=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.price.$error"
                          >
                            {{ v$.price.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-warehouse"></i> السعة القصوى
                          </label>
                          <input
                            type="number"
                            v-model="state.max"
                            name=""
                            id=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.max.$error"
                          >
                            {{ v$.max.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-clipboard-question"></i> امتحان
                            مسبق</label
                          >
                          <select v-model="state.exam" class="">
                            <option value="1" selected>yes</option>
                            <option value="0">No</option>
                          </select>
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.exam.$error"
                          >
                            {{ v$.exam.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-warehouse"></i> اقل سعة ممكنة
                          </label>
                          <input
                            type="number"
                            v-model="state.min_selected"
                            name=""
                            id=""
                            :disabled="state.exam != 1"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa-solid fa-warehouse"></i> الحد الادني
                            للدرجة
                          </label>
                          <input
                            type="number"
                            v-model="state.min_grade"
                            name=""
                            id=""
                            :disabled="state.exam != 1"
                          />
                        </div>
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-calendar-days"></i> تاريخ البدء
                          </label>
                          <input
                            type="datetime-local"
                            v-model="state.start"
                            name=""
                            id=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.start.$error"
                          >
                            {{ v$.start.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fa fa-calendar-days"></i> تاريخ
                            الانتهاء</label
                          >
                          <input
                            type="datetime-local"
                            v-model="state.end"
                            name=""
                            id=""
                          />
                          <span
                            class="text-danger fw-bold"
                            v-if="v$.end.$error"
                          >
                            {{ v$.end.$errors[0].$message }}
                          </span>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <div
                          class="ui mt-30 focus box search d-flex align-items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="status"
                            class="mb-3"
                            v-model="state.status"
                            style="width: 30px; height: 30px"
                          />
                          <label for="status" class="text-muted"> الحالة</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    data-direction="finish"
                    class="btn btn-default steps_btn"
                  >
                    حفظ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
  <teleport to="body">
    <Toast :theme="toast.theme" :showNotification="toast.showNotification">
      <p>{{ toast.notify }}</p>
    </Toast>
  </teleport>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "../../../components/Header.vue";
import AsideBar from "../../../components/AsideBar.vue";
import Toast from "@/components/Toast.vue";

import axios from "axios";

import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "Editesection",
  components: { Footer, AsideBar, Header, Toast },
  props: {
    id: String,
  },
  setup(props) {
    const state = reactive({
      user: computed(() => store.state.user),
      save: false,
      course: "",
      name: "",
      tech: "",
      max: "",
      price: "",
      exam: "",
      start: "",
      end: "",
      status: false,
      min_grade: 0,
      min_selected: 0,
      teachers: [],
      subjects: [],
    });

    onMounted(async () => {
      if (state.user == null) {
        router.push("/dashboard/login");
      } else {
        // get our teachers

        let teacher = await axios.get("/api_dashboard/teachers");

        if (teacher.status == 200) {
          state.teachers = teacher.data.data;
        } else {
          // error while getting data
        }

        // get our subjects

        let subject_res = await axios.get("/api_dashboard/subjects");

        if (subject_res.status == 200) {
          state.subjects = subject_res.data.data;
          //console.log(subject_res.data.data);
        } else {
          // error while getting data
        }

        let res = await axios.get("api_dashboard/classRooms/" + props.id);

        if (res.status == 200) {
          var classRoom = res.data.data;

          console.log(classRoom);

          state.name = classRoom.name;
          state.price = classRoom.price;
          state.tech = classRoom.teacher_name;
          state.max = classRoom.max_capacity;
          state.min_grade = classRoom.min_grade;
          state.min_selected = classRoom.min_selected;
          if (classRoom.prerequisite_exam != "Off") {
            state.exam = 1;
          } else {
            state.exam = 0;
          }
          if (classRoom.status != "Off") {
            state.status = true;
          } else {
            state.status = false;
          }

          state.start = classRoom.start_date;
          state.end = classRoom.registration_deadline;
        } else {
          notification("error", "something went wrong while getting data");
        }
      }
    });

    //notification
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
      }, 2000);
    };

    // Store and router

    const store = useStore();
    const router = useRouter();

    // validations

    const rules = computed(() => {
      return {
        course: { required },
        tech: { required },
        max: { required },
        price: { required },
        exam: { required },
        start: { required },
        end: { required },
        name: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    // update new section

    const updateSection = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        state.end = state.end.replace("T", " ");

        state.start = state.start.replace("T", " ");

        if (state.end.length != 19) {
          state.end += ":00";
        }
        if (state.start.length != 19) {
          state.start += ":00";
        }

        let data = {
          name: state.name,
          price: state.price,
          prerequisite_exam: state.exam,
          status: String(Number(state.status)),
          registration_deadline: state.end,
          start_date: state.start,
          max_capacity: state.max,
          branch_id: state.user.exter_info.branch_id,
          subject_id: state.course,
          teacher_id: state.tech,
          min_grade: state.min_grade,
          min_selected: state.min_selected,
        };

        console.log(data);
        let response = await axios.post(
          "api_dashboard/classRooms/" + props.id,
          data
        );
        if (response.status) {
          state.save = true;
        } else {
          notification("error", "Error while submitting data");
        }
      } else {
        notification("error", "Missing Data !");
      }
    };

    return { state, v$, updateSection, toast };
  },
};
</script>

<style lang="scss">
.Editesection {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}
</style>
