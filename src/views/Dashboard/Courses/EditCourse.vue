<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="EditeCourse">
      <div class="cover">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h2 class="st_title">
                <i class="fas fa-plus-circle"></i> تعديل دورة : {{ state.course_title }}
              </h2>
            </div>
            <div class="col-lg-6">
              <div v-if="state.save" class="alert alert-success" role="alert"> تم تعديل دورة بنجاح . <span style="{
                      font-size:18px;
                      cursor: pointer;
                      display: inline-block;
                      transition: .5s a,}
                      " @click="
                        this.redirectTo({
                          name: 'ShowCources',
                          params: {}
                        })"> عرض جميع الدورات </span>
              </div>
            </div>
          </div>
          <div class="bg">
            <div class="row">
              <div class="col-12">
                <div class="form">
                  <div class="form_content">
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        <div class="ui mt-30 focus box search">
                          <label>
                            <i class="fas fa-pencil-alt"></i>تغير عنوان الدورة</label>
                          <input type="text" v-model="state.course_title" name="" id="" />
                        </div>
                        <span class="text-danger fw-bold" v-if="v$.course_title.$error"> {{ v$.course_title.$errors[0].$message
                        }} </span>
                      </div>
                      <div class="col-lg-6 col-md-12">
                        <div class="mt-30 box">
                          <label>
                            <i class="fas fa-list"></i>تغير السنه الدراسيه </label>
                          <select v-model="state.course_year">
                            <option selected disabled value=""> اختيار من القائمة </option>
                            <option v-for="year in state.years_list" :key="year.id" :value="year.id">{{ year.year_name }}
                            </option>
                          </select>
                        </div>
                        <span class="text-danger fw-bold" v-if="v$.course_year.$error"> {{ v$.course_year.$errors[0].$message
                        }} </span>
                      </div>
                      <div class="col-lg-6 col-md-12">
                        <div class="box">
                          <label>
                            <i class="fas fa-list"></i>تغير الترم الدراسي </label>
                          <select v-model="state.course_term" class="ui hj145 cntry152">
                            <option selected disabled value=""> اختيار من القائمة </option>
                            <option value="1">الاول</option>
                            <option value="2">الثانى</option>
                          </select>
                        </div>
                        <span class="text-danger fw-bold" v-if="v$.course_term.$error"> {{ v$.course_term.$errors[0].$message
                        }} </span>
                      </div>
                      <div class="col-lg-6 col-md-6">
                          <div class="box">
                            <label id="file" for="file">اضافه صورة   </label>
                            <input type="file" class="file" @change="(e) => {
                              state.avatar = e.target.files[0];
                            }" />
                          </div>
                          <span class="text-danger fw-bold" v-if="v$.avatar.$error"> {{ v$.avatar.$errors[0].$message
                          }} </span>
                        </div>
                      <div class="col-lg-6 col-md-6 ">
                        <div class="box pt-2 ">
                          <div class="status mt-30 focus box search ">
                            <div class=" statusbg  d-flex align-items-center  gap-4 px-1 mt-4 ">
                              <input type="checkbox" name="" v-model="status" />
                              <label class="pt-4"> متاح </label>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button @click="SaveChanged()" data-direction="finish" class="btn btn-default steps_btn"> حفظ </button>
                </div>
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
import axios from "axios"
import { mapActions } from 'vuex';


import Toast from "@/components/Toast.vue";
import { reactive,onMounted,computed } from "vue";
import { useStore } from "vuex";
import { useVuelidate } from "@vuelidate/core";
import { required,minLength } from "@vuelidate/validators";


export default {
  name: "EditeCourse",
  components: { Footer,AsideBar,Header,Toast },
  props: ['id'],
  setup(props) {
    const state = reactive({
      user: computed(() => store.state.user),
      course: {},
      years_list: {},
      status: false,
      course_title: '',
      course_year: '',
      course_term: '',
      avatar: '',
      save: false
    });

    onMounted(async () => {
      if(state.user == null) {
        router.push("/dashboard/login");
      } else {
        if(state.user.role_id != 3) {
          router.push("/dashboard");
        }
      }

      // get our academicYears
      await axios.get(
        'api_dashboard/academicYears')
        .then((res) => {
          state.years_list = res.data.data;
          // console.log(state.years_list);
        })
        .catch(error => {
          console.log(error)
          // console.log(error.response.data.message);
        });

      // get  subject
      await axios.get(
        'api_dashboard/subjects/' + props.id)
        .then((res) => {
          state.course = res.data.data;
          state.course_title = res.data.data.name;
          state.course_year = res.data.data.academic_year_id;
          state.course_term = res.data.data.semester_id;
          state.avatar = res.data.data.image;
          state.status = res.data.data.status == "1" ? true : false
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.message);
        });
    });

    //notification
    const toast = reactive({
      showNotification: false,
      theme: "",
      notify: "",
    });

    const notification = (theme,message) => {
      toast.theme = theme;
      toast.notify = message;
      toast.showNotification = true;
      setTimeout(() => {
        toast.showNotification = false;
      },2000);
    };
    // Store and router

    const store = useStore();

    // validations

    const rules = computed(() => {
      return {
        course_title: { required },
        course_year: { required },
        course_term: { required },
        avatar: { required },
      };
    });

    const v$ = useVuelidate(rules,state);

    // add new course

    const SaveChanged = async () => {
      v$.value.$validate();
      if(!v$.value.$error) {
        let data = {
          name: state.course_title,
          academic_year_id: state.course_year,
          semester_id: state.course_term,
          image: state.avatar,
          status: state.status ? '1' : '0',
        }
        // Start Sending Request

        let res = await axios.post("/api_dashboard/subjects/" + props.id,data)
        if(res.status == 200) {
          state.save = true;
        }

      }
      else {
        notification("error","Missing Data !");
      }
    };

    return { state,v$,SaveChanged,toast };
  },
  methods: {
    ...mapActions(['redirectTo']),
  },

};
</script>

<style lang="scss">
.EditeCourse {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}
</style>

