<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="edit-appointment">
      <div class="container">
        <h3 class="header" dir="rtl">
          <i
            class="fa-solid fa-pen-to-square ms-2"
            style="color: var(--blue-color)"
          ></i>
          تعديل الموعد : {{ state.appointment.day }} :
          {{ state.appointment.from }} - {{ state.appointment.to }}
        </h3>
        <div class="app-data" dir="rtl">
          <form @submit.prevent="editAppointment()">
            <div class="row">
              <div class="col-md-6 col-12">
                <label><i class="fa-regular fa-calendar ms-2"></i>اليوم</label>
                <select name="class" v-model="state.day">
                  <option value="0">الجمعة</option>
                  <option value="1">السبت</option>
                  <option value="2">الاحد</option>
                  <option value="3">الاثنين</option>
                  <option value="4">الثلاثاء</option>
                  <option value="5">الاربعاء</option>
                  <option value="6">الخميس</option>
                </select>
                <span class="text-danger fw-bold" v-if="v$.day.$error">
                  {{ v$.day.$errors[0].$message }}
                </span>
              </div>
              <div class="col-md-6 col-12">
                <label><i class="fa-regular fa-clock ms-2"></i>من</label>
                <input type="time" v-model="state.from" />
                <span class="text-danger fw-bold" v-if="v$.from.$error">
                  {{ v$.from.$errors[0].$message }}
                </span>
              </div>
              <div class="col-md-6 col-12">
                <label><i class="fa-regular fa-clock ms-2"></i>الي</label>

                <input type="time" v-model="state.to" />
                <span class="text-danger fw-bold" v-if="v$.to.$error">
                  {{ v$.to.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="text-center">
              <button type="submit">تعديل الموعد</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  </div>
  <teleport to="body">
    <Toast :theme="toast.theme" :showNotification="toast.showNotification">
      <p>{{ toast.notify }}</p>
    </Toast>
  </teleport>
</template>

<script>
import Footer from "../../../../components/Footer.vue";
import Header from "../../../../components/Header.vue";
import AsideBar from "../../../../components/AsideBar.vue";
import Toast from "@/components/Toast.vue";
import axios from "axios";
import { reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  components: { Footer, AsideBar, Header, Toast },
  props: ["id"],
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      user: computed(() => store.state.user),
      day: "",
      from: "",
      to: "",
      appointment: "",
      days: {
        الجمعة: 0,
        السبت: 1,
        الأحد: 2,
        الأثنين: 3,
        الثلاثاء: 4,
        الأربعاء: 5,
        الخميس: 6,
      },
    });

    onMounted(async () => {
      if (state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
      } else {
        try {
          let res = await axios.get("api_dashboard/appointment/" + props.id);
          if (res.status == 200) {
            state.appointment = res.data.data;
            state.day = state.days[state.appointment.day];
            state.to = state.appointment.to;
            state.from = state.appointment.from;
          } else {
            notification("error", "هناك خطأ ما , عاود المحاولة لاحقا");
          }
        } catch (error) {
          notification("error", err.response.data.message);
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

    const rules = computed(() => {
      return {
        day: { required },
        from: { required },
        to: { required },
      };
    });
    const v$ = useVuelidate(rules, state);

    const editAppointment = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        let data = {
          day: state.day,
          from: state.from + ":00",
          to: state.to + ":00",
        };

        try {
          let res = await axios.post(
            "api_dashboard/appointment/" + props.id,
            data
          );

          if (res.status == 200) {
            notification("success", "تم تعديل المعاد");
          } else {
            notification("error", "هناك خطأ ما , عاود المحاولة لاحقا");
          }
        } catch (err) {
          console.log(err);
          notification("error", err.response.data.message);
        }
      } else {
        notification("error", "Missing Data");
      }
    };

    return { state, toast, editAppointment, v$ };
  },
};
</script>

<style lang="scss">
.edit-appointment {
  margin-right: 14rem;
  @media (max-width: 991px) {
    margin-right: 0;
  }
  padding-top: 10px;
  .header {
    color: var(--text-black);
    font-size: 1.4rem;
    margin-block: 30px;
  }
  .app-data {
    background: #fff;
    margin: 60px 0;
    padding: 30px 20px;
    button {
      padding: 10px 15px;
      border: none;
      border-radius: 15px;
      color: white;
      font-weight: bold;
      background: var(--blue-color);
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }
    .row {
      margin-top: 30px;
      label {
        font-size: 1.2rem;
      }
      input,
      select {
        width: 100%;
        margin-top: 10px;
        height: 45px;
        border-radius: 10px;
        padding: 10px 20px;
        border: 1px solid #999;
        transition: all 0.3s ease;
        &:focus {
          outline: none;
          transform: scale(1.05);
        }
      }

      > div {
        margin-bottom: 40px;
      }
    }
    button {
      padding: 10px 15px;
      border: none;
      border-radius: 15px;
      color: white;
      font-weight: bold;
      background: var(--blue-color);
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
