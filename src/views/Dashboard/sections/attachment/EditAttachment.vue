<template>
  <Header />
  <div class="main-view">
    <AsideBar />
    <div class="add-appointment">
      <div class="container">
        <h3 class="header" dir="rtl">
          <i
            class="fa-solid fa-file-pdf ms-2"
            style="color: var(--blue-color)"
          ></i>
          تعديل ملحق : {{ state.attachment.name }}
        </h3>
        <div class="app-data" dir="rtl">
          <form
            @submit.prevent="editAttachment()"
            enctype="multipart/form-data"
          >
            <div class="row">
              <div class="col-md-6 col-12">
                <label><i class="fa-regular fa-calendar ms-2"></i>الفصل</label>
                <input
                  type="text"
                  disabled
                  :value="state.attachment.classroom_name"
                />
              </div>
              <div class="col-md-6 col-12">
                <label><i class="fa-solid fa-file-pdf ms-2"></i>الملف</label>
                <input type="file" @change="storeFile" />
                <span class="text-danger fw-bold" v-if="v$.file.$error">
                  {{ v$.file.$errors[0].$message }}
                </span>
              </div>
              <div class="col-md-6 col-12">
                <label
                  ><i class="fa-solid fa-audio-description ms-2"></i
                  >الوصف</label
                >
                <input type="text" v-model="state.description" />
                <span class="text-danger fw-bold" v-if="v$.description.$error">
                  {{ v$.description.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="text-center">
              <button type="submit">تعديل الملف</button>
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
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      user: computed(() => store.state.user),
      description: "",
      file: "",
      classRoom: "",
      attachment: "",
    });

    onMounted(async () => {
      if (state.user == null || state.user.role_id != 3) {
        router.push("/dashboard/login");
      } else {
        try {
          let attachResults = await axios.get(
            "api_dashboard/attachment/" + Number(props.id)
          );
          if (attachResults.status == 200) {
            state.attachment = attachResults.data.data;
            state.description = state.attachment.description;
            state.file = state.attachment.name;
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
        description: { required },
        file: { required },
      };
    });
    const v$ = useVuelidate(rules, state);

    const storeFile = (e) => {
      state.file = e.target.files[0];
      console.log(state.file);
    };

    const editAttachment = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        let data = {
          name: state.file,
          description: state.description,
          class_room_id: state.classRoom.id,
        };

        try {
          let res = await axios.post(
            "api_dashboard/attachment/" + props.id,
            data,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          if (res.status == 200) {
            notification("success", "تم تعديل الملف بنجاح");
          } else {
            notification("error", "حدث خطأ اثناء تعديل الملف, حاول مرة اخري");
          }
        } catch (err) {
          notification("error", err.response.data.message);
        }
      } else {
        notification("error", "البيانات غير مكتملة");
      }
    };

    return { state, toast, editAttachment, v$, storeFile };
  },
};
</script>

<style lang="scss">
.add-appointment {
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
