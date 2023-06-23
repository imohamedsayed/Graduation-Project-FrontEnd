<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="test">
      <div class="test-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="test-title125">
                <div class="test-titleleft">
                  <div class="test-ttl121">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <router-link :to="{ name: 'home' }"
                            >الرئيسية
                          </router-link>
                        </li>
                        <li class="breadcrumb-item">
                          <router-link
                            :to="{ name: 'course', params: { id: cid } }"
                            >الرجوع الى الوراء
                          </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          {{ state.exam.name }}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="title126">
                <img
                  src="../../../../public/images/categories/Right.png"
                  alt=""
                />
                <h2>{{ state.exam.name }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="test-cart">
      <div class="test-content2">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div
                class="question my-5"
                v-for="question in state.questions"
                :key="question.id"
              >
                <div
                  class="single-choice-question"
                  v-if="question.type.toLowerCase() == 'single choice'"
                >
                  <p
                    class="fw-semibold fs-4 question-title d-flex justify-content-between"
                  >
                    <span
                      ><i class="fa-solid fa-circle-question ms-2"></i
                      >{{ question.question }}</span
                    >
                    <span class="text-muted">({{ question.point }}) درجة</span>
                  </p>
                  <hr class="mb-2" />
                  <img
                    v-if="question.image"
                    :src="'http://127.0.0.1:8000/' + question.image"
                    alt=""
                    style="width: 100%; height: 300px"
                  />
                  <p class="text-muted">توضيح : {{ question.explanation }}</p>
                  <div
                    class="choice me-2 fw-semibold mb-4"
                    v-for="option in question.options"
                    :key="option.id"
                    style="font-size: 1.4rem"
                  >
                    <input
                      type="radio"
                      disabled
                      :checked="
                        state.my_options.includes(option.id) ? true : false
                      "
                      style="width: 25px; height: 25px"
                      :name="question.id"
                      :value="option.id"
                    />
                    {{ option.option }}
                    <span
                      class="true_answer"
                      v-if="
                        state.my_options.includes(option.id) &&
                        option.is_correct
                      "
                    >
                      اجابتك صحيحة
                    </span>
                    <span
                      class="false_answer"
                      v-else-if="
                        state.my_options.includes(option.id) &&
                        !option.is_correct
                      "
                      >اجابتك خاطئة</span
                    >
                    <span
                      class="true_answer"
                      v-else-if="
                        !state.my_options.includes(option.id) &&
                        option.is_correct
                      "
                      >الاجابة الصحيحة
                    </span>
                  </div>
                </div>

                <div
                  class="multi-choice-question"
                  v-if="question.type.toLowerCase() == 'multiple choice'"
                >
                  <p
                    class="fw-semibold fs-4 question-title d-flex justify-content-between"
                  >
                    <span
                      ><i class="fa-solid fa-circle-question ms-2"></i
                      >{{ question.question }}</span
                    >
                    <span class="text-muted">({{ question.point }}) درجة</span>
                  </p>
                  <hr class="mb-2" />
                  <img
                    :src="'http://127.0.0.1:8000/' + question.image"
                    alt=""
                    style="width: 100%; height: 300px"
                    v-if="question.image"
                  />
                  <p class="text-muted">توضيح : {{ question.explanation }}</p>
                  <div
                    class="choice me-2 fw-semibold mb-4"
                    v-for="option in question.options"
                    :key="option.id"
                    style="font-size: 1.4rem"
                  >
                    <input
                      type="checkbox"
                      disabled
                      :checked="
                        state.my_options.includes(option.id) ? true : false
                      "
                      :name="question.id"
                      :value="option.id"
                      style="width: 25px; height: 25px"
                    />
                    {{ option.option }}
                    <span
                      class="true_answer"
                      v-if="
                        state.my_options.includes(option.id) &&
                        option.is_correct
                      "
                    >
                      اجابتك صحيحة
                    </span>
                    <span
                      class="false_answer"
                      v-else-if="
                        state.my_options.includes(option.id) &&
                        !option.is_correct
                      "
                      >اجابتك خاطئة</span
                    >
                    <span
                      class="true_answer"
                      v-else-if="
                        !state.my_options.includes(option.id) &&
                        option.is_correct
                      "
                      >الاجابة الصحيحة
                    </span>
                  </div>
                </div>

                <div
                  class="TF-choice-question"
                  v-if="question.type.toLowerCase() == 't/f'"
                >
                  <p
                    class="fw-semibold fs-4 question-title d-flex justify-content-between"
                  >
                    <span
                      ><i class="fa-solid fa-circle-question ms-2"></i
                      >{{ question.question }}</span
                    >
                    <span class="text-muted">({{ question.point }}) درجة</span>
                  </p>
                  <hr class="mb-2" />
                  <div v-if="question.image">
                    <img
                      :src="'http://127.0.0.1:8000/' + question.image"
                      alt=""
                      style="width: 100%; height: 300px"
                    />
                  </div>

                  <p class="text-muted">توضيح : {{ question.explanation }}</p>
                  <div
                    class="choice me-2 fw-semibold mb-4"
                    v-for="option in question.options"
                    :key="option.id"
                    style="font-size: 1.4rem"
                  >
                    <input
                      type="radio"
                      disabled
                      :checked="
                        state.my_options.includes(option.id) ? true : false
                      "
                      style="width: 25px; height: 25px"
                      class="ms-2"
                      :name="question.id"
                      :value="option.id"
                    />
                    <span>{{ option.option }}</span>
                    <span
                      class="true_answer"
                      v-if="
                        state.my_options.includes(option.id) &&
                        option.is_correct
                      "
                    >
                      اجابتك صحيحة
                    </span>
                    <span
                      class="false_answer"
                      v-else-if="
                        state.my_options.includes(option.id) &&
                        !option.is_correct
                      "
                      >اجابتك خاطئة</span
                    >
                    <span
                      class="true_answer"
                      v-else-if="
                        !state.my_options.includes(option.id) &&
                        option.is_correct
                      "
                      >الاجابة الصحيحة
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4" v-if="state.exam">
              <div class="faq1256">
                <div class="container">
                  <div class="row justify-content-md-center">
                    <div class="certi_form rght1528">
                      <div class="test_timer_bg">
                        <ul class="test_timer_left">
                          <li>
                            <div class="timer_time">
                              <h4>{{ state.questions.length }}</h4>
                              <p>سؤال</p>
                            </div>
                          </li>
                          <li>
                            <div class="timer_time">
                              <h4 id="timer">
                                {{ state.exam.Result.total_score }}
                              </h4>
                              <p>درجة</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
  <SpinnerLoading :loading="state.loading" />
  <teleport to="body">
    <Toast :theme="toast.theme" :showNotification="toast.showNotification">
      <p>{{ toast.notify }}</p>
    </Toast>
  </teleport>
</template>

<script>
import Footer from "../../../components/Footer.vue";
import Header from "@/components/StudentHeader.vue";
import AsideBar from "../../../components/WebsiteAsideBar.vue";
import testComponent from "../../../components/test/testComponent.vue";
import t_fOption from "../../../components/test/t_fOption.vue";
import multiChoiceOption from "../../../components/test/multiChoiceOption.vue";
import Toast from "@/components/Toast.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { reactive, onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  components: {
    Footer,
    AsideBar,
    Header,
    testComponent,
    t_fOption,
    multiChoiceOption,
    Toast,
    SpinnerLoading,
  },
  props: {
    id: String,
    cid: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
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

    const state = reactive({
      student: computed((_) => store.state.student),
      exam: "",
      exam_result: "",
      questions: [],
      loading: false,
      Choices: [],
      my_options: [],
    });
    const examForm = ref(null);

    onMounted(async () => {
      if (!state.student) {
        router.push("/");
      }

      state.loading = true;

      //  get exam result
      await axios
        .get("api/show-all-previous-exam/" + props.cid)
        .then((res) => {
          if (res.data.data) {
            let trueExams = res.data.data.allExam.filter((e) => {
              if (e) {
                return e;
              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
          // console.log(error.response.data.errors);
        });

      //  get exam

      let res = await axios.get(
        "/api/preview-exam/" + props.cid + "/" + props.id
      );
      // console.log(res.data.data);

      state.exam = res.data.data.preview.exam;
      state.questions = res.data.data.preview.questions;
      state.Choices = res.data.data.preview.Choices;

      // get my options
      state.questions.forEach((question) => {
        state.Choices.forEach((choice) => {
          if (question.id === choice.question_id) {
            question.options.forEach((option) => {
              if (option.id === choice.studnet_choice) {
                state.my_options.push(option.id);
              }
            });
          }
        });
      });

      state.loading = false;
    });

    return { state, examForm, toast };
  },
};
</script>

<style lang="scss" scoped>
.test,
.test-cart {
  margin-right: 14rem;

  @media (max-width: 991px) {
    margin-right: 0;
  }
}

.test-content {
  direction: rtl;
  padding: 30px 20px;
  width: 100%;
  background-color: #f1f1f1;
}

.test-content2 {
  background-color: #fffcfc;
  direction: rtl;
  padding: 30px 10px;
  width: 100%;
}

.test-title125 {
  width: 100%;
  float: left;
}

.test-titleleft {
  float: right;
}

.titleright {
  float: left;
}

.test-ttl121 .breadcrumb {
  padding: 0 !important;
  direction: rtl;
}

.test-ttl121 .breadcrumb-item {
  font-size: 20px;
  font-weight: 400;
  color: #333;
  font-family: "Roboto", sans-serif;
  line-height: 24px;
}

.test-ttl121 .breadcrumb-item a {
  color: #333;
}

.breadcrumb-item.active {
  color: #6c757d;
}

.breadcrumb-item + .breadcrumb-item {
  padding-right: 0.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "/";
  display: inline-block;
  padding-left: 0.5em;
  color: #6c757d;
  float: right !important;
}

.title126 {
  float: left;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  margin-top: 25px !important;
}

.title126 img {
  width: 35px;
  height: 35px;
  margin: 0 0 0 20px;
}

.title126 h2 {
  font-size: 28px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: #333;
  text-align: right;
  line-height: 30px;
  margin-top: 10px;
}

.rght1528 {
  position: sticky;
  top: 90px;
}

.certi_form {
  float: right;
  width: 100%;
  margin: 50px 0 65px;
  text-align: right;
}

.rght1528 {
  position: sticky;
  top: 90px;
}

.test_timer_bg {
  background: #fff;
  width: 100%;
  float: left;
  padding: 0;
  border-radius: 10px;
  margin-bottom: 50px;
  border: 1px solid #efefef;
  transition: all 0.2s ease-in-out;
}

.test_timer_left {
  width: 100%;
  float: left;
  display: flex;
  flex-direction: row-reverse;
}

.timer_time {
  float: left;
  width: 100%;
  text-align: center;
}

.timer_time h4 {
  font-size: 24px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
  line-height: 26px;
  height: 100px;
  width: 100px;
  display: inline-block;
  border: 2px solid #333;
  border-radius: 100%;
  padding: 35px 0;
  background: #fff;
}

h4:first-child {
  margin-top: auto;
}

h4:last-child {
  margin-bottom: 0;
}

.timer_time p {
  font-size: 25px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #333;
  margin-top: 0;
  text-align: center;
  line-height: 26px;
}

.test_timer_left li {
  width: 50%;
  float: left;
  display: inline-block;
  padding: 30px 20px;
  border-left: 1px solid #efefef;
}

@media screen and (max-width: 767px) {
  .test_timer_bg,
  .certi_form {
    margin-bottom: 0;
  }

  .test_timer_bg,
  .certi_form {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 991px) {
  .rght1528 {
    margin-top: 25px;
  }
}

button.btn {
  width: 220px;
  height: 60px;
}

.test_submit_btn {
  font-size: 15px;
  margin-right: 80px;
  margin-bottom: 80px;
  font-weight: 600;
  color: #fff !important;
  background-color: var(--blue-color) !important;
  border-radius: 20px;
  text-align: center;
  border: 0;
  width: 50%;
  float: right;
  height: 40px;
  padding: 10px 0;
}

.test_submit_btn:hover {
  color: white !important;
  background: var(--darker-blue) !important;
}

.question-title {
  color: var(--light-blue) !important;
}

.true_answer {
  color: green;
  margin-right: 20px;
}

.false_answer {
  color: red;
  margin-right: 20px;
}
</style>
